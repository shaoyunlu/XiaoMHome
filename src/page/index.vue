<template>
    <h1>Xiaomeng-Vue-UI</h1>
    <p>一个基于 vue3 的前端 UI 框架。</p>
    <h2>安装方式</h2>
    <pre style="font-size: 14px;margin: 0;">
        <code class="language-javascript" 
            style="display: block;margin-left: -200px;margin-top: -60px;margin-bottom: -80px;">
                {{ code }}
        </code>
    </pre>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const code = 
                        `
                            npm install xiaomeng-vue-ui -S
                        `
        return {code}
    }
})
</script>

<style lang="" scoped></style>
