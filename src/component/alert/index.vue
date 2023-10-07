<template>
    <h1>Alert 提示</h1>
    <p>用于页面中展示重要的提示信息。</p>
    <h2>基础用法</h2>
    <p>Alert 组件不属于浮层元素，不会自动消失或关闭。</p>
    <p text="sm"><p>Alert 组件提供四种类型，由 <code>type</code> 属性指定，默认值为 <code>info</code>。</p></p>
    <xmv-code :code="code_1">
        <xmv-alert title="success alert" type="success" />
        <xmv-alert title="info alert" type="info" />
        <xmv-alert title="warning alert" type="warning" />
        <xmv-alert title="error alert" type="error" />
    </xmv-code>
    <h2>主题</h2>
    <p>Alert 组件提供了两个不同的主题：<code>light</code> 和 <code>dark</code>。</p>
    <p text="sm"><p>通过设置 <code>effect</code> 属性来改变主题，默认为 <code>light</code>。</p></p>
    <xmv-code :code="code_2">
        <xmv-alert title="success alert" type="success" effect="dark" />
        <xmv-alert title="info alert" type="info" effect="dark" />
        <xmv-alert title="warning alert" type="warning" effect="dark" />
        <xmv-alert title="error alert" type="error" effect="dark" />
    </xmv-code>
    <h2>关闭按钮</h2>
    <p>你可以设置 Alert 组件是否为可关闭状态。</p>
    <p text="sm"><code>closable</code> 属性决定 Alert 组件是否可关闭， 
        该属性接受一个 <code>Boolean</code>，默认为 <code>false</code>。
        当 Alert 组件被关闭时会触发 <code>close</code> 事件。</p>
    <xmv-code :code="code_3">
        <xmv-alert title="unclosable alert" type="success" :closable="false" />
        <xmv-alert title="alert with callback" type="warning" />
    </xmv-code>
    <h2>使用图标</h2>
    <p>你可以通过为 Alert 组件添加图标来提高可读性。</p>
    <p text="sm"><p>通过设置 <code>show-icon</code> 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p></p>
    <xmv-code :code="code_4">
        <xmv-alert title="success alert" type="success" show-icon />
        <xmv-alert title="info alert" type="info" show-icon />
        <xmv-alert title="warning alert" type="warning" show-icon />
        <xmv-alert title="error alert" type="error" show-icon />
    </xmv-code>
    <h2>文字居中</h2>
    <p>使用 <code>center</code> 属性来让文字水平居中。</p>
    <xmv-code :code="code_5">
        <xmv-alert title="success alert" type="success" center show-icon />
        <xmv-alert title="info alert" type="info" center show-icon />
        <xmv-alert title="warning alert" type="warning" center show-icon />
        <xmv-alert title="error alert" type="error" center show-icon />
    </xmv-code>
    <h2>文字描述</h2>
    <p>为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。</p>
    <p text="sm"><p>除了必填的 <code>title</code> 属性外，你可以设置 <code>description</code> 
        属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。</p>
    </p>
    <xmv-code :code="code_6">
        <xmv-alert
            title="with description"
            type="success"
            description="This is a description."
        />
    </xmv-code>
    <h2>带图标和描述</h2>
    <p>这是一个带有图标和描述的例子。</p>
    <xmv-code :code="code_7">
        <xmv-alert
            title="success alert"
            type="success"
            description="more text description"
            show-icon
        />
        <xmv-alert
            title="info alert"
            type="info"
            description="more text description"
            show-icon
        />
        <xmv-alert
            title="warning alert"
            type="warning"
            description="more text description"
            show-icon
        />
        <xmv-alert
            title="error alert"
            type="error"
            description="more text description"
            show-icon
        />
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        let code_1 =
                        `
                            <xmv-alert title="success alert" type="success" />
                            <xmv-alert title="info alert" type="info" />
                            <xmv-alert title="warning alert" type="warning" />
                            <xmv-alert title="error alert" type="error" />
                        `
        let code_2 =
                        `
                            <xmv-alert title="success alert" type="success" effect="dark" />
                            <xmv-alert title="info alert" type="info" effect="dark" />
                            <xmv-alert title="warning alert" type="warning" effect="dark" />
                            <xmv-alert title="error alert" type="error" effect="dark" />
                        `
        let code_3 =
                        `
                            <xmv-alert title="unclosable alert" type="success" :closable="false" />
                            <xmv-alert title="alert with callback" type="warning" />
                        `
        let code_4 =
                        `
                            <xmv-alert title="success alert" type="success" show-icon />
                            <xmv-alert title="info alert" type="info" show-icon />
                            <xmv-alert title="warning alert" type="warning" show-icon />
                            <xmv-alert title="error alert" type="error" show-icon />
                        `
        let code_5 =
                        `
                            <xmv-alert title="success alert" type="success" center show-icon />
                            <xmv-alert title="info alert" type="info" center show-icon />
                            <xmv-alert title="warning alert" type="warning" center show-icon />
                            <xmv-alert title="error alert" type="error" center show-icon />
                        `
        let code_6 =
                        `
                            <xmv-alert
                                title="with description"
                                type="success"
                                description="This is a description."
                            />
                        `
        let code_7 =
                        `
                            <xmv-alert
                                title="success alert"
                                type="success"
                                description="more text description"
                                show-icon
                            />
                            <xmv-alert
                                title="info alert"
                                type="info"
                                description="more text description"
                                show-icon
                            />
                            <xmv-alert
                                title="warning alert"
                                type="warning"
                                description="more text description"
                                show-icon
                            />
                            <xmv-alert
                                title="error alert"
                                type="error"
                                description="more text description"
                                show-icon
                            />
                        `
        return {code_1,code_2,code_3,code_4,code_5,code_6,code_7}
    }
})
</script>

<style lang="less" scoped>
    .xmv-alert:first-child {
        margin: 0;
    }
    .xmv-alert {
        margin: 20px 0 0;
    }
</style>
