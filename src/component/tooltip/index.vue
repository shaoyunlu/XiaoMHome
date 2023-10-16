<template>
    <h1>Tooltip 文字提示</h1>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h2>基础用法</h2>
    <p>在这里我们提供 8 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <p text="sm">
        <p>使用 <code>content</code> 属性来决定 <code>hover</code> 时的提示信息。 
            由 <code>placement</code> 属性决定展示效果： <code>placement</code>属性值为：
            <code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；
            由 <code>is-align-center</code> 属性决定是否居中显示。</p>
    </p>
    <xmv-code :code="code_1">
        <div class="tooltip-base-box">
            <div class="row center">
                <xmv-tooltip
                    content="Top Left Top Left Top Left"
                    placement="top">
                    <xmv-button>top-left</xmv-button>
                </xmv-tooltip>
                <xmv-tooltip
                    content="Top Center Top Center Top Center"
                    is-align-center
                    placement="top">
                    <xmv-button>top-center</xmv-button>
                </xmv-tooltip>
            </div>
            <div class="row">
            <xmv-tooltip
                content="Left Top prompts info"
                placement="left">
                <xmv-button>left</xmv-button>
            </xmv-tooltip>
            <xmv-tooltip
                content="Right Top prompts info"
                placement="right">
                <xmv-button>right</xmv-button>
            </xmv-tooltip>
            </div>
            <div class="row">
                <xmv-tooltip
                    content="Left Center prompts info"
                    placement="left"
                    is-align-center>
                    <xmv-button class="mt-3 mb-3">left-center</xmv-button>
                </xmv-tooltip>
                <xmv-tooltip
                    content="Right Center prompts info"
                    placement="right"
                    is-align-center>
                    <xmv-button>right-center</xmv-button>
                </xmv-tooltip>
            </div>
            <div class="row center">
                <xmv-tooltip
                    content="Bottom Left prompts info"
                    placement="bottom">
                    <xmv-button>bottom-left</xmv-button>
                </xmv-tooltip>
                <xmv-tooltip
                    content="Bottom Center prompts info"
                    placement="bottom"
                    is-align-center>
                    <xmv-button>bottom-center</xmv-button>
                </xmv-tooltip>
            </div>
        </div>
    </xmv-code>
    <h2>主题</h2>
    <p>Tooltip 组件内置了两个主题：<code>dark</code>和<code>light</code>。</p>
    <p text="sm"><p>通过设置 <code>effect</code> 来修改主题，默认值为 <code>dark</code>.</p></p>
    <xmv-code :code="code_2">
        <xmv-tooltip content="Dark theme" placement="top">
            <xmv-button>Dark</xmv-button>
        </xmv-tooltip>
        <xmv-tooltip content="Light theme" placement="bottom" effect="light">
            <xmv-button>Light</xmv-button>
        </xmv-tooltip>

        <xmv-tooltip content="Customized theme" effect="customized">
            <xmv-button>Customized theme</xmv-button>
        </xmv-tooltip>
    </xmv-code>
    <h2>更多内容的文字提示</h2>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <p text="sm"><p>用具名 slot <code>content</code>，替代<code>tooltip</code>中的<code>content</code>属性。</p></p>
    <xmv-code :code="code_3">
        <xmv-tooltip placement="top">
            <template #content> multiple lines<br /><br /><br />second line </template>
            <xmv-button>Top center</xmv-button>
        </xmv-tooltip>
    </xmv-code>
    <h2>高级扩展</h2>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p>如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求， 你只需要将其设置为 <code>true</code>。</p>
    <xmv-code :code="code_4">
        <xmv-tooltip
            :disabled="disabled"
            content="click to close tooltip function"
            placement="bottom">
            <xmv-button @click="disabled = !disabled">click to {{ disabled ? 'active' : 'close' }} tooltip function</xmv-button>
        </xmv-tooltip>
    </xmv-code>
    <h2>显示 HTML 内容</h2>
    <p>内容属性可以设置为 HTML 字符串。</p>
    <xmv-code :code="code_5">
        <xmv-tooltip
            content="<span>The content can be <strong>HTML</strong></span>">
            <xmv-button>hover me</xmv-button>
        </xmv-tooltip>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const disabled = ref(false)

        const code_1 =
                        `
                            <div class="tooltip-base-box">
                                <div class="row center">
                                    <xmv-tooltip
                                        content="Top Left Top Left Top Left"
                                        placement="top">
                                        <xmv-button>top-left</xmv-button>
                                    </xmv-tooltip>
                                    <xmv-tooltip
                                        content="Top Center Top Center Top Center"
                                        is-align-center
                                        placement="top">
                                        <xmv-button>top-center</xmv-button>
                                    </xmv-tooltip>
                                </div>
                                <div class="row">
                                <xmv-tooltip
                                    content="Left Top prompts info"
                                    placement="left">
                                    <xmv-button>left</xmv-button>
                                </xmv-tooltip>
                                <xmv-tooltip
                                    content="Right Top prompts info"
                                    placement="right">
                                    <xmv-button>right</xmv-button>
                                </xmv-tooltip>
                                </div>
                                <div class="row">
                                    <xmv-tooltip
                                        content="Left Center prompts info"
                                        placement="left"
                                        is-align-center>
                                        <xmv-button class="mt-3 mb-3">left-center</xmv-button>
                                    </xmv-tooltip>
                                    <xmv-tooltip
                                        content="Right Center prompts info"
                                        placement="right"
                                        is-align-center>
                                        <xmv-button>right-center</xmv-button>
                                    </xmv-tooltip>
                                </div>
                                <div class="row center">
                                    <xmv-tooltip
                                        content="Bottom Left prompts info"
                                        placement="bottom">
                                        <xmv-button>bottom-left</xmv-button>
                                    </xmv-tooltip>
                                    <xmv-tooltip
                                        content="Bottom Center prompts info"
                                        placement="bottom"
                                        is-align-center>
                                        <xmv-button>bottom-center</xmv-button>
                                    </xmv-tooltip>
                                </div>
                            </div>
                        `
        const code_2 =
                        `
                           <xmv-tooltip content="Dark theme" placement="top">
                                <xmv-button>Dark</xmv-button>
                            </xmv-tooltip>
                            <xmv-tooltip content="Light theme" placement="bottom" effect="light">
                                <xmv-button>Light</xmv-button>
                            </xmv-tooltip>

                            <xmv-tooltip content="Customized theme" effect="customized">
                                <xmv-button>Customized theme</xmv-button>
                            </xmv-tooltip> 
                        `
        const code_3 =
                        `
                           <xmv-tooltip placement="top">
                                <template #content> multiple lines<br /><br /><br />second line </template>
                                <xmv-button>Top center</xmv-button>
                            </xmv-tooltip> 
                        `
        const code_4 =
                        `
                            // JS
                            const disabled = ref(false)
                            // Template
                            <xmv-tooltip
                                :disabled="disabled"
                                content="click to close tooltip function"
                                placement="bottom">
                                <xmv-button @click="disabled = !disabled">
                                    click to {{ disabled ? 'active' : 'close' }} tooltip function
                                </xmv-button>
                            </xmv-tooltip>
                        `
        const code_5 =
                        `
                            <xmv-tooltip
                                content="<span>The content can be <strong>HTML</strong></span>">
                                <xmv-button>hover me</xmv-button>
                            </xmv-tooltip>
                        `
        return {disabled,code_1,code_2,code_3,code_4,code_5}
    }
})
</script>

<style lang="less">
    .tooltip-base-box {
        width: 600px;
    }
    .tooltip-base-box .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tooltip-base-box .center {
        justify-content: center;
    }
    .tooltip-base-box .box-item {
        width: 110px;
        margin-top: 10px;
    }

    .mt-3 {
        margin-top: 0.75rem;
    }

    .mb-3 {
        margin-bottom: 0.75rem;
    }

    .xmv-popper.is-customized {
    /* Set padding to ensure the height is 32px */
        padding: 6px 12px;
        background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
    }

    .xmv-popper.is-customized .xmv-popper__arrow::before {
        background: linear-gradient(45deg, #b2e68d, #bce689);
        right: 0;
    }
</style>
