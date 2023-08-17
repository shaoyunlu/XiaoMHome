<template>
    <div class="example">
        <div class="example-showcase">
            <slot></slot>
        </div>
        <xmv-divider style="margin:0"></xmv-divider>
        <div class="op-btns">
            <xmv-tooltip content="查看源代码" :isAlignCenter="true">
                <xmv-icon name="vew" class="op-btn" @click="handleClick"></xmv-icon>
            </xmv-tooltip>
        </div>
        <transition name="xmv-fade-in">
            <div v-show="codeShow" class="example-source-wrapper">
                <div class="example-source language-vue">
                    <pre style="font-size: 14px;margin: 0;">
                        <code class="language-javascript" 
                            style="display: block;margin-left: -200px;margin-top: -30px;margin-bottom: -60px;">
                            {{ code }}
                        </code>
                    </pre>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"xmvCode",
    props:{
        code : String
    },
    setup(props ,context) {
        const codeShow = ref(false)

        const handleClick = ()=>{
            Prism.highlightAll()
            codeShow.value = !codeShow.value
        }
        return {codeShow ,handleClick}
    }
})
</script>

<style lang="" scoped></style>
