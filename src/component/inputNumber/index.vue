<template>
    <h1>Input Number 数字输入框</h1>
    <p>仅允许输入标准的数字值，可定义范围</p>
    <h2>基础用法</h2>
    <p text="sm">
        <p>要使用它，只需要在 <code>&lt;xmv-input-number&gt;</code> 
        元素中使用 <code>v-model</code> 绑定变量即可，变量的初始值即为默认值。</p>
        <p>可以设置 <code>min</code> 属性和 <code>max</code> 属性控制取值范围， 默认最小值为 0。</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-input-number v-model="number1" :min="1" :max="10"></xmv-input-number>
    </xmv-code>
    <h2>禁用状态</h2>
    <p text="sm">
        <p><code>disabled</code>属性接受一个 <code>Boolean</code>，设置为<code>true</code>
        即可禁用整个组件。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-input-number v-model="number2" disabled></xmv-input-number>
    </xmv-code>
    <h2>步进</h2>
    <p>允许定义递增递减的步进控制</p>
    <p text="sm"><p>设置 <code>step</code> 属性可以控制步长。</p></p>
    <xmv-code :code="code_3">
        <xmv-input-number :step="2" v-model="number3"></xmv-input-number>
    </xmv-code>
    <h2>严格步进</h2>
    <p text="sm"><p><code>step-strictly</code>属性接受一个<code>Boolean</code>。 如果这个属性被设置为 <code>true</code>，则只能输入步进的倍数。</p></p>
    <xmv-code :code="code_7">
        <xmv-input-number v-model="number7" :step="7" step-strictly></xmv-input-number>
    </xmv-code>
    <h2>精度</h2>
    <p text="sm"><p>设置 <code>precision</code> 属性可以控制数值精度，接收一个 <code>Number</code>。</p></p>
    <xmv-code :code="code_4">
        <xmv-input-number v-model="number4" :precision="2" :step="0.11"></xmv-input-number>
    </xmv-code>
    <h2>不同的输入框尺寸</h2>
    <p>使用 <code>size</code> 属性额外配置尺寸，可选的尺寸大小为：<code>large</code> 或 <code>small</code></p>
    <xmv-code :code="code_5">
        <xmv-row>
            <xmv-col :span="7">
                <xmv-input-number v-model="number5" size="large"></xmv-input-number>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input-number v-model="number5"></xmv-input-number>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input-number v-model="number5" size="small"></xmv-input-number>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>按钮位置</h2>
    <p text="sm"><p>设置 <code>controls-position</code> 属性可以控制按钮位置。</p></p>
    <xmv-code :code="code_6">
        <xmv-row>
            <xmv-col :span="7">
                <xmv-input-number v-model="number6" size="large" controls-position="right"></xmv-input-number>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input-number v-model="number6" controls-position="right"></xmv-input-number>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input-number v-model="number6" size="small" controls-position="right"></xmv-input-number>
            </xmv-col>
        </xmv-row>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const number1 = ref(1)
        const number2 = ref(1)
        const number3 = ref(1)
        const number4 = ref(1)
        const number5 = ref(1)
        const number6 = ref(1)
        const number7 = ref(7)
        let code_1 =
                        `
                            // JS
                            const number1 = ref(1)
                            // Template
                            <xmv-input-number v-model="number1" :min="1" :max="10"></xmv-input-number>
                        `
        let code_2 =
                        `
                            // JS
                            const number2 = ref(1)
                            // Template
                            <xmv-input-number v-model="number2" disabled></xmv-input-number>
                        `
        let code_3 =
                        `
                            // JS
                            const number3 = ref(1)
                            // Template
                            <xmv-input-number :step="2" v-model="number3"></xmv-input-number>
                        `
        let code_4 =
                        `
                            // JS
                            const number4 = ref(1)
                            // Template
                            <xmv-input-number v-model="number4" :precision="2" :step="0.11"></xmv-input-number>
                        `
        let code_5 =
                        `
                            // JS
                            const number5 = ref(1)
                            // Template
                            <xmv-row>
                                <xmv-col :span="7">
                                    <xmv-input-number v-model="number5" size="large"></xmv-input-number>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input-number v-model="number5"></xmv-input-number>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input-number v-model="number5" size="small"></xmv-input-number>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_6 =
                        `
                            // JS
                            const number6 = ref(1)
                            // Template
                            <xmv-row>
                                <xmv-col :span="7">
                                    <xmv-input-number v-model="number6" size="large" 
                                        controls-position="right"></xmv-input-number>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input-number v-model="number6" 
                                        controls-position="right"></xmv-input-number>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input-number v-model="number6" size="small" 
                                        controls-position="right"></xmv-input-number>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_7 =
                        `
                            // JS
                            const number7 = ref(7)
                            // Template
                            <xmv-input-number v-model="number7" :step="7" step-strictly></xmv-input-number>
                        `
        return {number1,number2,number3,number4,number5,number6,number7,
                code_1,code_2,code_3,code_4,code_5,code_6,code_7}
    }
})
</script>

<style lang="" scoped></style>
