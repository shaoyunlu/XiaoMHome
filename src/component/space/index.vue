<template>
    <h1>Space 间距</h1>
    <p><strong>间距组件</strong>为组件之间提供统一的间距风格。</p>
    <h2>基础用法</h2>
    <p>最基础的用法，通过这个组件来给组件之间提供统一的间距。</p>
    <xmv-code :code="code_1">
        <xmv-space>
            <xmv-card v-for="tmp in arr">
                <template #header>
                    标题{{ tmp }}
                </template>
                <div class="demo-card-body">内容{{ tmp }}</div>
            </xmv-card>
        </xmv-space>
    </xmv-code>
    <h2>垂直布局</h2>
    <xmv-code :code="code_2">
        <xmv-space direction="vertical">
            <xmv-card v-for="tmp in arr">
                <template #header>
                    标题{{ tmp }}
                </template>
                <div class="demo-card-body">内容{{ tmp }}</div>
            </xmv-card>
        </xmv-space>
    </xmv-code>
    <h2>控制间距的大小</h2>
    <p>通过调整 <code>size</code> 的值来控制间距的大小</p>
    <p>使用内置的 <code>small</code>、<code>default</code>、<code>large</code> 来设置间距大小，分别对应 <code>8px</code>、<code>12px</code> 和 <code>16px</code> 的间距。 默认的间距大小为 <code>small</code>，也就是 <code>8px</code>。</p>
    <p>您也可以通过自定义的 size 来控制大小， 参见下一个部分。</p>
    <xmv-code :code="code_3">
        <xmv-space :size="30" direction="vertical">
            <xmv-radio-group v-model="sizeRef">
                <xmv-radio label="large">large</xmv-radio>
                <xmv-radio label="default">default</xmv-radio>
                <xmv-radio label="small">small</xmv-radio>
            </xmv-radio-group>
            <xmv-space :size="sizeRef">
                <xmv-card v-for="tmp in arr">
                    <template #header>
                        标题{{ tmp }}
                    </template>
                    <div class="demo-card-body">内容{{ tmp }}</div>
                </xmv-card>
            </xmv-space>
        </xmv-space>
    </xmv-code>
    <h2>自定义Size</h2>
    <p>很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。</p>
    <xmv-code>
        <xmv-slider v-model="sizeNumRef"></xmv-slider>
        <xmv-space :size="sizeNumRef">
            <xmv-card v-for="tmp in arr">
                <template #header>
                    标题{{ tmp }}
                </template>
                <div class="demo-card-body">内容{{ tmp }}</div>
            </xmv-card>
        </xmv-space>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        const sizeNumRef = ref(12)
        const arr = [1,2,3]
        const sizeRef = ref('large')
        let code_1 = 
                        `
                            // JS
                            const arr = [1,2,3]
                            //Template
                            <xmv-space>
                                <xmv-card v-for="tmp in arr">
                                    <template #header>
                                        标题{{ tmp }}
                                    </template>
                                    <div class="demo-card-body">内容{{ tmp }}</div>
                                </xmv-card>
                            </xmv-space>
                        `
        let code_2 = 
                        `
                            // JS
                            const arr = [1,2,3]
                            //Template
                            <xmv-space direction="vertical">
                                <xmv-card v-for="tmp in arr">
                                    <template #header>
                                        标题{{ tmp }}
                                    </template>
                                    <div class="demo-card-body">内容{{ tmp }}</div>
                                </xmv-card>
                            </xmv-space>
                        `

        let code_3 =
                        `
                           // JS
                           const arr = [1,2,3]
                           const sizeRef = ref('large')
                           // Template
                           <xmv-space :size="30" direction="vertical">
                                <xmv-radio-group v-model="sizeRef">
                                    <xmv-radio label="large">large</xmv-radio>
                                    <xmv-radio label="default">default</xmv-radio>
                                    <xmv-radio label="small">small</xmv-radio>
                                </xmv-radio-group>
                                <xmv-space :size="sizeRef">
                                    <xmv-card v-for="tmp in arr">
                                        <template #header>
                                            标题{{ tmp }}
                                        </template>
                                        <div class="demo-card-body">内容{{ tmp }}</div>
                                    </xmv-card>
                                </xmv-space>
                            </xmv-space> 
                        `
        return {sizeRef ,arr ,code_1 ,code_2 ,code_3 ,sizeNumRef}
    }
})
</script>

<style scoped>
    .demo-card-body{
        width : 260px;
    }
</style>
