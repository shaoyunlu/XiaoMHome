<template>
    <h1>Scrollbar 滚动条</h1>
    <p>用于替换浏览器原生滚动条。</p>
    <h2>基础用法</h2>
    <xmv-code :code="code_1">
        <xmv-scrollbar :height="300">
            <p class="scrollbar-demo-item" v-for="tmp in arr">{{ tmp }}</p>
        </xmv-scrollbar>
    </xmv-code>
    <h2>横向滚动</h2>
    <xmv-code :code="code_2">
        <xmv-scrollbar>
            <div class="scrollbar-flex-content">
                <p class="scrollbar-demo-item" v-for="tmp in arr">{{ tmp }}</p>
            </div>
        </xmv-scrollbar>
    </xmv-code>
    <h2>最大高度</h2>
    <p text="sm" data-v-5d9e4641=""><p>当元素高度超过最大高度，才会显示滚动条。</p></p>
    <xmv-code :code="code_3">
        <xmv-button @click="handleAdd">添加</xmv-button>
        <xmv-button @click="handleDelete">删除</xmv-button>
        <xmv-scrollbar :maxHeightFlag="true" :maxHeight="400">
            <p class="scrollbar-demo-item" v-for="tmp in arr_1">{{ tmp }}</p>
        </xmv-scrollbar>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const arr_1 = ref([1,2,3])
        const code_1 = 
                        `
                            // Js
                            const arr = [1,2,3,4,5,6,7,8,9,10]
                            // Template
                            <xmv-scrollbar :height="300">
                                <p class="scrollbar-demo-item" v-for="tmp in arr">{{ tmp }}</p>
                            </xmv-scrollbar>
                        `
        const code_2 =
                        `
                            <xmv-scrollbar>
                                <div class="scrollbar-flex-content">
                                    <p class="scrollbar-demo-item" v-for="tmp in arr">{{ tmp }}</p>
                                </div>
                            </xmv-scrollbar>
                        `
        const code_3 = 
                        `
                            // Js
                            const handleAdd = ()=>{
                                arr_1.value.push(new Date().getTime())
                            }

                            const handleDelete = ()=>{
                                arr_1.value.pop()
                            }

                            // Template
                            <xmv-scrollbar :maxHeightFlag="true" :maxHeight="400">
                                <p class="scrollbar-demo-item" v-for="tmp in arr_1">{{ tmp }}</p>
                            </xmv-scrollbar>
                        `
        const handleAdd = ()=>{
            arr_1.value.push(new Date().getTime())
        }

        const handleDelete = ()=>{
            arr_1.value.pop()
        }
        return {arr ,arr_1 ,code_1 ,code_2 ,code_3 ,handleAdd ,handleDelete}
    }
})
</script>

<style scoped>
    .scrollbar-flex-content {
        display: flex;
    }
    .scrollbar-demo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--xmv-color-primary-light-9);
        color: var(--xmv-color-primary);
    }

    .scrollbar-flex-content .scrollbar-demo-item{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--xmv-color-danger-light-9);
        color: var(--xmv-color-danger);
    }
</style>
