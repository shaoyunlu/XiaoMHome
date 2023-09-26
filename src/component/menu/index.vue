<template>
    <h1>Menu 菜单</h1>
    <p>为网站提供导航功能的菜单。</p>
    <h2>顶栏</h2>
    <p>顶部栏菜单可以在各种场景中使用。</p>
    <p text="sm">
        导航菜单默认为垂直模式，通过将 <code>is-vertical</code> 属性设置为 false 来使导航菜单变更为水平模式。
        组件提供两种样式，设置属性 <code>is-dark</code>，显示为深色模式。
    </p>
    <xmv-code :code="code_1">
        <xmv-menu :data="data_1_1" :is-vertical="false" ref="menuRef_1"></xmv-menu>
        <div style="margin-top:20px"></div>
        <xmv-menu :data="data_1_2" :is-vertical="false" ref="menuRef_2" is-dark></xmv-menu>
    </xmv-code>
    <h2>侧栏</h2>
    <xmv-code :code="code_2">
        <xmv-row>
            <xmv-col :span="7">
                <h5>Default colors</h5>
                <xmv-menu :data="data_1_3" ref="menuRef_3"></xmv-menu>
            </xmv-col>
            <xmv-col :span="7" :offset="4">
                <h5>Custom colors</h5>
                <xmv-menu :data="data_1_4" is-dark ref="menuRef_4"></xmv-menu>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>Collapse 折叠面板</h2>
    <p>垂直导航菜单可以被折叠</p>
    <xmv-code :code="code_3">
        <xmv-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <xmv-radio-button :label="false">expand</xmv-radio-button>
            <xmv-radio-button :label="true">collapse</xmv-radio-button>
        </xmv-radio-group>
        <div style="width:200px">
            <xmv-menu :data="data_1_5" ref="menuRef_5"></xmv-menu>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent,watch,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const menuRef_1 = ref(null)
        const menuRef_2 = ref(null)
        const menuRef_3 = ref(null)
        const menuRef_4 = ref(null)
        const menuRef_5 = ref(null)
        const isCollapse = ref(false)
        const data_1_1 = ref([
            {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,icon:"download",value : '3'},
            {name : '菜单四' ,icon:"edit",value : '4'},
            {name : '菜单五' ,icon:"lineChart",value : '5'},
            {name : '菜单六' ,icon:"document",value : '6'}
        ])
        const data_1_2 = ref([
            {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,icon:"download",value : '3'},
            {name : '菜单四' ,icon:"edit",value : '4'},
            {name : '菜单五' ,icon:"lineChart",value : '5'},
            {name : '菜单六' ,icon:"document",value : '6'}
        ])
        const data_1_3 = ref([
            {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,icon:"download",value : '3'},
            {name : '菜单四' ,icon:"edit",value : '4'},
            {name : '菜单五' ,icon:"lineChart",value : '5'},
            {name : '菜单六' ,icon:"document",value : '6'}
        ])
        const data_1_4 = ref([
            {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,icon:"download",value : '3'},
            {name : '菜单四' ,icon:"edit",value : '4'},
            {name : '菜单五' ,icon:"lineChart",value : '5'},
            {name : '菜单六' ,icon:"document",value : '6'}
        ])
        const data_1_5 = ref([
            {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,icon:"download",value : '3'},
            {name : '菜单四' ,icon:"edit",value : '4'},
            {name : '菜单五' ,icon:"lineChart",value : '5'},
            {name : '菜单六' ,icon:"document",value : '6'}
        ])

        watch(isCollapse ,(newVal)=>{
            if (newVal){
                menuRef_5.value.collapse()
            }else{
                menuRef_5.value.expand()
            }
        })

        const code_1 =
                        `
                            // JS
                            const data_1_1 = ref([
                                {name : '菜单一' ,value : '1' ,icon:"upload" ,children : [
                                                                {name : '菜单1-1' ,value:'1-1'},
                                                                {name : '菜单1-2' ,value:'1-2'}
                                                            ]
                                },
                                {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                                        {name : '菜单2-1' ,value:'2-1'},
                                        {name : '菜单2-2' ,value:'2-2' ,children : [
                                                {name : '菜单2-2-1' ,value : '2-2-1'},
                                                {name : '菜单2-2-2' ,value : '2-2-2'}
                                            ]}
                                    ]
                                },
                                {name : '菜单三' ,icon:"download",value : '3'},
                                {name : '菜单四' ,icon:"edit",value : '4'},
                                {name : '菜单五' ,icon:"lineChart",value : '5'},
                                {name : '菜单六' ,icon:"document",value : '6'}
                            ])
                            // Template
                            <xmv-menu :data="data_1_1" :is-vertical="false" 
                                ref="menuRef_1"></xmv-menu>
                            <div style="margin-top:20px"></div>
                            <xmv-menu :data="data_1_2" :is-vertical="false" 
                                ref="menuRef_2" is-dark></xmv-menu>
                        `
        const code_2 =
                        `
                            <xmv-row>
                                <xmv-col :span="7">
                                    <h5>Default colors</h5>
                                    <xmv-menu :data="data_1_3" ref="menuRef_3"></xmv-menu>
                                </xmv-col>
                                <xmv-col :span="7" :offset="4">
                                    <h5>Custom colors</h5>
                                    <xmv-menu :data="data_1_4" is-dark ref="menuRef_4"></xmv-menu>
                                </xmv-col>
                            </xmv-row>      
                        `
        const code_3 =
                        `
                            // JS
                            const isCollapse = ref(false)
                            watch(isCollapse ,(newVal)=>{
                                if (newVal){
                                    menuRef_5.value.collapse()
                                }else{
                                    menuRef_5.value.expand()
                                }
                            })
                            // Template
                            <xmv-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                                <xmv-radio-button :label="false">expand</xmv-radio-button>
                                <xmv-radio-button :label="true">collapse</xmv-radio-button>
                            </xmv-radio-group>
                            <div style="width:200px">
                                <xmv-menu :data="data_1_5" ref="menuRef_5"></xmv-menu>
                            </div>
                        `
        return {menuRef_1,menuRef_2,menuRef_3,menuRef_4,menuRef_5,
                data_1_1,data_1_2,data_1_3,data_1_4,data_1_5,isCollapse,
                code_1,code_2,code_3}
    }
})
</script>

<style lang="" scoped></style>

