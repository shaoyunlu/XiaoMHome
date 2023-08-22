<template>
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符</p>
    <h2>基础用法</h2>
    <xmv-code :code="code_1">
        <xmv-input v-model="input1"></xmv-input>
    </xmv-code>
    <h2>禁用状态</h2>
    <p text="sm"><p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p></p>
    <xmv-code :code="code_2">
        <xmv-input v-model="input2" disabled />
    </xmv-code>
    <h2>一键清空</h2>
    <p text="sm"><p>使用<code>clearable</code>属性即可得到一个可一键清空的输入框</p></p>
    <xmv-code :code="code_3">
        <xmv-input v-model="input3" clearable />
    </xmv-code>
    <h2>密码框</h2>
    <p text="sm"><p>使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框</p></p>
    <xmv-code :code="code_4">
        <xmv-input v-model="input4" type="password" show-password/>
    </xmv-code>
    <h2>带图标的输入框</h2>
    <p>带有图标标记输入类型</p>
    <p text="sm"><p>要在输入框中添加图标，你可以简单地使用 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性。</p></p>
    <xmv-code :code="code_5">
        <xmv-row style="align-items: center;">
            <xmv-col :span="5">使用内置图标</xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input5" prefix-icon="calendar"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input5" suffix-icon="search"></xmv-input>
            </xmv-col>
        </xmv-row>
        <xmv-row style="align-items: center;">
            <xmv-col :span="5">使用外部导入图标</xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input5" :prefix-icon="arrowLeftIcon"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input5" :suffix-icon="arrowRightIcon"></xmv-input>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>文本域</h2>
    <p>用于输入多行文本信息可缩放的输入框。 添加 <code>type="textarea"</code> 属性来将 <code>input</code> 元素转换为原生的 <code>textarea</code> 元素。</p>
    <p text="sm"><p>文本域高度可通过 <code>rows</code> 属性控制</p></p>
    <xmv-code :code="code_6">
        <xmv-input v-model="textarea" :rows="2" type="textarea"/>
    </xmv-code>
    <h2>自适应文本域</h2>
    <p>设置文字输入类型的 <code>autosize</code> 属性使得根据内容自动调整的高度。 你可以给 <code>autosize</code> 提供一个包含有最大和最小高度的对象，让输入框自动调整。</p>
    <xmv-code :code="code_7">
        <xmv-input type="textarea" :autosize="{minRows:2 ,maxRows:4}" v-model="textarea2"></xmv-input>
    </xmv-code>
    <h2>尺寸</h2>
    <p text="sm"><p>使用 <code>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项： <code>large</code>, <code>small</code>。</p></p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="7">
                <xmv-input size="large" v-model="input8"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input8"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input size="small" v-model="input8"></xmv-input>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="7">
                <xmv-input size="large" v-model="input8" prefix-icon="search"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input8" prefix-icon="search"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input size="small" v-model="input8" prefix-icon="search"></xmv-input>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="7">
                <xmv-input size="large" v-model="input8" suffix-icon="search"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input v-model="input8" suffix-icon="search"></xmv-input>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-input size="small" v-model="input8" suffix-icon="search"></xmv-input>
            </xmv-col>
        </xmv-row>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import arrowLeftIcon from './arrowLeft.vue'
import arrowRightIcon from './arrowRight.vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const input1 = ref('')
        const input2 = ref('')
        const input3 = ref('')
        const input4 = ref('')
        const input5 = ref('')
        const input8 = ref('')
        const textarea = ref('')
        const textarea2 = ref('')
        let code_1 =
                        `
                            // JS
                            const input1 = ref('')
                            // Template
                            <xmv-input v-model="input1"></xmv-input>
                        `
        let code_2 =
                        `
                            // JS
                            const input2 = ref('')
                            // Template
                            <xmv-input v-model="input2" disabled />
                        `
        let code_3 =
                        `
                            // JS
                            const input3 = ref('')
                            // Template
                            <xmv-input v-model="input3" clearable />
                        `
        let code_4 =
                        `
                            // JS
                            const input4 = ref('')
                            // Template
                            <xmv-input v-model="input4" type="password" show-password/>
                        `
        let code_5 =
                        `
                            // JS
                            import arrowLeftIcon from './arrowLeft.vue'
                            import arrowRightIcon from './arrowRight.vue'
                            // Template
                            <xmv-row style="align-items: center;">
                                <xmv-col :span="5">使用内置图标</xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input v-model="input5" prefix-icon="calendar"></xmv-input>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input v-model="input5" suffix-icon="search"></xmv-input>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row style="align-items: center;">
                                <xmv-col :span="5">使用外部导入图标</xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input v-model="input5" :prefix-icon="arrowLeftIcon"></xmv-input>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-input v-model="input5" :suffix-icon="arrowRightIcon"></xmv-input>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_6 = 
                        `
                            // JS
                            const textarea = ref('')
                            // Template
                            <xmv-input v-model="textarea" :rows="2" type="textarea"/>
                        `
        let code_7 =
                        `
                            // JS
                            const textarea2 = ref('')
                            // Template
                            <xmv-input type="textarea" :autosize="{minRows:2 ,maxRows:4}" v-model="textarea2"></xmv-input>
                        `
        return {input1,input2,input3,input4,input5,arrowLeftIcon ,arrowRightIcon,
                textarea,textarea2,input8,
                code_1,code_2,code_3,code_4,code_5,code_6,code_7}
    }
})
</script>

<style lang="" scoped></style>
