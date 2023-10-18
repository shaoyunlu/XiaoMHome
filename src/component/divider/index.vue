<template>
    <h1>Divider 分割线</h1>
    <p>区隔内容的分割线。</p>
    <h2>基础用法</h2>
    <p>对不同段落的文本进行分割。</p>
    <xmv-code :code="code_1">
        <div>
            <span>I sit at my window this morning where the world like a passer-by stops
            for a moment, nods to me and goes.</span>
            <xmv-divider />
            <span>There little thoughts are the rustle of leaves; they have their whisper
            of joy in my mind.</span>
        </div>
    </xmv-code>
    <h2>设置文案</h2>
    <p>可以在分割线上自定义文本内容。</p>
    <xmv-code :code="code_2">
        <div>
            <span>What you are you do not see, what you see is your shadow. </span>
            <xmv-divider content-position="left">Rabindranath Tagore</xmv-divider>
            <span>My wishes are fools, they shout across thy song, my Master. Let me but
            listen.</span>
            <xmv-divider>
            <xmv-icon name="star"></xmv-icon>
            </xmv-divider>
            <span>I cannot choose the best. The best chooses me.</span>
            <xmv-divider content-position="right">Rabindranath Tagore</xmv-divider>
        </div>
    </xmv-code>
    <h2>虚线</h2>
    <p>您可以设置分隔符的样式。</p>
    <xmv-code :code="code_3">
        <div>
            <span>What language is thine, O sea?</span>
            <xmv-divider border-style="dashed" />
            <span>The language of eternal question.</span>
        </div>
    </xmv-code>
    <h2>垂直分割线</h2>
    <xmv-code :code="code_4">
        <div>
            <span>Rain</span>
            <xmv-divider direction="vertical" />
            <span>Home</span>
            <xmv-divider direction="vertical" border-style="dashed" />
            <span>Grass</span>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const code_1 =
                        `
                            <div>
                                <span>I sit at my window this morning where the world like a passer-by stops
                                for a moment, nods to me and goes.</span>
                                <xmv-divider />
                                <span>There little thoughts are the rustle of leaves; they have their whisper
                                of joy in my mind.</span>
                            </div>
                        `
        const code_2 =
                        `
                            <div>
                                <span>What you are you do not see, what you see is your shadow. </span>
                                <xmv-divider content-position="left">Rabindranath Tagore</xmv-divider>
                                <span>My wishes are fools, they shout across thy song, my Master. Let me but
                                listen.</span>
                                <xmv-divider>
                                <xmv-icon name="star"></xmv-icon>
                                </xmv-divider>
                                <span>I cannot choose the best. The best chooses me.</span>
                                <xmv-divider content-position="right">Rabindranath Tagore</xmv-divider>
                            </div>
                        `
        const code_3 =
                        `
                            <div>
                                <span>What language is thine, O sea?</span>
                                <xmv-divider border-style="dashed" />
                                <span>The language of eternal question.</span>
                            </div>
                        `
        const code_4 =
                        `
                            <div>
                                <span>Rain</span>
                                <xmv-divider direction="vertical" />
                                <span>Home</span>
                                <xmv-divider direction="vertical" border-style="dashed" />
                                <span>Grass</span>
                            </div>
                        `
        return {code_1,code_2,code_3,code_4}
    }
})
</script>

<style lang="" scoped></style>
