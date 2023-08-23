<template>
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <h2>基础用法</h2>
    <p>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</p>
    <p text="sm"><p>要使用 Radio 组件，只需要设置<code>v-model</code>绑定变量， 
        选中意味着变量的值为相应 Radio <code>label</code>属性的值， 
        <code>label</code>可以是<code>String</code>、<code>Number</code> 或 <code>Boolean</code>。</p>
    </p>
    <xmv-code :code="code_1">
        <div>
            <xmv-radio-group v-model="radio1_1">
                <xmv-radio label="1" size="large">Option 1</xmv-radio>
                <xmv-radio label="2" size="large">Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
        <div>
            <xmv-radio-group v-model="radio1_2">
                <xmv-radio label="1">Option 1</xmv-radio>
                <xmv-radio label="2">Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
        <div>
            <xmv-radio-group v-model="radio1_3">
                <xmv-radio label="1" size="small">Option 1</xmv-radio>
                <xmv-radio label="2" size="small">Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
    </xmv-code>
    <h2>禁用状态</h2>
    <p><code>disabled</code> 属性可以用来控制单选框的禁用状态。</p>
    <p text="sm"><p>你只需要为单选框设置 <code>disabled</code> 属性就能控制其禁用状态。</p></p>
    <xmv-code :code="code_2">
        <xmv-radio-group v-model="radio2">
            <xmv-radio label="1" disabled>Option 1</xmv-radio>
            <xmv-radio label="2" disabled>Option 2</xmv-radio>
        </xmv-radio-group>
    </xmv-code>
    <h2>按钮样式</h2>
    <p>你可以让单选框看起来像一个按钮一样。</p>
    <p text="sm"><p>只需要把 <code>xmv-radio</code> 元素换成 <code>xmv-radio-button</code> 元素即可， 
        此外，XiaoMUI 还提供了 <code>size</code> 属性用来控制单选框的大小。</p>
    </p>
    <xmv-code :code="code_1">
        <div>
            <xmv-radio-group v-model="radio3_1">
                <xmv-radio-button label="1" size="large">Option 1</xmv-radio-button>
                <xmv-radio-button label="2" size="large">Option 2</xmv-radio-button>
                <xmv-radio-button label="3" size="large">Option 3</xmv-radio-button>
                <xmv-radio-button label="4" size="large">Option 4</xmv-radio-button>
                <xmv-radio-button label="5" size="large">Option 5</xmv-radio-button>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio3_2">
                <xmv-radio-button label="1">Option 1</xmv-radio-button>
                <xmv-radio-button label="2">Option 2</xmv-radio-button>
                <xmv-radio-button label="3">Option 3</xmv-radio-button>
                <xmv-radio-button label="4">Option 4</xmv-radio-button>
                <xmv-radio-button label="5">Option 5</xmv-radio-button>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio3_3">
                <xmv-radio-button label="1" size="small">Option 1</xmv-radio-button>
                <xmv-radio-button label="2" size="small">Option 2</xmv-radio-button>
                <xmv-radio-button label="3" size="small">Option 3</xmv-radio-button>
                <xmv-radio-button label="4" size="small">Option 4</xmv-radio-button>
                <xmv-radio-button label="5" size="small">Option 5</xmv-radio-button>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio3_4">
                <xmv-radio-button label="1" size="small" disabled>Option 1</xmv-radio-button>
                <xmv-radio-button label="2" size="small" disabled>Option 2</xmv-radio-button>
                <xmv-radio-button label="3" size="small" disabled>Option 3</xmv-radio-button>
                <xmv-radio-button label="4" size="small" disabled>Option 4</xmv-radio-button>
                <xmv-radio-button label="5" size="small" disabled>Option 5</xmv-radio-button>
            </xmv-radio-group>
        </div>
    </xmv-code>
    <h2>带有边框</h2>
    <p text="sm"><p>设置 <code>border</code> 属性可以渲染为带有边框的单选框。</p></p>
    <xmv-code>
        <div>
            <xmv-radio-group v-model="radio4_1">
                <xmv-radio label="1" size="large" border>Option 1</xmv-radio>
                <xmv-radio label="2" size="large" border>Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio4_2">
                <xmv-radio label="1" border>Option 1</xmv-radio>
                <xmv-radio label="2" border>Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio4_3">
                <xmv-radio label="1" size="small" border>Option 1</xmv-radio>
                <xmv-radio label="2" size="small" border>Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
        <div style="margin-top:20px">
            <xmv-radio-group v-model="radio4_4">
                <xmv-radio label="1" size="small" border disabled>Option 1</xmv-radio>
                <xmv-radio label="2" size="small" border disabled>Option 2</xmv-radio>
            </xmv-radio-group>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const radio1_1 = ref("1")
        const radio1_2 = ref("1")
        const radio1_3 = ref("1")
        const radio2 = ref("1")
        const radio3_1 = ref("1")
        const radio3_2 = ref("2")
        const radio3_3 = ref("3")
        const radio3_4 = ref("1")
        const radio4_1 = ref("1")
        const radio4_2 = ref("1")
        const radio4_3 = ref("1")
        const radio4_4 = ref("1")
        let code_1 =
                        `
                            // JS
                            const radio1_1 = ref("1")
                            const radio1_2 = ref("2")
                            const radio1_3 = ref("1")
                            // Template
                            <div>
                                <xmv-radio-group v-model="radio1_1">
                                    <xmv-radio label="1" size="large">Option 1</xmv-radio>
                                    <xmv-radio label="2" size="large">Option 2</xmv-radio>
                                </xmv-radio-group>
                            </div>
                            <div>
                                <xmv-radio-group v-model="radio1_2">
                                    <xmv-radio label="1">Option 1</xmv-radio>
                                    <xmv-radio label="2">Option 2</xmv-radio>
                                </xmv-radio-group>
                            </div>
                            <div>
                                <xmv-radio-group v-model="radio1_3">
                                    <xmv-radio label="1" size="small">Option 1</xmv-radio>
                                    <xmv-radio label="2" size="small">Option 2</xmv-radio>
                                </xmv-radio-group>
                            </div>
                        `
            let code_2 =
                        `
                            // JS
                            const radio2 = ref("1")
                            // Template
                            <xmv-radio-group v-model="radio2">
                                <xmv-radio label="1" disabled>Option 1</xmv-radio>
                                <xmv-radio label="2" disabled>Option 2</xmv-radio>
                            </xmv-radio-group>
                        `
        return {radio1_1 ,radio1_2 ,radio1_3 ,radio2 ,
                radio3_1 ,radio3_2 ,radio3_3, radio3_4,
                radio4_1,radio4_2,radio4_3,radio4_4,
                code_1 ,code_2}
    }
})
</script>

<style lang="" scoped></style>
