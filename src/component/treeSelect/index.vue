<template>
    <h1>TreeSelect 树形选择</h1>
    <p>含有下拉菜单的树形选择器，结合了 <code>xmv-tree</code> 和 <code>xmv-select</code> 两个组件的功能。</p>
    <h2>基础用法</h2>
    <p>树状选择器</p>
    <xmv-code :code="code_1">
        <xmv-tree-select v-model="value_1" :data="data_1" />
    </xmv-code>
    <h2>只允许选择子节点</h2>
    <p>当设置属性 <code>only-child-node</code> 时，任何节点都可以被选择，否则只有子节点可被选择。</p>
    <xmv-code :code="code_2">
        <xmv-tree-select v-model="value_2" :data="data_2" only-child-node/>
    </xmv-code>
    <h2>多选</h2>
    <p>通过点击或复选框选择多个选项。</p>
    <xmv-code :code="code_3">
        <p>default</p>
        <xmv-tree-select v-model="value_3" :data="data_3" multiple/>
        <p>collapseTags</p>
        <xmv-tree-select v-model="value_3_2" :data="data_3_2" multiple collapse-tags/>
    </xmv-code>
    <h2>禁用选项</h2>
    <p>使用 disabled 字段禁用选项。</p>
    <xmv-code :code="code_4">
        <xmv-tree-select v-model="value_4" :data="data_4" />
    </xmv-code>
    <h2>可筛选</h2>
    <p>使用关键字筛选或自定义筛选方法。 
        <p text="sm">
            <code>filterMethod</code>
            可以自定义数据筛选的方法， <code>filterNodeMethod</code>可以自定义节点数据筛选的方法。
            如果未定义 <code>filterNodeMethod</code> ,默认按照节点 <code>label</code> 属性进行筛选。
        </p>
    </p>
    <xmv-code :code="code_5">
        <xmv-tree-select v-model="value_5" :data="data_5" filterable/>
    </xmv-code>
    <h2>懒加载</h2>
    <xmv-code :code="code_6">
        <xmv-tree-select v-model="value_6" :data="data_6" lazy :load="load"/>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const value_1 = ref()
        const value_2 = ref()
        const value_3 = ref([])
        const value_3_2 = ref([])
        const value_4 = ref()
        const value_5 = ref()
        const value_6 = ref()
        const data_1 = [
                            {
                                value: '1',
                                label: 'Level one 1',
                                children: [
                                {
                                    value: '1-1',
                                    label: 'Level two 1-1',
                                    children: [
                                    {
                                        value: '1-1-1',
                                        label: 'Level three 1-1-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                value: '2',
                                label: 'Level one 2',
                                children: [
                                {
                                    value: '2-1',
                                    label: 'Level two 2-1',
                                    children: [
                                    {
                                        value: '2-1-1',
                                        label: 'Level three 2-1-1',
                                    },
                                    ],
                                },
                                {
                                    value: '2-2',
                                    label: 'Level two 2-2',
                                    children: [
                                    {
                                        value: '2-2-1',
                                        label: 'Level three 2-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                value: '3',
                                label: 'Level one 3',
                                children: [
                                {
                                    value: '3-1',
                                    label: 'Level two 3-1',
                                    children: [
                                    {
                                        value: '3-1-1',
                                        label: 'Level three 3-1-1',
                                    },
                                    ],
                                },
                                {
                                    value: '3-2',
                                    label: 'Level two 3-2',
                                    children: [
                                    {
                                        value: '3-2-1',
                                        label: 'Level three 3-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                    ]
        const data_2 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]
        const data_3 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]
        const data_3_2 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]
        const data_4 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    disabled: true,
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        disabled: true,
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                            disabled: true
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]
        const data_5 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]
        const data_6 = [
                {
                    value: '1',
                    label: 'Level one 1',
                    children: [
                    {
                        value: '1-1',
                        label: 'Level two 1-1',
                        children: [
                        {
                            value: '1-1-1',
                            label: 'Level three 1-1-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '2',
                    label: 'Level one 2',
                    children: [
                    {
                        value: '2-1',
                        label: 'Level two 2-1',
                        children: [
                        {
                            value: '2-1-1',
                            label: 'Level three 2-1-1',
                        },
                        ],
                    },
                    {
                        value: '2-2',
                        label: 'Level two 2-2',
                        children: [
                        {
                            value: '2-2-1',
                            label: 'Level three 2-2-1',
                        },
                        ],
                    },
                    ],
                },
                {
                    value: '3',
                    label: 'Level one 3',
                    children: [
                    {
                        value: '3-1',
                        label: 'Level two 3-1',
                        children: [
                        {
                            value: '3-1-1',
                            label: 'Level three 3-1-1',
                        },
                        ],
                    },
                    {
                        value: '3-2',
                        label: 'Level two 3-2',
                        children: [
                        {
                            value: '3-2-1',
                            label: 'Level three 3-2-1',
                        },
                        ],
                    },
                    ],
                },
        ]

        const load = ()=>{
            return new Promise( (resolve ,reject) =>{
                setTimeout(() => {
                    resolve([
                        {label : 'aaa' ,value : 'bbb'}
                    ])
                }, 3000);
            })
        }

        const code_1 =
                        `
                            <xmv-tree-select v-model="value_1" :data="data_1" />
                        `
        const code_2 =
                        `
                            <xmv-tree-select v-model="value_2" :data="data_2" only-child-node/>
                        `
        const code_3 =
                        `
                            <p>default</p>
                            <xmv-tree-select v-model="value_3" 
                                :data="data_3" multiple/>
                            <p>collapseTags</p>
                            <xmv-tree-select v-model="value_3_2" 
                                :data="data_3_2" multiple collapse-tags/>
                        `
        const code_4 =
                        `
                            // JS
                            let data_4 = ref([
                                value: '1',
                                label: 'Level one 1',
                                disabled: true
                                ...略
                            ])
                            <xmv-tree-select v-model="value_4" :data="data_4" />
                        `
        const code_5 =
                        `
                            <xmv-tree-select v-model="value_5" :data="data_5" filterable/>
                        `
        const code_6 =
                        `
                            // JS
                            const load = ()=>{
                                return new Promise( (resolve ,reject) =>{
                                    setTimeout(() => {
                                        resolve([
                                            {label : 'aaa' ,value : 'bbb'}
                                        ])
                                    }, 3000);
                                })
                            }
                            // Template
                            <xmv-tree-select v-model="value_6" :data="data_6" lazy :load="load"/>
                        `
        return {value_1,value_2,value_3,value_3_2,value_4,value_5,value_6,
                data_1,data_2,data_3,data_3_2,data_4,data_5,data_6,
                code_1,code_2,code_3,code_4,code_5,code_6,
                load}
    }
})
</script>

<style lang="" scoped></style>
