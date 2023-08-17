<template>
    <h1>ColorPicker 颜色选择器</h1>
    <p>用于颜色选择，支持多种格式。</p>
    <h2>基础用法</h2>
    <p text="sm"><p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p></p>
    <xmv-code :code="code_1">
        <div class="demo-color-block">
            <span class="demonstration">带默认颜色值</span>
            <xmv-color-picker v-model="color1" />
        </div>
        <div class="demo-color-block">
            <span class="demonstration">不带默认颜色值</span>
            <xmv-color-picker v-model="color2" />
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        const color1 = ref('rgb(17 ,206 ,180)')
        const color2 = ref('')

        let code_1 = 
                        `
                            // JS
                            const color1 = ref('rgb(17 ,206 ,180)')
                            const color2 = ref('')
                            // Template
                            <div class="demo-color-block">
                                <span class="demonstration">With default value</span>
                                <xmv-color-picker v-model="color1" />
                            </div>
                            <div class="demo-color-block">
                                <span class="demonstration">With no default value</span>
                                <xmv-color-picker v-model="color2" />
                            </div>  
                        `

        return {color1 ,color2 ,code_1}
    }
})
</script>

<style>
    .demo-color-block {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    .demo-color-block .demonstration {
        margin-right: 16px;
    }
</style>
