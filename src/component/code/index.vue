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
        <transition name="xmv-code" v-on="on">
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

        const on = {
            beforeEnter(el){
                if (!el.dataset) el.dataset = {}

                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom

                el.style.maxHeight = 0
                el.style.paddingTop = 0
                el.style.paddingBottom = 0
            },
            enter(el){
                el.dataset.oldOverflow = el.style.overflow
                if (el.scrollHeight !== 0) {
                    el.style.maxHeight = `${el.scrollHeight}px`
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                } else {
                    el.style.maxHeight = 0
                    el.style.paddingTop = el.dataset.oldPaddingTop
                    el.style.paddingBottom = el.dataset.oldPaddingBottom
                }

                el.style.overflow = 'hidden'
            },
            afterEnter(el) {
                el.style.maxHeight = ''
                el.style.overflow = el.dataset.oldOverflow
            },
            beforeLeave(el){
                if (!el.dataset) el.dataset = {}
                el.dataset.oldPaddingTop = el.style.paddingTop
                el.dataset.oldPaddingBottom = el.style.paddingBottom
                el.dataset.oldOverflow = el.style.overflow

                el.style.maxHeight = `${el.scrollHeight}px`
                el.style.overflow = 'hidden'
            },
            leave(el){
                if (el.scrollHeight !== 0) {
                    el.style.maxHeight = 0
                    el.style.paddingTop = 0
                    el.style.paddingBottom = 0
                }
            },
            afterLeave(el){
                el.style.maxHeight = ''
                el.style.overflow = el.dataset.oldOverflow
                el.style.paddingTop = el.dataset.oldPaddingTop
                el.style.paddingBottom = el.dataset.oldPaddingBottom
            }
        }

        return {codeShow ,on ,handleClick}
    }
})
</script>

<style>
    .xmv-code-leave-active,
    .xmv-code-enter-active {
        transition: var(--xmv-transition-duration) max-height ease-in-out,var(--xmv-transition-duration) padding-top ease-in-out,var(--xmv-transition-duration) padding-bottom ease-in-out;
    }
</style>
