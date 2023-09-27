<template>
    <h1>Tabs 标签页</h1>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <h2>基础用法</h2>
    <p>基础的、简洁的标签页。</p>
    <p text="sm"><p>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，
        你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-tabs v-model="tabsModel_1">
            <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
    <h2>卡片风格的标签</h2>
    <p>你可以设置具有卡片风格的标签。</p>
    <p text="sm"><p>只需要设置 <code>type</code> 属性为 <code>card</code> 
            就可以使选项卡改变为标签风格。</p>
    </p>
    <xmv-code>
        <xmv-tabs v-model="tabsModel_2" type="card">
            <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
    <h2>带有边框的卡片风格</h2>
    <p>你还可以设置标签页为带有边框的卡片</p>
    <p text="sm"><p>将 <code>type</code> 设置为 <code>border-card</code>。</p></p>
    <xmv-code>
        <xmv-tabs v-model="tabsModel_3" type="border-card">
            <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
    <h2>标签位置的设置</h2>
    <p>可以通过 <code>tab-position</code> 设置标签的位置</p>
    <p text="sm"><p>标签一共有三个方向的设置 <code>tabPosition="left|right|top"</code></p></p>
    <xmv-code>
        <p>左方</p>
        <xmv-divider></xmv-divider>
        <xmv-tabs v-model="tabsModel_4" tab-position="left">
            <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
        <p>右方</p>
        <xmv-divider></xmv-divider>
        <xmv-tabs v-model="tabsModel_4" tab-position="right">
            <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
    <h2>自定义标签页的内容</h2>
    <p>可以通过具名插槽来实现自定义标签页的内容</p>
    <xmv-code>
        <xmv-tabs v-model="tabsModel_5">
            <xmv-tab-panel label="User" name="first">
                <template #label>
                    <span class="custom-tabs-label">
                        <xmv-icon name="calendar"></xmv-icon>
                        <span style="margin-left:5px">User</span>
                    </span>
                </template>
                User
            </xmv-tab-panel>
            <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
            <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
            <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
    <h2>动态增减标签页</h2>
    <xmv-code>
        <xmv-tabs v-model="tabsModel_5" type="card" editable @remove="handleRemove" @add="handleAdd">
            <xmv-tab-panel :label="tmp.label" :name="tmp.name" v-for="tmp in list">
                {{ tmp.content }}
            </xmv-tab-panel>
        </xmv-tabs>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const tabsModel_1 = ref('first')
        const tabsModel_2 = ref('second')
        const tabsModel_3 = ref('third')
        const tabsModel_4 = ref('first')
        const tabsModel_5 = ref('first')
        const tabPosition = ref('left')

        let i = 0

        const handleClick = ()=>{
            list.value.push({
                name : 'ADD' + i ,label : 'Task' + i ,content: 'Tab ADD content' + i
            })
            i++
        }

        const handleAdd = ()=>{
            list.value.push({
                name : 'ADD' + i ,label : 'Task' + i ,content: 'Tab ADD content' + i
            })
            i++
        }

        const handleRemove = (name)=>{
            console.log(name)
        }

        const list = ref([
            {name : 'first' ,label : 'User' ,content: 'Tab 1 content'},
            {name : 'second' ,label : 'Config' ,content: 'Tab 2 content'},
            {name : 'third' ,label : 'Role' ,content: 'Tab 3 content'},
            {name : 'fourth' ,label : 'Task' ,content: 'Tab 4 content'}
        ])

        const code_1 =
                        `
                            // JS
                            const tabsModel = ref('first')
                            // Template
                            <xmv-tabs v-model="tabsModel">
                                <xmv-tab-panel label="User" name="first">User</xmv-tab-panel>
                                <xmv-tab-panel label="Config" name="second">Config</xmv-tab-panel>
                                <xmv-tab-panel label="Role" name="third">Role</xmv-tab-panel>
                                <xmv-tab-panel label="Task" name="fourth">Task</xmv-tab-panel>
                            </xmv-tabs>
                        `

        return {tabsModel_1,tabsModel_2,tabsModel_3,tabsModel_4,tabsModel_5,list,
                tabPosition,handleAdd,handleRemove,
                code_1}
    }
})
</script>

<style lang="less" scoped>
    .custom-tabs-label .xmv-icon {
        vertical-align: middle;
    }
</style>
