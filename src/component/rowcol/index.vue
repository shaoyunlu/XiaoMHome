<template>
    <h1>RowCol 栅格化</h1>
    <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    <h2>基础布局</h2>
    <p>使用列创建基础网格布局。</p>
    <p text="sm"><p>通过 <code>row</code> 和 <code>col</code> 组件，
        并通过 col 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>
    </p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="24"><div class="grid-content ep-bg-purple-dark" /></xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="12"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="12"><div class="grid-content ep-bg-purple-light" /></xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="8"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="8"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="8"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple-light" /></xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>分栏间隔</h2>
    <p>支持列间距。</p>
    <p text="sm"><p>行提供 <code>gutter</code> 属性来指定列之间的间距，其默认值为0。</p></p>
    <xmv-code>
        <xmv-row :gutter="20">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>混合布局</h2>
    <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <xmv-code>
        <xmv-row :gutter="20">
            <xmv-col :span="16"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="8"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row :gutter="20">
            <xmv-col :span="8"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="8"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row :gutter="20">
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="16"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="4"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>列偏移</h2>
    <p>您可以指定列偏移量。</p>
    <p text="sm"><p>通过制定 col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。</p></p>
    <xmv-code>
        <xmv-row :gutter="20">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></xmv-col>
        </xmv-row>
        <xmv-row :gutter="20">
            <xmv-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></xmv-col>
            <xmv-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></xmv-col>
        </xmv-row>
        <xmv-row :gutter="20">
            <xmv-col :span="12" :offset="6"><div class="grid-content ep-bg-purple"/></xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>对齐方式</h2>
    <p>默认使用 flex 布局来对分栏进行灵活的对齐。</p>
    <p text="sm"><p>您可以通过<code>justify</code> 属性来定义子元素的排版方式，
        其取值为start、center、end、space-between、space-around或space-evenly。</p>
    </p>
    <xmv-code>
        <xmv-row class="row-bg">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row class="row-bg" justify="center">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row class="row-bg" justify="end">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row class="row-bg" justify="space-between">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row class="row-bg" justify="space-around">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
        <xmv-row class="row-bg" justify="space-evenly">
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple-light" /></xmv-col>
            <xmv-col :span="6"><div class="grid-content ep-bg-purple" /></xmv-col>
        </xmv-row>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        return {}
    }
})
</script>

<style lang="less" scoped>
    .xmv-row {
        margin-bottom: 20px;
    }
    .xmv-row:last-child {
        margin-bottom: 0;
    }
    .xmv-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .ep-bg-purple-dark {
        background: #99a9bf;
    }

    .ep-bg-purple {
        background: #d3dce6;
    }
    .ep-bg-purple-light {
        background: #e5e9f2;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
