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
    <h2>选择透明度</h2>
    <p text="sm"><p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过<code>show-alpha</code>
        属性即可控制是否支持透明度的选择。 要启用 Alpha 选择，只需添加 <code>show-alpha</code> 属性。</p></p>
    <xmv-code :code="code_2">
        <xmv-color-picker v-model="color3" show-alpha></xmv-color-picker>
    </xmv-code>
    <h2>不同尺寸</h2>
    <p text="sm"><p>通过设置<code>size</code>属性，可调整按钮的大小</p></p>
    <xmv-code :code="code_3">
        <div class="demo-color-sizes">
            <xmv-color-picker v-model="color" size="large" />
            <xmv-color-picker v-model="color" />
            <xmv-color-picker v-model="color" size="small" />
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
        const color = ref('rgb(255 ,0 ,0)')
        const color1 = ref('rgb(17 ,206 ,180)')
        const color2 = ref('')
        const color3 = ref('rgba(19, 206, 102, 0.8)')
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
        let code_2 = 
                        `
                            // JS
                            const color3 = ref('rgba(19, 206, 102, 0.8)')
                            // Template
                            <xmv-color-picker v-model="color3" show-alpha></xmv-color-picker>
                        `
        let code_3 = 
                        `
                            <div class="demo-color-sizes">
                                <xmv-color-picker v-model="color" size="large" />
                                <xmv-color-picker v-model="color" />
                                <xmv-color-picker v-model="color" size="small" />
                            </div>
                        `
        return {color1 ,color2 ,color3 ,color ,code_1 ,code_2 ,code_3}
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
    .demo-color-sizes .xmv-color-picker:not(:last-child) {
        margin-right: 16px;
    }
</style>
