<template>
    <h1>Notification 通知</h1>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
    <h2>基础用法</h2>
    <p>
        <p text="sm">
            在最简单的情况下，你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。 
            默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 
            如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个 Number，单位为毫秒。
        </p>
    </p>
    <xmv-code :code="code_1">
        <xmv-button plain @click="open1_1"> Closes automatically </xmv-button>
        <xmv-button plain @click="open1_2"> Won't close automatically </xmv-button>
    </xmv-code>
    <h2>不同类型的通知</h2>
    <p>我们提供了四种不同类型的提醒框：success、warning、info 和error。</p>
    <p>
        <p text="sm">可以设置 <code>type</code> 字段来修改。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-button plain @click="open2('success')"> Success </xmv-button>
        <xmv-button plain @click="open2('warning')"> Warning </xmv-button>
        <xmv-button plain @click="open2('info')"> Info </xmv-button>
        <xmv-button plain @click="open2('error')"> Error </xmv-button>
    </xmv-code>
    <h2>自定义消息弹出的位置</h2>
    <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
    <p text="sm">
        <p>使用 <code>position</code> 属性设置 Notification 的弹出位置， 支持四个选项：
            <code>top-right</code>、<code>top-left</code>、<code>bottom-right</code> 和 <code>bottom-left</code>， 
            默认为 <code>top-right</code>。</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-button plain @click="open3('top-right')">top-right</xmv-button>
        <xmv-button plain @click="open3('bottom-right')">bottom-right</xmv-button>
        <xmv-button plain @click="open3('top-left')">top-left</xmv-button>
        <xmv-button plain @click="open3('bottom-left')">bottom-left</xmv-button>
    </xmv-code>
    <h2>隐藏关闭按钮</h2>
    <p>通知的关闭按钮可以被设置为隐藏。</p>
    <p text="sm"><p>将 <code>showClose</code> 属性设置为 <code>false</code> 即可隐藏关闭按钮。</p></p>
    <xmv-code :code="code_4">
        <xmv-button plain @click="open4"> Hide close button </xmv-button>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
import {XmvNotification} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const open1_1 = ()=>{
            XmvNotification({
                title: 'Prompt',
                message: 'This is a message that does not automatically close'
            })
        }

        const open1_2 = ()=>{
            XmvNotification({
                title: 'Prompt',
                message: 'This is a message that does not automatically close',
                duration: 0,
            })
        }

        const open2 = (type) => {
            XmvNotification({
                title: type,
                message: 'This is a '+type+' message',
                type: type,
            })
        }

        const open3 = (position)=>{
            XmvNotification({
                title : 'Title',
                message : 'Message',
                position : position
            })
        }

        const open4 = () => {
            XmvNotification({
                title: 'Info',
                message: 'This is a message without close button',
                showClose: false,
            })
        }

        const code_1 =
                        `
                            // JS
                            <xmv-button plain @click="open1_1"> Closes automatically </xmv-button>
                            <xmv-button plain @click="open1_2"> Won't close automatically </xmv-button>
                            // Template
                            const open1_1 = ()=>{
                                XmvNotification({
                                    title: 'Prompt',
                                    message: 'This is a message that does not automatically close'
                                })
                            }

                            const open1_2 = ()=>{
                                XmvNotification({
                                    title: 'Prompt',
                                    message: 'This is a message that does not automatically close',
                                    duration: 0,
                                })
                            }
                        `
        const code_2 =
                        `
                            // JS
                            <xmv-button plain @click="open2('success')"> Success </xmv-button>
                            <xmv-button plain @click="open2('warning')"> Warning </xmv-button>
                            <xmv-button plain @click="open2('info')"> Info </xmv-button>
                            <xmv-button plain @click="open2('error')"> Error </xmv-button>
                            // Template
                            const open2 = (type) => {
                                XmvNotification({
                                    title: type,
                                    message: 'This is a '+type+' message',
                                    type: type,
                                })
                            }
                        `
        const code_3 =
                        `
                            // JS
                            <xmv-button plain @click="open3('top-right')">top-right</xmv-button>
                            <xmv-button plain @click="open3('bottom-right')">bottom-right</xmv-button>
                            <xmv-button plain @click="open3('top-left')">top-left</xmv-button>
                            <xmv-button plain @click="open3('bottom-left')">bottom-left</xmv-button>
                            // Template
                            const open3 = (position)=>{
                                XmvNotification({
                                    title : 'Title',
                                    message : 'Message',
                                    position : position
                                })
                            }
                        `
        const code_4 =
                        `
                            // JS
                            <xmv-button plain @click="open4"> Hide close button </xmv-button>
                            // Template
                            const open4 = () => {
                                XmvNotification({
                                    title: 'Info',
                                    message: 'This is a message without close button',
                                    showClose: false,
                                })
                            }
                        `
        return {open1_1,open1_2,open2,open3,open4,code_1,code_2,code_3,code_4}
    }
})
</script>

<style lang="" scoped></style>
