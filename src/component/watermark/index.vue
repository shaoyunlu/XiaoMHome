<template>
    <h1>Watermark 水印</h1>
    <p>在页面上添加文本或图片等水印信息</p>
    <h2>文本水印</h2>
    <p>基础用法</p>
    <xmv-code :code="code_1">
        <xmv-watermark content="Hello World" :width="200">
            <div style="height: 500px">
            </div>
        </xmv-watermark>
    </xmv-code>
    <h2>图片水印</h2>
    <p>通过 'image' 指定图像地址。</p>
    <xmv-code :code="code_2">
        <xmv-watermark content="Hello World" :width="200" 
                        :imageRate="3" 
                        image="https://element-plus.org/images/element-plus-logo.svg">
            <div style="height: 500px">
            </div>
        </xmv-watermark>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const code_1 =
                        `
                            <xmv-watermark content="Hello World" :width="200">
                                <div style="height: 500px">
                                </div>
                            </xmv-watermark>
                        `

        const code_2 =
                        `
                            <xmv-code>
                                <xmv-watermark content="Hello World" :width="200" 
                                                :imageRate="3" 
                                                image="https://element-plus.org/images/element-plus-logo.svg">
                                    <div style="height: 500px">
                                    </div>
                                </xmv-watermark>
                            </xmv-code>
                        `

        return {code_1 ,code_2}
    }
})
</script>

<style lang="" scoped></style>
