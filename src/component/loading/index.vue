<template>
    <h1>Loading 加载</h1>
    <p>加载数据时显示动效。</p>
    <h2>区域加载</h2>
    <p>在需要的时候展示加载动画，防止页面失去响应提高用户体验（例如表格）。</p>
    <p text="sm">
        <p>xiaomeng-vue-ui 提供了两种调用 Loading 的方法：指令和服务。 对于自定义指令 <code>v-loading</code>，
            只需要绑定 <code>boolean</code> 值即可。 默认状况下，Loading 遮罩会插入到绑定元素的子节点。 
            通过添加 <code>body</code> 修饰符，可以使遮罩插入至 Dom 中的 body 上。</p>
    </p>
    <xmv-code :code="code_1">
        <div>
            <xmv-table v-loading="loading" :data="tableData" style="width: 100%">
                <xmv-table-column prop="date" label="Date"  />
                <xmv-table-column prop="name" label="Name"  />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>自定义加载中组件内容</h2>
    <p>你可以自定义加载中组件的文字，图标，以及背景颜色。</p>
    <p text="sm"><p>在绑定了<code>v-loading</code>指令的元素上添加<code>xmv-loading-text</code>属性，
        其值会被渲染为加载文案，并显示在加载图标的下方。 类似地，
        <code>xmv-loading-background</code> 
        和 <code>xmv-loading-svg</code> 属性分别用来设定 背景色值、svg 图标。</p>
    </p>
    <xmv-code :code="code_2">
        <div>
            <xmv-table
                v-loading="loading"
                :xmv-loading-svg="svg"
                xmv-loading-text="Loading..."
                xmv-loading-svg-view-box="-10, -10, 50, 50"
                xmv-loading-background="rgba(122, 122, 122, 0.8)"
                :data="tableData"
                style="width: 100%">
                <xmv-table-column prop="date" label="Date"  />
                <xmv-table-column prop="name" label="Name"  />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>让加载组件铺满整个屏幕</h2>
    <p>加载数据时显示全屏动画。</p>
    <p text="sm"><p>当使用指令方式时，全屏遮罩需要添加<code>fullscreen</code>修饰符（遮罩会插入至 body 上） 此时若需要锁定屏幕的滚动，
        可以使用<code>lock</code>修饰符； 当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-button
            v-loading.fullscreen.lock="fullscreenLoading"
            type="primary"
            @click="openFullScreen1">
            As a directive
        </xmv-button>
        <xmv-button type="primary" @click="openFullScreen2"> As a service </xmv-button>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
import {XmvLoading} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const loading = ref(true)
        const fullscreenLoading = ref(false)

        const tableData = [
            {
                date: '2016-05-02',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-04',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            },
            {
                date: '2016-05-01',
                name: 'John Smith',
                address: 'No.1518,  Jinshajiang Road, Putuo District',
            }
        ]

        const svg = `
                        <path class="path" d="
                        M 30 15
                        L 28 17
                        M 25.61 25.61
                        A 15 15, 0, 0, 1, 15 30
                        A 15 15, 0, 1, 1, 27.99 7.5
                        L 15 15
                        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
                    `

        const code_1 =
                        `
                            // JS
                            const loading = ref(true)
                            const tableData = [
                                {
                                    date: '2016-05-02',
                                    name: 'John Smith',
                                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                                },
                                {
                                    date: '2016-05-04',
                                    name: 'John Smith',
                                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                                },
                                {
                                    date: '2016-05-01',
                                    name: 'John Smith',
                                    address: 'No.1518,  Jinshajiang Road, Putuo District',
                                }
                            ]
                            // Template
                            <xmv-table v-loading="loading" :data="tableData" style="width: 100%">
                                <xmv-table-column prop="date" label="Date" width="180" />
                                <xmv-table-column prop="name" label="Name" width="180" />
                                <xmv-table-column prop="address" label="Address" />
                            </xmv-table>
                        `
        const code_2 =
                        `
                            // JS
                            const svg = 
                                            <path class="path" d="
                                            M 30 15
                                            L 28 17
                                            M 25.61 25.61
                                            A 15 15, 0, 0, 1, 15 30
                                            A 15 15, 0, 1, 1, 27.99 7.5
                                            L 15 15
                                            " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
                            // Template 
                            <div>
                                <xmv-table
                                    v-loading="loading"
                                    :xmv-loading-svg="svg"
                                    xmv-loading-text="Loading..."
                                    xmv-loading-svg-view-box="-10, -10, 50, 50"
                                    xmv-loading-background="rgba(122, 122, 122, 0.8)"
                                    :data="tableData"
                                    style="width: 100%">
                                    <xmv-table-column prop="date" label="Date"  />
                                    <xmv-table-column prop="name" label="Name"  />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        const code_3 =
                        `
                            <xmv-button
                                v-loading.fullscreen.lock="fullscreenLoading"
                                type="primary"
                                @click="openFullScreen1">
                                As a directive
                            </xmv-button>
                            <xmv-button type="primary" @click="openFullScreen2"> As a service </xmv-button>
                        `
        const openFullScreen1 = ()=>{
            fullscreenLoading.value = true
            setTimeout(() => {
                fullscreenLoading.value = false
            }, 2000)
        }

        const openFullScreen2 =()=>{
            const loading = XmvLoading.service({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            setTimeout(() => {
                loading.close()
            }, 2000)
        }
        return {loading,tableData,svg,fullscreenLoading,openFullScreen1,openFullScreen2,
                code_1,code_2,code_3}
    }
})
</script>

<style lang="" scoped></style>
