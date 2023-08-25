<template>
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h2>基础用法</h2>
    <p text="sm"><p>适用广泛的基础单选 <code>v-model</code> 的值为当前被选中的 <code>xmv-option</code> 的 value 属性值</p></p>
    <xmv-code :code="code_1">
        <xmv-row>
            <xmv-col :span="7">
                <xmv-select v-model="select1" size="large">
                    <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                </xmv-select>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-select v-model="select1">
                    <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                </xmv-select>
            </xmv-col>
            <xmv-col :span="7" :offset="1" size="small">
                <xmv-select v-model="select1">
                    <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                </xmv-select>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>有禁用选项</h2>
    <p text="sm"><p>在 <code>xmv-option</code> 中，设定 <code>disabled</code> 值为 true，即可禁用该选项</p></p>
    <xmv-code :code="code_2">
        <xmv-select v-model="select2">
            <xmv-option v-for="tmp in options2" 
                :key="tmp.value" :label="tmp.label" :value="tmp.value" :disabled="tmp.disabled"></xmv-option>
        </xmv-select>
    </xmv-code>
    <h2>禁用状态</h2>
    <p>禁用整个选择器组件</p>
    <p text="sm"><p>为 <code>xmv-select</code> 设置 <code>disabled</code>属性，则整个选择器不可用。</p></p>
    <xmv-code :code="code_3">
        <xmv-select v-model="select3" disabled>
            <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
        </xmv-select>
    </xmv-code>
    <h2>可清空单选</h2>
    <p>您可以使用清除图标来清除选择。</p>
    <p text="sm">
        <p>为 <code>xmv-select</code> 设置 <code>clearable</code> 属性，则可将选择器清空。 需要注意的是，
        <code>clearable</code> 属性仅适用于单选。</p>
    </p>
    <xmv-code :code="code_4">
        <xmv-select v-model="select4" clearable>
            <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
        </xmv-select>
    </xmv-code>
    <h2>基础多选</h2>
    <p>多选选择器使用 tag 组件来展示已选中的选项。</p>
    <p text="sm"><p>为 <code>xmv-select</code> 设置 <code>multiple</code> 属性即可启用多选， 
        此时 <code>v-model</code> 的值为当前选中值所组成的数组。 默认情况下选中值会以 Tag 组件的形式展现， 
        你也可以设置 <code>collapse-tags</code> 属性将它们合并为一段文字。 
        您可以使用 <code>collapse-tags-tooltip</code> 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。</p>
    </p>
    <xmv-code :code="code_5">
        <div>
            <p>default</p>
            <xmv-select v-model="select5_1" multiple>
                <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
            </xmv-select>
            <p>collapseTags</p>
            <xmv-select v-model="select5_2" multiple collapse-tags>
                <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
            </xmv-select>
        </div>
    </xmv-code>
    <h2>筛选选项</h2>
    <p>可以利用筛选功能快速查找选项。</p>
    <p text="sm"><p>为<code>xmv-select</code>添加<code>filterable</code>属性即可启用搜索功能。 默认情况下，Select 会找出所有 <code>label</code> 属性包含输入值的选项。</p></p>
    <xmv-code :code="code_6">
        <xmv-select v-model="select6" filterable>
            <xmv-option v-for="tmp in options1" 
                :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
        </xmv-select>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const select1 = ref("")
        const select2 = ref("")
        const select3 = ref("")
        const select4 = ref("")
        const select5_1 = ref([])
        const select5_2 = ref([])
        const select6 = ref('')
        const options1 = [
            {value: 'Option1',label: 'Option1',},
            {value: 'Option2',label: 'Option2',},
            {value: 'Option3',label: 'Option3',},
            {value: 'Option4',label: 'Option4',},
            {value: 'Option5',label: 'Option5',}
        ]
        const options2 = [
            {value: 'Option1',label: 'Option1',},
            {value: 'Option2',label: 'Option2',},
            {value: 'Option3',label: 'Option3',},
            {value: 'Option4',label: 'Option4',},
            {value: 'Option5',label: 'Option5',disabled:true}
        ]

        let code_1 = 
                        `
                            // JS
                            const select1 = ref("")
                            const options1 = [
                                {value: 'Option1',label: 'Option1',},
                                {value: 'Option2',label: 'Option2',},
                                {value: 'Option3',label: 'Option3',},
                                {value: 'Option4',label: 'Option4',},
                                {value: 'Option5',label: 'Option5',}
                            ]
                            // Template
                            <xmv-row>
                                <xmv-col :span="7">
                                    <xmv-select v-model="select1" size="large">
                                        <xmv-option v-for="tmp in options1" :key="tmp.value" 
                                        :label="tmp.label" :value="tmp.value"></xmv-option>
                                    </xmv-select>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-select v-model="select1">
                                        <xmv-option v-for="tmp in options1" :key="tmp.value" 
                                        :label="tmp.label" :value="tmp.value"></xmv-option>
                                    </xmv-select>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1" size="small">
                                    <xmv-select v-model="select1">
                                        <xmv-option v-for="tmp in options1" :key="tmp.value" 
                                        :label="tmp.label" :value="tmp.value"></xmv-option>
                                    </xmv-select>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_2 =    
                        `
                            // JS
                            const select2 = ref("")
                            // Template
                            <xmv-select v-model="select2">
                                <xmv-option v-for="tmp in options2" 
                                    :key="tmp.value" :label="tmp.label" :value="tmp.value" 
                                    :disabled="tmp.disabled"></xmv-option>
                            </xmv-select>
                        `
        let code_3 =
                        `
                            // JS
                            const select3 = ref("")
                            // Template
                            <xmv-select v-model="select3" disabled>
                                <xmv-option v-for="tmp in options1" :key="tmp.value" 
                                :label="tmp.label" :value="tmp.value"></xmv-option>
                            </xmv-select>
                        `
        let code_4 = 
                        `
                            // JS
                            const select4 = ref("")
                            // Template
                            <xmv-select v-model="select4" clearable>
                                <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                            </xmv-select>
                        `
        let code_5 =
                        `
                            // JS
                            const select5_1 = ref([])
                            const select5_2 = ref([])
                            // Template
                            <div>
                                <p>default</p>
                                <xmv-select v-model="select5_1" multiple>
                                    <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                                </xmv-select>
                                <p>collapseTags</p>
                                <xmv-select v-model="select5_2" multiple collapse-tags>
                                    <xmv-option v-for="tmp in options1" :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                                </xmv-select>
                            </div>
                        `
        let code_6 = 
                        `
                            // JS
                            const select6 = ref('')
                            // Template
                            <xmv-select v-model="select6" filterable>
                                <xmv-option v-for="tmp in options1" 
                                    :key="tmp.value" :label="tmp.label" :value="tmp.value"></xmv-option>
                            </xmv-select>
                        `
        return {select1,select2,select3,select4,select5_1,select5_2,select6,
                options1,options2,
                code_1,code_2,code_3,code_4,code_5,code_6}
    }
})
</script>

<style lang="" scoped></style>
