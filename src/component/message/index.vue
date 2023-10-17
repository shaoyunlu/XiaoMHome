<template>
    <h1>Message 消息提示</h1>
    <p>常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h2>基础用法</h2>
    <p>从顶部出现，3 秒后自动消失。</p>
    <xmv-code :code="code_1">
        <xmv-button @click="open">Show message</xmv-button>
    </xmv-code>
    <h2>不同状态</h2>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <p>
        <p text="sm">当需要自定义更多属性时，<code>Message</code> 也可以接收一个对象为参数。 
            比如，设置 <code>type</code> 字段可以定义不同的状态，默认为<code>info。</code></p>
    </p>
    <xmv-code :code="code_2">
        <xmv-button @click="open1('success')">success</xmv-button>
        <xmv-button @click="open1('warning')">warning</xmv-button>
        <xmv-button @click="open1('info')">message</xmv-button>
        <xmv-button @click="open1('error')">error</xmv-button>
    </xmv-code>
    <h2>可关闭的消息提示</h2>
    <p>可以添加关闭按钮。</p>
    <p text="sm"><p>默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 <code>showClose</code> 设置为 true 此外，
        和 Notification 一样，Message 拥有可控的 <code>duration</code>， 默认的关闭时间为 3000 毫秒，
        当把这个属性的值设置为<code>0</code>便表示该消息不会被自动关闭。</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-button @click="open2('success')">success</xmv-button>
        <xmv-button @click="open2('warning')">warning</xmv-button>
        <xmv-button @click="open2('info')">message</xmv-button>
        <xmv-button @click="open2('error')">error</xmv-button>
    </xmv-code>
    <h2>分组消息合并</h2>
    <p text="sm"><p>设置 <code>grouping</code> 为 true，内容相同的 <code>message</code> 将被合并。</p></p>
    <xmv-code :code="code_4">
        <xmv-button @click="open3('success')">success</xmv-button>
        <xmv-button @click="open3('warning')">warning</xmv-button>
        <xmv-button @click="open3('info')">message</xmv-button>
        <xmv-button @click="open3('error')">error</xmv-button>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
import {XmvMessage} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const open = ()=>{
            XmvMessage({
                message : '这是一条消息提示。'
            })
        }

        const open1 = (type)=>{
            XmvMessage({
                message : '这是一条消息提示。',
                type : type
            })
        }

        const open2 = (type)=>{
            XmvMessage({
                message : '这是一条消息提示。',
                type : type,
                showClose: true
            })
        }

        const open3 = (type)=>{
            XmvMessage({
                message : '这是一条消息提示。' + type,
                type : type,
                showClose: true,
                grouping: true
            })
        }

        const code_1 =
                        `
                            // JS
                            const open = ()=>{
                                XmvMessage({
                                    message : '这是一条消息提示。'
                                })
                            }
                            // Template
                            <xmv-button @click="open">Show message</xmv-button>
                        `
        const code_2 =
                        `
                            // JS
                            const open1 = (type)=>{
                            XmvMessage({
                                    message : '这是一条消息提示。',
                                    type : type
                                })
                            }
                            // Template
                            <xmv-button @click="open1('success')">success</xmv-button>
                            <xmv-button @click="open1('warning')">warning</xmv-button>
                            <xmv-button @click="open1('info')">message</xmv-button>
                            <xmv-button @click="open1('error')">error</xmv-button>
                        `
        const code_3 =
                        `
                            // JS
                            const open2 = (type)=>{
                                XmvMessage({
                                    message : '这是一条消息提示。',
                                    type : type,
                                    showClose: true
                                })
                            }
                            // Template
                            <xmv-button @click="open2('success')">success</xmv-button>
                            <xmv-button @click="open2('warning')">warning</xmv-button>
                            <xmv-button @click="open2('info')">message</xmv-button>
                            <xmv-button @click="open2('error')">error</xmv-button>
                        `
        const code_4 =
                        `
                            // JS
                            const open3 = (type)=>{
                                XmvMessage({
                                    message : '这是一条消息提示。' + type,
                                    type : type,
                                    showClose: true,
                                    grouping: true
                                })
                            }
                            // Template
                            <xmv-button @click="open3('success')">success</xmv-button>
                            <xmv-button @click="open3('warning')">warning</xmv-button>
                            <xmv-button @click="open3('info')">message</xmv-button>
                            <xmv-button @click="open3('error')">error</xmv-button>
                        `
        return {open,open1,open2,open3,code_1,code_2,code_3,code_4}
    }
})
</script>

<style lang="" scoped></style>
