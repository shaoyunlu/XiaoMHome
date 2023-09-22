<template>
    <h1>Breadcrumb 面包屑</h1>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <h2>基础用法</h2>
    <p text="sm">
        <p>在 <code>xmv-breadcrumb</code> 中使用 <code>xmv-breadcrumb-item</code> 标签表示从首页开始的每一级。 
            该组件接受一个 <code>String</code> 类型的参数 <code>separator</code>来作为分隔符。 默认值为 '/'。
        </p>
    </p>
    <xmv-code :code="code_1">
        <xmv-breadcrumb separator="|">
            <xmv-breadcrumb-item :to="{ path: '/' }">首页</xmv-breadcrumb-item>
            <xmv-breadcrumb-item>
                <a>一级菜单</a>
            </xmv-breadcrumb-item>
            <xmv-breadcrumb-item>二级菜单</xmv-breadcrumb-item>
            <xmv-breadcrumb-item>三级菜单</xmv-breadcrumb-item>
        </xmv-breadcrumb>
    </xmv-code>
    <h2>图标分割符</h2>
    <p text="sm">
        <p>通过设置 <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，
            注意这将使 <code>separator</code> 失效。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-breadcrumb separator-icon="arrowRight">
            <xmv-breadcrumb-item :to="{ path: '/' }">首页</xmv-breadcrumb-item>
            <xmv-breadcrumb-item>
                <a>一级菜单</a>
            </xmv-breadcrumb-item>
            <xmv-breadcrumb-item>二级菜单</xmv-breadcrumb-item>
            <xmv-breadcrumb-item>三级菜单</xmv-breadcrumb-item>
        </xmv-breadcrumb>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const code_1 = 
                        `
                            <xmv-breadcrumb separator="|">
                                <xmv-breadcrumb-item :to="{ path: '/' }">首页</xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>
                                    <a>一级菜单</a>
                                </xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>二级菜单</xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>三级菜单</xmv-breadcrumb-item>
                            </xmv-breadcrumb>
                        `
        const code_2 =
                        `
                            <xmv-breadcrumb separator-icon="arrowRight">
                                <xmv-breadcrumb-item :to="{ path: '/' }">首页</xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>
                                    <a>一级菜单</a>
                                </xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>二级菜单</xmv-breadcrumb-item>
                                <xmv-breadcrumb-item>三级菜单</xmv-breadcrumb-item>
                            </xmv-breadcrumb>
                        `
        return {code_1,code_2}
    }
})
</script>

<style lang="" scoped></style>
