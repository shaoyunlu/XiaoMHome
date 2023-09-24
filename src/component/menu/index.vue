<template>
    <h1>Menu 菜单</h1>
    <p>为网站提供导航功能的菜单。</p>
    <h2>顶栏</h2>
    <xmv-code>
        <xmv-menu :data="data" :isVertical="false" ref="menuRef"></xmv-menu>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const menuRef = ref(null)
        const data = ref([
            {name : '菜单一' ,value : '1' ,children : [
                                            {name : '菜单1-1' ,value:'1-1'},
                                            {name : '菜单1-2' ,value:'1-2'}
                                        ]
            },
            {name : '菜单二' ,value : '2' ,children : [
                    {name : '菜单2-1' ,value:'2-1'},
                    {name : '菜单2-2' ,value:'2-2' ,children : [
                            {name : '菜单2-2-1' ,value : '2-2-1'},
                            {name : '菜单2-2-2' ,value : '2-2-2'}
                        ]}
                ]
            },
            {name : '菜单三' ,value : '3'},
            {name : '菜单四' ,value : '4'},
            {name : '菜单五' ,value : '5'},
            {name : '菜单六' ,value : '6'}
        ])
        return {menuRef,data}
    }
})
</script>

<style lang="" scoped></style>

