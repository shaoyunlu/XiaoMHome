<template>
    <h1>Tree 树形控件</h1>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>
    <h2>基础用法</h2>
    <p>基础的树形结构展示</p>
    <xmv-code :code="code_1">
        <xmv-tree :data="data_1" />
    </xmv-code>
    <h2>可选择</h2>
    <p>适用于需要选择层级时使用。</p>
    <p text="sm">
        <p>设置 <code>not-associated</code> 属性，可使父子节点无勾选的关联关系。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-tree :data="data_2" show-checkbox/>
        <br>
        <xmv-tree :data="data_2_1" show-checkbox not-associated/>
    </xmv-code>
    <h2>懒加载</h2>
    <p text="sm">
        <p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点， 所以会为每个节点添加一个下拉按钮，
            如果节点没有下层数据，则点击后下拉按钮会消失。 同时，你也可以提前告知 Tree 某个节点是否为叶子节点，
            从而避免在叶子节点前渲染下拉按钮。
        </p>
    </p>
    <xmv-code :code="code_3">
        <xmv-tree :data="data_3" show-checkbox lazy :load="load"/>
    </xmv-code>
    <h2>禁用复选框</h2>
    <p>节点的复选框可以设置为禁用。</p>
    <p text="sm"><p>在示例中，通过 disabled 设置禁用状态。 相应的复选框已禁用，不能点击。</p></p>
    <xmv-code :code="code_4">
        <xmv-tree :data="data_4" show-checkbox/>
    </xmv-code>
    <h2>自定义节点内容</h2>
    <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
    <xmv-code :code="code_5">
        <xmv-tree :data="data_1">
            <template #default="{node}">
                <span class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <span>
                        <a @click="append(node)"> Append </a>
                        <a style="margin-left: 8px" @click="remove(node)"> Delete </a>
                    </span>
                </span>
            </template>
        </xmv-tree>
    </xmv-code>
    <h2>树节点过滤</h2>
    <p>树节点是可以被过滤的</p>
    <p text="sm">
        <p>调用 Tree 实例对象的 <code>filter</code> 方法来过滤树节点。 方法的参数就是过滤关键字。 
        需要注意的是，此时需要设置 <code>filter-node-method</code> 属性，其值为过滤函数。
        如果不传，默认会用节点的<code>label</code>进行过滤</p>
    </p>
    <xmv-code :code="code_6">
        <xmv-input v-model="filterText" placeholder="Filter keyword" />

        <xmv-tree ref="treeRef" :data="data_5"/>
    </xmv-code>
    <h2>可拖拽节点</h2>
    <p>通过 <code>draggable</code> 属性可让节点变为可拖拽。数据需要有 <code>value</code> 属性</p>
    <xmv-code :code="code_7">
        <xmv-tree draggable :data="data_6"/>
    </xmv-code>
</template>

