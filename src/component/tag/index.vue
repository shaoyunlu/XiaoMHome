<template>
    <h1>Tag 标签</h1>
    <p>用于标记和选择。</p>
    <h2>基础用法</h2>
    <p text="sm">
        <p>由 <code>type</code> 属性来选择 tag 的类型。 也可以通过 <code>color</code> 属性来自定义背景色。</p>
    </p>
    <xmv-code>
        <xmv-tag>Tag 1</xmv-tag>
        <xmv-tag class="ml-2" type="success">Tag 2</xmv-tag>
        <xmv-tag class="ml-2" type="info">Tag 3</xmv-tag>
        <xmv-tag class="ml-2" type="warning">Tag 4</xmv-tag>
        <xmv-tag class="ml-2" type="danger">Tag 5</xmv-tag>
    </xmv-code>
    <h2>可移除标签</h2>
    <p text="sm">设置 <code>closable</code> 属性可以定义一个标签是否可移除。 它接受一个 <code>Boolean</code></p>
    <xmv-code>
        <xmv-tag
            v-for="tag in tags"
            class="ml-2"
            closable
            :type="tag.type">
            {{ tag.name }}
        </xmv-tag>
    </xmv-code>
    <h2>不同尺寸</h2>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <p text="sm"><p>使用 <code>size</code> 属性来设置额外尺寸, 可选值包括 <code>large</code>, 
            <code>default</code> 或 <code>small</code>.</p>
    </p>
    <xmv-code>
        <div>
            <xmv-tag size="large" >Large</xmv-tag>
            <xmv-tag class="ml-2" >Default</xmv-tag>
            <xmv-tag class="ml-2" size="small" >Small</xmv-tag>
        </div>

        <div style="margin-top:10px">
            <xmv-tag size="large" closable>Large</xmv-tag>
            <xmv-tag class="ml-2" closable>Default</xmv-tag>
            <xmv-tag class="ml-2" size="small" closable>Small</xmv-tag>
        </div>
    </xmv-code>
    <h2>主题</h2>
    <p>Tag 组件提供了三个不同的主题：<code>dark</code>、<code>light</code> 和 <code>plain</code>。</p>
    <p text="sm"><p>通过设置 <code>effect</code> 属性来改变主题，默认为 <code>light</code>。</p></p>
    <xmv-code>
        <div class="tag-group flex flex-wrap gap-1 items-center" style="margin-bottom: 20px;">
            <span class="tag-group__title m-1 line-height-2">Dark</span>
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="dark"
            >
            {{ item.label }}
            </xmv-tag>
            <xmv-tag
            v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="dark"
                closable
            >
            {{ item.label }}
            </xmv-tag>
        </div>
        <div class="tag-group flex flex-wrap gap-1 items-center" style="margin-bottom: 20px;">
            <span class="tag-group__title m-1">Light</span>
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                class="mx-1"
                :type="item.type"
                effect="light"
                >
                {{ item.label }}
            </xmv-tag>
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                class="mx-1"
                :type="item.type"
                effect="light"
                closable
            >
            {{ item.label }}
            </xmv-tag>
        </div>
        <div class="tag-group my-2 flex flex-wrap gap-1 items-center" style="margin-bottom: 15px;">
            <span class="tag-group__title m-1">Plain</span>
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                class="mx-1"
                :type="item.type"
                effect="plain">
            {{ item.label }}
            </xmv-tag>
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                class="mx-1"
                :type="item.type"
                effect="plain"
                closable>
            {{ item.label }}
            </xmv-tag>
        </div>
    </xmv-code>
    <h2>圆形标签</h2>
    <p>Tag 可以向按钮组件一样变为完全圆形。</p>
    <xmv-code>
        <div class="tag-group flex flex-wrap gap-1 items-center" style="margin-bottom: 20px;">
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="dark"
                round
            >
            {{ item.label }}
            </xmv-tag>
        </div>
        <div class="tag-group flex flex-wrap gap-1 items-center" style="margin-bottom: 20px;">
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="light"
                round
            >
            {{ item.label }}
            </xmv-tag>
        </div>
        <div class="tag-group flex flex-wrap gap-1 items-center" style="margin-bottom: 20px;">
            <xmv-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                class="mx-1"
                effect="plain"
                round
            >
            {{ item.label }}
            </xmv-tag>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const tags = ref([
            { name: 'Tag 1', type: '' },
            { name: 'Tag 2', type: 'success' },
            { name: 'Tag 3', type: 'info' },
            { name: 'Tag 4', type: 'warning' },
            { name: 'Tag 5', type: 'danger' },
        ])

        const items = ref([
            { type: '', label: 'Tag 1' },
            { type: 'success', label: 'Tag 2' },
            { type: 'info', label: 'Tag 3' },
            { type: 'danger', label: 'Tag 4' },
            { type: 'warning', label: 'Tag 5' },
        ])

        return {tags,items}
    }
})
</script>

<style lang="less">

</style>
