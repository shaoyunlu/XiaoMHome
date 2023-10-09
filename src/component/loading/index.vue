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
    <xmv-code>
        <xmv-table v-loading="loading" :data="tableData" style="width: 100%">
            <xmv-table-column prop="date" label="Date" width="180" />
            <xmv-table-column prop="name" label="Name" width="180" />
            <xmv-table-column prop="address" label="Address" />
        </xmv-table>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

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
        },
        ]

        return {loading,tableData}
    }
})
</script>

<style lang="" scoped></style>