<script>
import {defineComponent,ref, watch} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const treeRef = ref(null)
        const filterText =  ref('')
        const data_1 = ref([
                            {
                                label: 'Level one 1',
                                id : '1',
                                children: [
                                {
                                    label: 'Level two 1-1',
                                    children: [
                                    {
                                        label: 'Level three 1-1-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                label: 'Level one 2',
                                id : '2',
                                children: [
                                {
                                    label: 'Level two 2-1',
                                    children: [
                                    {
                                        label: 'Level three 2-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 2-2',
                                    children: [
                                    {
                                        label: 'Level three 2-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                label: 'Level one 3',
                                children: [
                                {
                                    label: 'Level two 3-1',
                                    children: [
                                    {
                                        label: 'Level three 3-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 3-2',
                                    children: [
                                    {
                                        label: 'Level three 3-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                        ])
        const data_2 = ref([
            {
                label: 'Level one 1',
                children: [
                {
                    label: 'Level two 1-1',
                    children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                    ],
                },
                ],
            },
            {
                label: 'Level one 2',
                children: [
                {
                    label: 'Level two 2-1',
                    children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                    ],
                },
                {
                    label: 'Level two 2-2',
                    children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                    ],
                },
                ],
            }
        ]) 
        const data_2_1 = ref([
            {
                label: 'Level one 1',
                children: [
                {
                    label: 'Level two 1-1',
                    children: [
                    {
                        label: 'Level three 1-1-1',
                    },
                    ],
                },
                ],
            },
            {
                label: 'Level one 2',
                children: [
                {
                    label: 'Level two 2-1',
                    children: [
                    {
                        label: 'Level three 2-1-1',
                    },
                    ],
                },
                {
                    label: 'Level two 2-2',
                    children: [
                    {
                        label: 'Level three 2-2-1',
                    },
                    ],
                },
                ],
            }
        ])
        const data_3 = ref([
            {
                label: '节点一',
            },
            {
                label: '节点二',
            }
        ])
        const data_4 = ref([
                            {
                                label: 'Level one 1',
                                id : '1',
                                children: [
                                {
                                    label: 'Level two 1-1',
                                    children: [
                                    {
                                        label: 'Level three 1-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 1-2',
                                    id : '2',
                                    disabled : true,
                                    children: [
                                    {
                                        label: 'Level three 1-1-2',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                label: 'Level one 2',
                                children: [
                                {
                                    label: 'Level two 2-1'
                                },
                                {
                                    label: 'Level two 2-2'
                                },
                                ],
                            },
                            {
                                label: 'Level one 3',
                                disabled : true,
                                children: [
                                {
                                    label: 'Level two 3-1',
                                    children: [
                                    {
                                        label: 'Level three 3-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 3-2',
                                    children: [
                                    {
                                        label: 'Level three 3-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                        ])
        const data_5 = ref([
                            {
                                label: 'Level one 1',
                                id : '1',
                                children: [
                                {
                                    label: 'Level two 1-1',
                                    children: [
                                    {
                                        label: 'Level three 1-1-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                label: 'Level one 2',
                                id : '2',
                                children: [
                                {
                                    label: 'Level two 2-1',
                                    children: [
                                    {
                                        label: 'Level three 2-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 2-2',
                                    children: [
                                    {
                                        label: 'Level three 2-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                label: 'Level one 3',
                                children: [
                                {
                                    label: 'Level two 3-1',
                                    children: [
                                    {
                                        label: 'Level three 3-1-1',
                                    },
                                    ],
                                },
                                {
                                    label: 'Level two 3-2',
                                    children: [
                                    {
                                        label: 'Level three 3-2-1',
                                    },
                                    ],
                                },
                                ],
                            },
                        ])
        const data_6 = ref([
            {
                label: '节点 1',
                value : '1',
                children: [
                    {
                        label: '节点 1-1',
                        value: '1-1',
                        children: [
                            {
                                label: '节点 1-1-1',
                                value: '1-1-1'
                            }
                        ]
                    }
                ]
            },
            {
                label: '节点 2',
                value : '2',
                children: [
                {
                    label: '节点 2-1',
                    value : '2-1',
                    children: [
                        {
                            label: '节点 2-1-1',
                            value: '2-1-1'
                        }
                    ]
                },
                {
                    label: '节点 2-2',
                    value: '2-2',
                    children: [
                        {
                            value : '2-2-1',
                            label: '节点 2-2-1',
                        }
                    ]
                }
                ]
            },
            {
                label: '节点 3',
                value : '3',
                children: [
                    {
                        label: '节点 3-1',
                        value : '3-1',
                        children: [
                            {
                                value : '3-1-1',
                                label: '节点 3-1-1'
                            }
                        ]
                    },
                    {
                        label: '节点 3-2',
                        value : '3-2',
                        children: [
                            {
                                value : '3-2-1',
                                label: '节点 3-2-1',
                            }
                        ]
                    }
                ]
            }
        ])
        const load = ()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([
                                {
                                    label: '懒加载节点一'
                                }
                            ])
                },3000)
            })
        }
        const append = (node)=>{
            if (!node.children){
                node.children = [{label : '测试节点' ,id : '50'}]
            }else{
                node.children.push({label : '测试节点' ,id : '50'})
            }
        }
        const remove =(node)=>{
            if (!node.parent){
                let index = data_1.value.findIndex((d) => d.id === node.id)
                data_1.value.splice(index, 1)
            }else{
                let children = node.parent.children
                let index = children.findIndex((d) => d.id === node.id)
                children.splice(index, 1)
            }
        }

        const filterNode = ()=>{

        }

        watch(filterText ,(newVal)=>{
            treeRef.value.filter(newVal)
        })

        const code_1 =
                        `
                            // JS
                            const data_1 = ref([
                                {
                                    label: 'Level one 1',
                                    children: [
                                    {
                                        label: 'Level two 1-1',
                                        children: [
                                        {
                                            label: 'Level three 1-1-1',
                                        },
                                        ],
                                    },
                                    ],
                                },
                                {
                                    label: 'Level one 2',
                                    children: [
                                    {
                                        label: 'Level two 2-1',
                                        children: [
                                        {
                                            label: 'Level three 2-1-1',
                                        },
                                        ],
                                    },
                                    {
                                        label: 'Level two 2-2',
                                        children: [
                                        {
                                            label: 'Level three 2-2-1',
                                        },
                                        ],
                                    },
                                    ],
                                },
                                {
                                    label: 'Level one 3',
                                    children: [
                                    {
                                        label: 'Level two 3-1',
                                        children: [
                                        {
                                            label: 'Level three 3-1-1',
                                        },
                                        ],
                                    },
                                    {
                                        label: 'Level two 3-2',
                                        children: [
                                        {
                                            label: 'Level three 3-2-1',
                                        },
                                        ],
                                    },
                                    ],
                                },
                            ])
                            // Template
                            <xmv-tree :data="data" />
                        `
        const code_2 =
                        `
                            <xmv-tree :data="data_2" show-checkbox/>
                            <br><br>
                            <xmv-tree :data="data_2_1" show-checkbox not-associated/>
                        `
        const code_3 =
                        `
                            // JS
                            const load = ()=>{
                                return new Promise((resolve,reject)=>{
                                    setTimeout(()=>{
                                        resolve([
                                                    {
                                                        label: '懒加载节点一'
                                                    }
                                                ])
                                    },3000)
                                })
                            }
                            // Template
                            <xmv-tree :data="data_3" show-checkbox lazy :load="load"/>
                        `
        const code_4 =
                        `
                            // JS
                            const data_4 = ref([
                                {
                                    label: 'Level one 1',
                                    children: [
                                    {
                                        label: 'Level two 1-1',
                                        children: [
                                        {
                                            label: 'Level three 1-1-1',
                                        },
                                        ],
                                    },
                                    {
                                        label: 'Level two 1-2',
                                        disabled : true,
                                        children: [
                                        {
                                            label: 'Level three 1-1-2',
                                        },
                                        ],
                                    },
                                    ],
                                },
                                {
                                    label: 'Level one 2',
                                    children: [
                                    {
                                        label: 'Level two 2-1'
                                    },
                                    {
                                        label: 'Level two 2-2'
                                    },
                                    ],
                                },
                                {
                                    label: 'Level one 3',
                                    disabled : true,
                                    children: [
                                    {
                                        label: 'Level two 3-1',
                                        children: [
                                        {
                                            label: 'Level three 3-1-1',
                                        },
                                        ],
                                    },
                                    {
                                        label: 'Level two 3-2',
                                        children: [
                                        {
                                            label: 'Level three 3-2-1',
                                        },
                                        ],
                                    },
                                    ],
                                },
                            ])

                            // Template
                            <xmv-tree :data="data_4" show-checkbox/>
                        `
        const code_5 =
                        `
                            // JS
                            const append = (node)=>{
                                if (!node.children){
                                    node.children = [{label : '测试节点' ,id : '50'}]
                                }else{
                                    node.children.push({label : '测试节点' ,id : '50'})
                                }
                            }

                            const remove =(node)=>{
                                if (!node.parent){
                                    let index = data_1.value.findIndex((d) => d.id === node.id)
                                    data_1.value.splice(index, 1)
                                }else{
                                    let children = node.parent.children
                                    let index = children.findIndex((d) => d.id === node.id)
                                    children.splice(index, 1)
                                }
                            }
                            // Template
                            <xmv-tree :data="data_1">
                                <template #default="{node}">
                                    <span class="custom-tree-node">
                                        <span>{{ node.label }}</span>
                                        <span>
                                            <a @click="append(node)"> Append </a>
                                            <a style="margin-left: 8px" @click="remove(node)"> Delete </a>
                                        </span>
                                    </span>
                                </template>
                            </xmv-tree>
                        `
        const code_6 =
                        `
                            // JS
                            watch(filterText ,(newVal)=>{
                                treeRef.value.filter(newVal)
                            })
                            //Template
                            <xmv-input v-model="filterText" placeholder="Filter keyword" />
                            <xmv-tree
                                ref="treeRef"
                                :data="data_5"
                            />
                        `
        const code_7 =
                        `
                            // JS
                            const data_6 = ref([
                                {
                                    label: '节点 1',
                                    value : '1',
                                    children: [
                                        {
                                            label: '节点 1-1',
                                            value: '1-1',
                                            children: [
                                                {
                                                    label: '节点 1-1-1',
                                                    value: '1-1-1'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: '节点 2',
                                    value : '2',
                                    children: [
                                    {
                                        label: '节点 2-1',
                                        value : '2-1',
                                        children: [
                                            {
                                                label: '节点 2-1-1',
                                                value: '2-1-1'
                                            }
                                        ]
                                    },
                                    {
                                        label: '节点 2-2',
                                        value: '2-2',
                                        children: [
                                            {
                                                value : '2-2-1',
                                                label: '节点 2-2-1',
                                            }
                                        ]
                                    }
                                    ]
                                },
                                {
                                    label: '节点 3',
                                    value : '3',
                                    children: [
                                        {
                                            label: '节点 3-1',
                                            value : '3-1',
                                            children: [
                                                {
                                                    value : '3-1-1',
                                                    label: '节点 3-1-1'
                                                }
                                            ]
                                        },
                                        {
                                            label: '节点 3-2',
                                            value : '3-2',
                                            children: [
                                                {
                                                    value : '3-2-1',
                                                    label: '节点 3-2-1',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ])
                            // Template
                            <xmv-tree draggable :data="data_6"/>
                        `
        return {data_1,data_2,data_2_1,data_3,data_4,data_5,data_6,treeRef,filterText,
                load,append,remove,filterNode,
                code_1,code_2,code_3,code_4,code_5,code_6,code_7}
    }
})
</script>

<style lang="less" scoped>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
    .page-content .doc-content a {
        display: inline-flex;
        align-items: center;
    }
</style>
