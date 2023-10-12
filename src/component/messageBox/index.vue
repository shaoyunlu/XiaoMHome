<template>
    <h1>MessageBox 消息弹框</h1>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    <h2>消息提示</h2>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <p>
        <p text="sm">调用 <code>XmvMessageBox.alert</code> 方法以打开 alert 框。此例中接收了两个参数，
            <code>message</code>和<code>title。</code></p>
    </p>
    <xmv-code :code="code_1">
        <xmv-button text @click="open_1">消息提示对话框</xmv-button>
    </xmv-code>
    <h2>确认信息</h2>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <p>
        <p text="sm">调用 <code>XmvMessageBox.confirm</code> 方法以打开 confirm 框。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-button text @click="open_2">确认信息对话框</xmv-button>
    </xmv-code>
    <h2>提交内容</h2>
    <p>当需要用户输入内容时，可以使用 Prompt 类型的消息框。</p>
    <p>
        <p text="sm">调用 <code>XmvMessageBox.prompt</code> 方法以打开 prompt 框,
            可以用 <code>inputPattern</code> 字段自己规定匹配模式,<code>inputErrorMessage</code> 用来提示用户错误原因</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-button text @click="open_3">带提交内容的对话框</xmv-button>
    </xmv-code>
    <h2>使用VNode</h2>
    <p><code>message</code> 可以是 VNode。</p>
    <xmv-code :code="code_4">
        <xmv-button text @click="open_4">带VNode的对话框</xmv-button>
    </xmv-code>
    <h2>使用 HTML 片段</h2>
    <p><code>message</code> 支持传入 HTML 字符串来作为正文内容。</p>
    <p text="sm">
        <p>将 <code>dangerouslyUseHTMLString</code> 属性设置为 true，
            <code>message</code> 属性就会被当作 HTML 片段处理。</p>
    </p>
    <xmv-code :code="code_5">
        <xmv-button text @click="open_5">带HTML片段的对话框</xmv-button>
    </xmv-code>
    <h2>区分取消操作与关闭操作</h2>
    <p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>
    <p>
        <p text="sm">根据<code>Promise</code> 的 <code>reject</code> 回调返回的值来判断，右上角的关闭按钮返回的值为 'close',
            下方的取消按钮返回的值为 'cancel'</p>
    </p>
    <xmv-code :code="code_6">
        <xmv-button text @click="open_6">区分取消操作与关闭操作</xmv-button>
    </xmv-code>
    <h2>内容居中</h2>
    <p>消息弹框支持使用居中布局。</p>
    <p text="sm"><p>将 <code>center</code> 属性设置为 <code>true</code> 可将内容居中显示。</p></p>
    <xmv-code :code="code_7">
        <xmv-button text @click="open_7">内容居中</xmv-button>
    </xmv-code>
</template>

<script>
import {defineComponent,h} from 'vue'
import {XmvMessageBox ,XmvMessage} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const open_1 = ()=>{
            XmvMessageBox.alert('This is a msg' ,'Title')
        }

        const open_2 = ()=>{
            XmvMessageBox.confirm('This is a msg' ,'Title').then(()=>{
                XmvMessage({
                    message : '成功。',
                    type : 'success'
                })
            }).catch(()=>{
                XmvMessage({
                    message : '失败。',
                    type : 'error'
                })
            })
        }

        const open_3 = ()=>{
            XmvMessageBox.prompt('This is a msg' ,'Title' ,{
                inputPattern:
                /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: 'Invalid Email'
            }).then(val=>{
                XmvMessage({
                    message : '提交的内容为：' + val,
                    type : 'success'
                })
            })
        }

        const open_4 = ()=>{
            XmvMessageBox.vnode({
                message : h('p', null, [
                            h('span', null, 'Message can be '),
                            h('i', { style: 'color: teal' }, 'VNode'),
                          ]),
                title : '带VNode的对话框'
            })
        }

        const open_5 = ()=>{
            XmvMessageBox.alert(
                '<strong>proxy is <i>HTML</i> string</strong>',
                'HTML String',
                {
                    dangerouslyUseHTMLString: true,
                }
            )
        }

        const open_6 = ()=>{
            XmvMessageBox.confirm('This is a msg' ,'Title').then(()=>{
                XmvMessage({
                    message : '成功。',
                    type : 'success'
                })
            }).catch((type)=>{
                XmvMessage({
                    message : '失败。' + type,
                    type : 'error'
                })
            })
        }

        const open_7 = ()=>{
            XmvMessageBox.confirm('This is a msg' ,'Title',{center : true}).then(()=>{
                XmvMessage({
                    message : '成功。',
                    type : 'success'
                })
            }).catch(()=>{
                XmvMessage({
                    message : '失败。',
                    type : 'error'
                })
            })
        }

        const code_1 =
                        `
                            // JS
                            import {XmvMessageBox} from 'xiaomeng-vue-ui'
                            const open = ()=>{
                                XmvMessageBox.alert('This is a msg' ,'Title')
                            }
                            // Template
                            <xmv-button text @click="open">Click to open the Message Box</xmv-button>
                        `
        const code_2 =
                        `
                            // JS
                            const open_2 = ()=>{
                                XmvMessageBox.confirm('This is a msg' ,'Title').then(()=>{
                                    XmvMessage({
                                        message : '成功。',
                                        type : 'success'
                                    })
                                }).catch(()=>{
                                    XmvMessage({
                                        message : '失败。',
                                        type : 'error'
                                    })
                                })
                            }
                            // Template
                            <xmv-button text @click="open_2">确认信息对话框</xmv-button>
                        `
        const code_3 =
                        `
                            // JS
                            const open_3 = ()=>{
                                XmvMessageBox.prompt('This is a msg' ,'Title' ,{
                                    inputPattern:...一段正则,
                                    inputErrorMessage: 'Invalid Email'
                                }).then(val=>{
                                    XmvMessage({
                                        message : '提交的内容为：' + val,
                                        type : 'success'
                                    })
                                })
                            }
                            // Template
                            <xmv-button text @click="open_3">带提交内容的对话框</xmv-button>
                        `
        const code_4 =
                        `
                            XmvMessageBox.vnode({
                                message : h('p', null, [
                                            h('span', null, 'Message can be '),
                                            h('i', { style: 'color: teal' }, 'VNode'),
                                        ]),
                                title : '带VNode的对话框'
                            })
                        `
        const code_5 =
                        `
                            XmvMessageBox.alert(
                                '<strong>proxy is <i>HTML</i> string</strong>',
                                'HTML String',
                                {
                                    dangerouslyUseHTMLString: true,
                                }
                            )
                        `
        const code_6 =
                        `
                            const open_6 = ()=>{
                                    XmvMessageBox.confirm('This is a msg' ,'Title').then(()=>{
                                        XmvMessage({
                                            message : '成功。',
                                            type : 'success'
                                        })
                                    }).catch((type)=>{
                                        XmvMessage({
                                            message : '失败。' + type,
                                            type : 'error'
                                        })
                                    })
                                }
                        `
        const code_7 =
                        `
                            const open_7 = ()=>{
                                XmvMessageBox.confirm('This is a msg' ,'Title',{center : true}).then(()=>{
                                    XmvMessage({
                                        message : '成功。',
                                        type : 'success'
                                    })
                                }).catch(()=>{
                                    XmvMessage({
                                        message : '失败。',
                                        type : 'error'
                                    })
                                })
                            }
                        `
        return {open_1,open_2,open_3,open_4,open_5,open_6,open_7,
                code_1,code_2,code_3,code_4,code_5,code_6,code_7}
    }
})
</script>

<style lang="" scoped></style>
