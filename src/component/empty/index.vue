<template>
    <h1>Empty 空状态</h1>
    <p>空状态时的占位提示。</p>
    <h2>基础用法</h2>
    <xmv-code :code="code_1">
        <xmv-empty description="description" />
    </xmv-code>
    <h2>自定义图片</h2>
    <p>通过设置 <code>image</code> 属性传入图片 URL。</p>
    <xmv-code :code="code_4">
        <xmv-empty
            image="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">
        </xmv-empty>
    </xmv-code>
    <h2>图片尺寸</h2>
    <p>通过使用 <code>image-size</code> 属性来控制图片大小。</p>
    <xmv-code :code="code_2">
        <xmv-empty :image-size="200" />
    </xmv-code>
    <h2>底部内容</h2>
    <p>使用默认插槽可在底部插入内容。</p>
    <xmv-code :code="code_3">
        <xmv-empty>
            <xmv-button type="primary">Button</xmv-button>
        </xmv-empty>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        let code_1 =
                        `
                            <xmv-empty description="description" />
                        `
        let code_2 =
                        `
                            <xmv-empty :image-size="200" />
                        `
        let code_3 =
                        `
                            <xmv-empty>
                                <xmv-button type="primary">Button</xmv-button>
                            </xmv-empty>
                        `
        let code_4 =
                        `
                            <xmv-empty
                                image="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">
                            </xmv-empty>
                        `
        return {code_1,code_2,code_3,code_4}
    }
})
</script>

<style lang="" scoped></style>
