<template>
    <h1>Layout 布局容器</h1>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构。</p>

    <h2>常见的页面布局</h2>
    <xmv-code :code="code_1">
        <div class="common-layout">
            <xmv-layout headHval="60px" lWval="0px">
                <template #top>
                    Header
                </template>
                <template #right>
                    Main
                </template>
            </xmv-layout>
        </div>
    </xmv-code>

    <p text="sm"></p>

    <xmv-code :code="code_2">
        <div class="common-layout">
            <xmv-layout headHval="60px" footHval="60px" lWval="0px">
                <template #top>
                    Header
                </template>
                <template #right>
                    Main
                </template>
                <template #foot>
                    foot
                </template>
            </xmv-layout>
        </div>
    </xmv-code>

    <p text="sm"></p>

    <xmv-code :code="code_3">
        <div class="common-layout">
            <xmv-layout headHval="0px" lWval="200px">
                <template #left>
                    Left
                </template>
                <template #right>
                    Main
                </template>
            </xmv-layout>
        </div>
    </xmv-code>

    <p text="sm"></p>

    <xmv-code :code="code_4">
        <div class="common-layout t-lr">
            <xmv-layout headHval="60px" lWval="200px">
                <template #top>
                    Top
                </template>
                <template #left>
                    Left
                </template>
                <template #right>
                    Main
                </template>
            </xmv-layout>
        </div>
    </xmv-code>

    <p text="sm"></p>

    <xmv-code :code="code_5">
        <div class="common-layout t-lr">
            <xmv-layout headHval="60px" lWval="200px" mode="l_tr">
                <template #top>
                    Top
                </template>
                <template #left>
                    Left
                </template>
                <template #right>
                    Main
                </template>
            </xmv-layout>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {

        let code_1 = 
                        `
                            <xmv-layout headHval="60px" lWval="0px">
                                <template #top>
                                    Header
                                </template>
                                <template #right>
                                    Main
                                </template>
                            </xmv-layout>
                        `

        let code_2 =
                        `
                            <xmv-layout headHval="60px" footHval="60px" lWval="0px">
                                <template #top>
                                    Header
                                </template>
                                <template #right>
                                    Main
                                </template>
                                <template #foot>
                                    foot
                                </template>
                            </xmv-layout>
                        `

        let code_3 = 
                        `
                            <xmv-layout headHval="0px" footHval="0px" lWval="200px">
                                <template #left>
                                    Left
                                </template>
                                <template #right>
                                    Main
                                </template>
                            </xmv-layout>
                        `
        let code_4 = 
                        `
                            <xmv-layout headHval="60px" lWval="200px">
                                <template #top>
                                    Top
                                </template>
                                <template #left>
                                    Left
                                </template>
                                <template #right>
                                    Main
                                </template>
                            </xmv-layout>
                        `

        let code_5 = 
                        `
                            <xmv-layout headHval="60px" lWval="200px" mode="l_tr">
                                <template #top>
                                    Top
                                </template>
                                <template #left>
                                    Left
                                </template>
                                <template #right>
                                    Main
                                </template>
                            </xmv-layout>
                        `
        return {code_1 ,code_2 ,code_3 ,code_4 ,code_5}
    }
})
</script>

<style>
    .common-layout{
        height: 300px;
    }
    .common-layout .xmv-layout-top,
    .common-layout .xmv-layout-left,
    .common-layout .xmv-layout-foot {
        background-color: var(--xmv-color-primary-light-7);
        color: var(--xmv-text-color-primary);
        text-align: center;
    }

    .common-layout .xmv-layout-right {
        background-color: var(--xmv-color-primary-light-9);
        color: var(--xmv-text-color-primary);
        text-align: center;
    }

    .common-layout .xmv-layout-top,
    .common-layout .xmv-layout-left,
    .common-layout .xmv-layout-right,
    .common-layout .xmv-layout-foot{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .common-layout.t-lr .xmv-layout-left{
        background-color: var(--xmv-color-primary-light-8);
        color: var(--xmv-text-color-primary);
        text-align: center;
    }
</style>
