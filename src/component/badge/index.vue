<template>
    <h1>Badge 徽章</h1>
    <p>按钮和图标上的数字或状态标记。</p>
    <h2>基础用法</h2>
    <p>可以用来展示新消息的数量。</p>
    <p text="sm"><p>数量值可接受 Number 或 String。</p></p>
    <xmv-code :code="code_1">
        <xmv-badge :value="12" class="item">
            <xmv-button>comments</xmv-button>
        </xmv-badge>
        <xmv-badge :value="3" class="item">
            <xmv-button>replies</xmv-button>
        </xmv-badge>
        <xmv-badge :value="1" class="item" type="primary">
            <xmv-button>comments</xmv-button>
        </xmv-badge>
        <xmv-badge :value="2" class="item" type="warning">
            <xmv-button>replies</xmv-button>
        </xmv-badge>
    </xmv-code>
    <h2>最大值</h2>
    <p>你还可以自定义最大值</p>
    <p text="sm"><p>由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。</p></p>
    <xmv-code :code="code_2">
        <xmv-badge :value="200" :max="99" class="item">
            <xmv-button>comments</xmv-button>
        </xmv-badge>
        <xmv-badge :value="100" :max="10" class="item">
            <xmv-button>replies</xmv-button>
        </xmv-badge>
    </xmv-code>
    <h2>自定义显示内容</h2>
    <p>你也可以展示除数字以外你想要展示的任何值。</p>
    <p text="sm"><p>当 value 是 String 时，可以显示自定义文字。</p></p>
    <xmv-code :code="code_3">
        <xmv-badge value="new" class="item">
            <xmv-button>comments</xmv-button>
        </xmv-badge>
        <xmv-badge value="hot" class="item">
            <xmv-button>replies</xmv-button>
        </xmv-badge>
    </xmv-code>
    <h2>小红点</h2>
    <p>通过一个小红点标记来告知用户有新内容。</p>
    <p text="sm"><p>使用 <code>is-dot</code> 属性。 是个布尔值。</p></p>
    <xmv-code :code="code_4">
        <xmv-badge is-dot class="item" value="new">query</xmv-badge>
        <xmv-badge is-dot class="item" value="new">
            <xmv-button type="primary">
                <xmv-icon name="edit"></xmv-icon>
            </xmv-button>
        </xmv-badge>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        let code_1 =
                        `
                            <xmv-badge :value="12" class="item">
                                <xmv-button>comments</xmv-button>
                            </xmv-badge>
                            <xmv-badge :value="3" class="item">
                                <xmv-button>replies</xmv-button>
                            </xmv-badge>
                            <xmv-badge :value="1" class="item" type="primary">
                                <xmv-button>comments</xmv-button>
                            </xmv-badge>
                            <xmv-badge :value="2" class="item" type="warning">
                                <xmv-button>replies</xmv-button>
                            </xmv-badge>
                        `
        let code_2 =
                        `
                            <xmv-badge :value="200" :max="99" class="item">
                                <xmv-button>comments</xmv-button>
                            </xmv-badge>
                            <xmv-badge :value="100" :max="10" class="item">
                                <xmv-button>replies</xmv-button>
                            </xmv-badge>
                        `
        let code_3 =
                        `
                            <xmv-badge value="new" class="item">
                                <xmv-button>comments</xmv-button>
                            </xmv-badge>
                            <xmv-badge value="hot" class="item">
                                <xmv-button>replies</xmv-button>
                            </xmv-badge>
                        `
        let code_4 =
                        `
                            <xmv-badge is-dot class="item" value="new">query</xmv-badge>
                            <xmv-badge is-dot class="item" value="new">
                                <xmv-button type="primary">
                                    <xmv-icon name="edit"></xmv-icon>
                                </xmv-button>
                            </xmv-badge>
                        `
        return {code_1,code_2,code_3,code_4}
    }
})
</script>

<style lang="less" scoped>
    .item{
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
