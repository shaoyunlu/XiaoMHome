<template>
    <h1>Slider 滑块</h1>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h2>基础用法</h2>
    <p>在拖动滑块时，显示当前值</p>
    <p text="sm"><p>通过设置绑定值自定义滑块的初始值</p></p>
    <xmv-code :code="code_1">
        <xmv-row>
            <xmv-col :span="6">默认</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider1_1"></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="6">初始值</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider1_2"></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="6">格式化</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider1_3" :format-tooltip="formatTooltip"></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="6">disabled</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider1_4" disabled></xmv-slider>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>离散值</h2>
    <p>选项可以是离散的</p>
    <p text="sm"><p>改变<code>step</code>的值可以改变步长， 通过设置 <code>show-stops</code> 属性可以显示间断点</p></p>
    <xmv-code :code="code_2">
        <xmv-row>
            <xmv-col :span="6">不显示分割点</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider2_1" :step="5"></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="6">显示分割点</xmv-col>
            <xmv-col :offset="1" :span="17">
                <xmv-slider v-model="slider2_2" :step="20" show-step></xmv-slider>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>带有输入框的滑块</h2>
    <p>通过输入框输入来改变当前的值。</p>
    <p text="sm"><p>设置 <code>show-input</code> 属性会在右侧显示一个输入框</p></p>
    <xmv-code :code="code_3">
        <xmv-slider v-model="slider3" show-input></xmv-slider>
    </xmv-code>
    <h2>不同尺寸</h2>
    <xmv-code :code="code_4">
        <xmv-row>
            <xmv-col>
                <xmv-slider v-model="slider4_1" size="small" show-input></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col>
                <xmv-slider v-model="slider4_2" show-input></xmv-slider>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col>
                <xmv-slider v-model="slider4_3" size="large" show-input></xmv-slider>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>范围选择</h2>
    <p>你还可以选择一个范围值</p>
    <p text="sm"><p>配置 <code>range</code> 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。</p></p>
    <xmv-code :code="code_5">
        <xmv-slider v-model="slider5" range></xmv-slider>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const slider1_1 = ref(0)
        const slider1_2 = ref(10)
        const slider1_3 = ref(0)
        const slider1_4 = ref(0)
        const slider2_1 = ref(0)
        const slider2_2 = ref(0)
        const slider3 = ref(0)
        const slider4_1 = ref(0)
        const slider4_2 = ref(0)
        const slider4_3 = ref(0)
        const slider5 = ref([10,50])

        let code_1 =
                        `
                            // JS
                            const slider1_1 = ref(0)
                            const slider1_2 = ref(10)
                            const slider1_3 = ref(0)
                            const slider1_4 = ref(0)
                            // Template
                            <xmv-row>
                                <xmv-col :span="6">默认</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider1_1"></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col :span="6">初始值</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider1_2"></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col :span="6">格式化</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider1_3" :format-tooltip="formatTooltip"></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col :span="6">disabled</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider1_4" disabled></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_2 = 
                        `
                            // JS
                            const slider2_1 = ref(0)
                            const slider2_2 = ref(0)
                            // Template
                            <xmv-row>
                                <xmv-col :span="6">不显示分割点</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider2_1" :step="5"></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col :span="6">显示分割点</xmv-col>
                                <xmv-col :offset="1" :span="17">
                                    <xmv-slider v-model="slider2_2" :step="20" show-step></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_3 =
                        `
                            // JS
                            const slider3 = ref(0)
                            // Template
                            <xmv-slider v-model="slider3" show-input></xmv-slider>
                        `
        let code_4 =
                        `
                            // JS
                            const slider4_1 = ref(0)
                            const slider4_2 = ref(0)
                            const slider4_3 = ref(0)
                            //Template
                            <xmv-row>
                                <xmv-col>
                                    <xmv-slider v-model="slider4_1" size="small" show-input></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col>
                                    <xmv-slider v-model="slider4_2" show-input></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col>
                                    <xmv-slider v-model="slider4_3" size="large" show-input></xmv-slider>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_5=
                        `
                            // JS
                            const slider5 = ref([10,50])
                            // Template
                            <xmv-slider v-model="slider5" range></xmv-slider>
                        `
        const formatTooltip = (val)=>{
            return val/100
        }

        return {slider1_1,slider1_2,slider1_3,slider1_4,slider5,
                slider2_1,slider2_2,slider3,slider4_1,slider4_2,slider4_3,
                code_1,code_2,code_3,code_4,code_5,
                formatTooltip}
    }
})
</script>

<style lang="" scoped></style>
