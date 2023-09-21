<template>
    <h1>Affix 固钉</h1>
    <p>将页面元素固定在特定可视区域。</p>
    <h2>基础用法</h2>
    <p>固钉默认固定在页面顶部。</p>
    <p text="sm"><p>通过设置 <code>offset</code> 属性来改变吸顶距离，默认值为 0。</p></p>
    <xmv-code :code="code_1">
        <xmv-affix :offset="120">
            <xmv-button type="primary">Offset top 120px</xmv-button>
        </xmv-affix>
    </xmv-code>
    <h2>指定容器</h2>
    <p>通过设置 <code>target</code> 属性，让固钉始终保持在容器内， 超过范围则隐藏。</p>
    <p text="sm"><p>请注意容器避免出现滚动条。</p></p>
    <xmv-code :code="code_2">
        <div class="affix-container">
            <xmv-affix target=".affix-container" :offset="80">
                <xmv-button type="primary">Target container</xmv-button>
            </xmv-affix>
        </div>
    </xmv-code>
    <h2>固定位置</h2>
    <p>Affix 组件提供 2 个固定的位置参数 <code>top</code> 和 <code>bottom</code>。</p>
    <p text="sm"><p>通过设置 <code>position</code> 属性来改变固定位置，默认值为 <code>top</code> 。</p></p>
    <xmv-code :code="code_3">
        <xmv-affix position="bottom" :offset="20">
            <xmv-button type="primary">Offset bottom 20px</xmv-button>
        </xmv-affix>
    </xmv-code>
    <div style="height:400px"></div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const code_1 =
                        `
                            <xmv-affix :offset="120">
                                <xmv-button type="primary">Offset top 120px</xmv-button>
                            </xmv-affix>
                        `
        const code_2 =
                        `
                            <div class="affix-container">
                                <xmv-affix target=".affix-container" :offset="80">
                                    <xmv-button type="primary">Target container</xmv-button>
                                </xmv-affix>
                            </div>
                        `
        const code_3 =
                        `
                            <xmv-affix position="bottom" :offset="20">
                                <xmv-button type="primary">Offset bottom 20px</xmv-button>
                            </xmv-affix>
                        `
        return {code_1,code_2,code_3}
    }
})
</script>

<style lang="less" scoped>
    .affix-container {
        text-align: center;
        height: 200px;
        border-radius: 4px;
        background: var(--xmv-color-primary-light-9);
    }
</style>
