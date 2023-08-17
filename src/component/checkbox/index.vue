<template>
    <h1>Checkbox 多选框</h1>
    <p>在一组备选项中进行多选。</p>
    <h2>基础用法</h2>
    <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <p text="sm"><p>在 <code>xmv-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code> 中，
        默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>。 在 <code>xmv-checkbox</code> 组件中，
        <code>label</code> 是选择框的值。 如果该组件下没有被传入内容，那么 <code>label</code> 将会作为 checkbox 按钮后的介绍。</p>
    </p>
    <xmv-code :code="code_1">
        <div>
            <xmv-checkbox label="Option1" size="large" v-model="checkbox1">Option 1</xmv-checkbox>
            <xmv-checkbox label="Option2" size="large">Option 2</xmv-checkbox>
        </div>
        <div>
            <xmv-checkbox label="Option1" v-model="checkbox1">Option 1</xmv-checkbox>
            <xmv-checkbox label="Option2">Option 2</xmv-checkbox>
        </div>
        <div>
            <xmv-checkbox label="Option1" size="small" v-model="checkbox1">Option 1</xmv-checkbox>
            <xmv-checkbox label="Option2" size="small">Option 2</xmv-checkbox>
        </div>
        <div>
            <xmv-checkbox label="Option1" disabled size="small">Option 1</xmv-checkbox>
            <xmv-checkbox label="Option2" disabled size="small">Option 2</xmv-checkbox>
        </div>
    </xmv-code>
    <h2>禁用状态</h2>
    <p>多选框不可用状态。</p>
    <p text="sm"><p>设置 <code>disabled</code> 属性即可。</p></p>
    <xmv-code :code="code_2">
        <xmv-checkbox disabled label="Disabled">Disabled</xmv-checkbox>
        <xmv-checkbox label="Not Disabled">Not Disabled</xmv-checkbox>
    </xmv-code>
    <h2>多选框组</h2>
    <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
    <p text="sm"><p><code>checkbox-group</code>
        能把多个 checkbox 管理为一组，需要在 Group 中使用 <code>v-model</code> 绑定 <code>Array</code> 
        类型的变量。</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-checkbox-group v-model="group1">
            <xmv-checkbox label="option1" @check="handleCheckGroup1">选项一</xmv-checkbox>
            <xmv-checkbox label="option2" @check="handleCheckGroup1">选项二</xmv-checkbox>
            <xmv-checkbox label="option3" @check="handleCheckGroup1">选项三</xmv-checkbox>
            <xmv-checkbox label="option4" @check="handleCheckGroup1">选项四</xmv-checkbox>
            <xmv-checkbox label="option5" @check="handleCheckGroup1">选项五</xmv-checkbox>
        </xmv-checkbox-group>
    </xmv-code>
    <h2>中间状态</h2>
    <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
    <xmv-code :code="code_4">
        <xmv-checkbox v-model="checkall" @check="handleCheckAll" label="全选" 
                    :indeterminateStatus="indeterminateStatus">全选</xmv-checkbox>
        <xmv-checkbox-group v-model="group2">
            <xmv-checkbox v-for="tmp in position" :label="tmp" @check="handleSigleCheck">{{ tmp }}</xmv-checkbox>
        </xmv-checkbox-group>
    </xmv-code>
    <h2>可选项目数量的限制</h2>
    <p>使用 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>
    <xmv-code :code="code_5">
        <xmv-checkbox-group v-model="groupMax" :max="3">
            <xmv-checkbox label="opt1">opt1</xmv-checkbox>
            <xmv-checkbox label="opt2">opt2</xmv-checkbox>
            <xmv-checkbox label="opt3">opt3</xmv-checkbox>
            <xmv-checkbox label="opt4">opt4</xmv-checkbox>
            <xmv-checkbox label="opt5">opt5</xmv-checkbox>
        </xmv-checkbox-group>
    </xmv-code>
    <h2>按钮样式</h2>
    <p>按钮样式的多选组合。</p>
    <p text="sm"><p>只需要把 <code>xmv-checkbox</code> 元素替换为 <code>xmv-checkbox-button</code> 元素即可。 
        此外，还提供了<code>size</code>属性。</p>
    </p>
    <xmv-code>
        <div>
            <xmv-checkbox-group v-model="group3_1">
                <xmv-checkbox-button size="large" v-for="tmp in position" :label="tmp">{{ tmp }}</xmv-checkbox-button>
            </xmv-checkbox-group>
        </div>
        <div style="margin-top: 15px;">
            <xmv-checkbox-group v-model="group3_2">
                <xmv-checkbox-button v-for="tmp in position" :label="tmp">{{ tmp }}</xmv-checkbox-button>
            </xmv-checkbox-group>
        </div>
        <div style="margin-top: 15px;">
            <xmv-checkbox-group v-model="group3_3">
                <xmv-checkbox-button size="small" v-for="tmp in position" :label="tmp">{{ tmp }}</xmv-checkbox-button>
            </xmv-checkbox-group>
        </div>
        <div style="margin-top: 15px;">
            <xmv-checkbox-group v-model="group3_4">
                <xmv-checkbox-button disabled size="small" v-for="tmp in position" :label="tmp">{{ tmp }}</xmv-checkbox-button>
            </xmv-checkbox-group>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent ,onMounted,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        const checkbox1 = ref(true)
        const group1 = ref(['option1' ,'option2' ,'option5'])
        const group2 = ref([])
        const group3_1 = ref([])
        const group3_2 = ref([])
        const group3_3 = ref([])
        const group3_4 = ref([])
        const position = ['top' ,'jungle' ,'middle' ,'bottom' ,'support']
        const checkall = ref(false)
        const groupMax = ref(['opt1'])
        const indeterminateStatus = ref(false)
        const handleCheckAll = (val)=>{
            group2.value = val ? position : []
            indeterminateStatus.value = false
        }
        const handleSigleCheck = ()=>{
            if (group2.value.length == 0){
                indeterminateStatus.value = false
                checkall.value = false
            }else if(group2.value.length == position.length){
                indeterminateStatus.value = false
                checkall.value = true
            }else{
                indeterminateStatus.value = true
                checkall.value = false
            }
        }
        const handleCheckGroup1 = ()=>{
            console.log(group1.value)
        }
        let code_1 = 
                        `
                            // JS
                            const checkbox1 = ref(true)
                            // Template
                            <div>
                                <xmv-checkbox label="Option1" size="large" v-model="checkbox1">Option 1</xmv-checkbox>
                                <xmv-checkbox label="Option2" size="large">Option 2</xmv-checkbox>
                            </div>
                            <div>
                                <xmv-checkbox label="Option1" v-model="checkbox1">Option 1</xmv-checkbox>
                                <xmv-checkbox label="Option2">Option 2</xmv-checkbox>
                            </div>
                            <div>
                                <xmv-checkbox label="Option1" size="small" v-model="checkbox1">Option 1</xmv-checkbox>
                                <xmv-checkbox label="Option2" size="small">Option 2</xmv-checkbox>
                            </div>
                            <div>
                                <xmv-checkbox label="Option1" disabled size="small">Option 1</xmv-checkbox>
                                <xmv-checkbox label="Option2" disabled size="small">Option 2</xmv-checkbox>
                            </div>  
                        `

        let code_2 = 
                        `
                            <xmv-checkbox disabled label="Disabled">Disabled</xmv-checkbox>
                            <xmv-checkbox label="Not Disabled">Not Disabled</xmv-checkbox>
                        `
        let code_3 = 
                        `
                            // JS
                            const group1 = ['option1' ,'option2' ,'option5']
                            //Template
                            <xmv-checkbox-group v-model="group1">
                                <xmv-checkbox label="option1">选项一</xmv-checkbox>
                                <xmv-checkbox label="option2">选项二</xmv-checkbox>
                                <xmv-checkbox label="option3">选项三</xmv-checkbox>
                                <xmv-checkbox label="option4">选项四</xmv-checkbox>
                                <xmv-checkbox label="option5">选项五</xmv-checkbox>
                            </xmv-checkbox-group>
                        `
        let code_4 =    
                        `
                            //JS
                            const group2 = ref([])
                            const position = ['top' ,'jungle' ,'middle' ,'bottom' ,'support']
                            const checkall = ref(false)
                            const indeterminateStatus = ref(false)
                            const handleCheckAll = (val)=>{
                                group2.value = val ? position : []
                                indeterminateStatus.value = false
                            }
                            const handleSigleCheck = ()=>{
                                if (group2.value.length == 0){
                                    indeterminateStatus.value = false
                                    checkall.value = false
                                }else if(group2.value.length == position.length){
                                    indeterminateStatus.value = false
                                    checkall.value = true
                                }else{
                                    indeterminateStatus.value = true
                                    checkall.value = false
                                }
                            }
                            //Template
                            <xmv-checkbox v-model="checkall" @check="handleCheckAll" label="全选" 
                                        :indeterminateStatus="indeterminateStatus">全选</xmv-checkbox>
                            <xmv-checkbox-group v-model="group2">
                                <xmv-checkbox v-for="tmp in position" :label="tmp" 
                                    @check="handleSigleCheck">{{ tmp }}</xmv-checkbox>
                            </xmv-checkbox-group>
                        `
        let code_5 =    
                        `
                            //JS
                            const groupMax = ref(['opt1'])
                            //Template
                            <xmv-checkbox-group v-model="groupMax" :max="3">
                                <xmv-checkbox label="opt1">opt1</xmv-checkbox>
                                <xmv-checkbox label="opt2">opt2</xmv-checkbox>
                                <xmv-checkbox label="opt3">opt3</xmv-checkbox>
                                <xmv-checkbox label="opt4">opt4</xmv-checkbox>
                                <xmv-checkbox label="opt5">opt5</xmv-checkbox>
                            </xmv-checkbox-group>
                        `
        onMounted(()=>{
            setTimeout(()=>{
                //group3.value = ['top']
            } ,3000)
            
            
        })
        return {checkbox1 ,code_1 ,code_2 ,code_3 ,code_4 ,code_5 ,group1 ,group2 ,group3_1 ,
                checkall,position,indeterminateStatus,groupMax,group3_2 ,group3_3 ,group3_4 ,
                handleCheckAll ,handleSigleCheck ,handleCheckGroup1}
    }
})
</script>

<style lang="" scoped></style>
