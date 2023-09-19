<template>
    <h1>Pagination 分页</h1>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h2>基础用法</h2>
    <p text="sm">
        <p><code>total</code>表示总条目数，<code>page-size</code>用于设置每页显示的页码数量。</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-pagination :total="56" :page-size="10"></xmv-pagination>
    </xmv-code>
    <h2>设置最大页码按钮数</h2>
    <p text="sm"><p>默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 
        通过 <code>page-count</code> 属性可以设置最大页码按钮数。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-pagination :total="999" :page-size="10"></xmv-pagination>
    </xmv-code>
    <h2>带有背景色的分页</h2>
    <p text="sm"><p>设置<code>background</code>属性可以为分页按钮添加背景色。</p></p>
    <xmv-code :code="code_3">
        <xmv-pagination :total="999" :page-size="10" background></xmv-pagination>
    </xmv-code>
    <h2>小型分页</h2>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <p text="sm"><p>只需要设置 <code>small</code> 属性为 <code>true</code> 即可让分页变小。</p></p>
    <xmv-code :code="code_4">
        <xmv-pagination :total="999" :page-size="10" small></xmv-pagination>
        <xmv-pagination :total="999" :page-size="10" background small></xmv-pagination>
    </xmv-code>
    <h2>组合功能</h2>
    <p>根据场景需要，通过更改<code>layout</code>属性的值可以添加其他功能模块。</p>
    <xmv-code :code="code_5">
        <div class="demo-pagination-block">
            <div class="demonstration">总页数</div>
            <xmv-pagination :total="999" :page-size="10" layout="total,prev,pager,next"></xmv-pagination>
        </div>
        <div class="demo-pagination-block">
            <div class="demonstration">每页条数</div>
            <xmv-pagination :total="999" v-model:page-size="pageSizeMode" layout="size,prev,pager,next"></xmv-pagination>
        </div>
        <div class="demo-pagination-block">
            <div class="demonstration">跳转</div>
            <xmv-pagination :total="999" :page-size="10" layout="goto,prev,pager,next"></xmv-pagination>
        </div>
        <div class="demo-pagination-block">
            <div class="demonstration">综合</div>
            <xmv-pagination :total="999" v-model:page-size="pageSizeMode_1" layout="total,prev,pager,next,size,goto"></xmv-pagination>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const pageSizeMode = ref(10)
        const pageSizeMode_1 = ref(10)

        let code_1 = 
                        `
                            <xmv-pagination :total="56" :page-size="10"></xmv-pagination>
                        `
        let code_2 =
                        `
                            <xmv-pagination :total="999" :page-size="10"></xmv-pagination>
                        `
        let code_3 =
                        `
                            <xmv-pagination :total="999" :page-size="10" background></xmv-pagination>
                        `
        let code_4 =
                        `
                            <xmv-pagination :total="999" :page-size="10" small></xmv-pagination>
                            <xmv-pagination :total="999" :page-size="10" background small></xmv-pagination>
                        `
        let code_5 =
                        `
                            <div class="demo-pagination-block">
                                <div class="demonstration">总页数</div>
                                <xmv-pagination :total="999" :page-size="10" 
                                    layout="total,prev,pager,next"></xmv-pagination>
                            </div>
                            <div class="demo-pagination-block">
                                <div class="demonstration">每页条数</div>
                                <xmv-pagination :total="999" v-model:page-size="pageSizeMode" 
                                    layout="size,prev,pager,next"></xmv-pagination>
                            </div>
                            <div class="demo-pagination-block">
                                <div class="demonstration">跳转</div>
                                <xmv-pagination :total="999" :page-size="10" 
                                    layout="goto,prev,pager,next"></xmv-pagination>
                            </div>
                            <div class="demo-pagination-block">
                                <div class="demonstration">综合</div>
                                <xmv-pagination :total="999" v-model:page-size="pageSizeMode_1" 
                                    layout="total,prev,pager,next,size,goto"></xmv-pagination>
                            </div>
                        `
        return {pageSizeMode,pageSizeMode_1,code_1,code_2,code_3,code_4,code_5}
    }
})
</script>

<style scoped>
    .demo-pagination-block + .demo-pagination-block {
        margin-top: 10px;
    }
    .demo-pagination-block .demonstration {
        margin-bottom: 16px;
    }
</style>
