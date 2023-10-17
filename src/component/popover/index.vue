<template>
    <h1>Popover 气泡卡片</h1>
    <h2>基础用法</h2>
    <p>与Tooltip相似，Popover也是基于<code>XmvPopper</code>的构建。 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <p text="sm">
        <p>
            <code>placement</code> 属性决定 popover  的弹出位置，值为：<code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。
            <br/>
            <code>trigger</code> 属性被用来决定 popover 的触发方式，支持的触发方式： <code>hover</code>、<code>click</code>。
        </p>
    </p>
    <xmv-code :code="code_1">
        <xmv-popover
            trigger="hover">
            <template #trigger>
                <xmv-button class="m-2">Hover to activate</xmv-button>
            </template>
            <div style="padding:10px">this is content, this is content, this is content</div>
        </xmv-popover>

        <xmv-popover
            trigger="click" placement="top">
            <template #trigger>
                <xmv-button class="m-2">Click to activate</xmv-button>
            </template>
            <div style="padding:10px">this is content, this is content, this is content</div>
        </xmv-popover>
    </xmv-code>
    <h2>内容可扩展</h2>
    <p>可以在 Popover 中嵌套其它组件。</p>
    <p><p text="sm">以下为嵌套表格的例子。</p></p>
    <xmv-code :code="code_2">
        <xmv-popover  trigger="click" placement="right">
            <template #trigger>
                <xmv-button style="margin-right: 16px">Click to activate</xmv-button>
            </template>
            <div>
                <xmv-table :data="gridData">
                    <xmv-table-column width="150" prop="date" label="date" />
                    <xmv-table-column width="100" prop="name" label="name" />
                    <xmv-table-column width="300" prop="address" label="address" />
                </xmv-table>
            </div>
        </xmv-popover>
    </xmv-code>
    <h2>关闭控制</h2>
    <p>通过提供的 <code>hide</code> 方法，可进行手动关闭。</p>
    <xmv-code :code="code_3">
        <xmv-popover placement="top" ref="popoverRef">
            <div style="padding:20px">
                <p>Are you sure to delete this?</p>
                <div style="text-align: right; margin: 0">
                    <xmv-button size="small" text @click="visible = false">cancel</xmv-button>
                    <xmv-button size="small" type="primary" @click="handleConfirm">confirm</xmv-button>
                </div>
            </div>
            <template #trigger>
                <xmv-button @click="visible = true">Delete</xmv-button>
            </template>
        </xmv-popover>
    </xmv-code>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const popoverRef = ref(null)
        const gridData = [
                                {
                                    date: '2016-05-02',
                                    name: 'Jack',
                                    address: 'New York City',
                                },
                                {
                                    date: '2016-05-04',
                                    name: 'Jack',
                                    address: 'New York City',
                                },
                                {
                                    date: '2016-05-01',
                                    name: 'Jack',
                                    address: 'New York City',
                                },
                                {
                                    date: '2016-05-03',
                                    name: 'Jack',
                                    address: 'New York City',
                                }
                        ]
        const handleConfirm = ()=>{
            popoverRef.value.hide()
        }

        const code_1 =
                        `
                            <xmv-popover
                                trigger="hover">
                                <template #trigger>
                                    <xmv-button class="m-2">Hover to activate</xmv-button>
                                </template>
                                <div style="padding:10px">this is content, this is content, this is content</div>
                            </xmv-popover>

                            <xmv-popover
                                trigger="click" placement="top">
                                <template #trigger>
                                    <xmv-button class="m-2">Click to activate</xmv-button>
                                </template>
                                <div style="padding:10px">this is content, this is content, this is content</div>
                            </xmv-popover>
                        `
        const code_2 =
                        `
                            // JS
                            const gridData = [
                                                        {
                                                            date: '2016-05-02',
                                                            name: 'Jack',
                                                            address: 'New York City',
                                                        },
                                                        {
                                                            date: '2016-05-04',
                                                            name: 'Jack',
                                                            address: 'New York City',
                                                        },
                                                        {
                                                            date: '2016-05-01',
                                                            name: 'Jack',
                                                            address: 'New York City',
                                                        },
                                                        {
                                                            date: '2016-05-03',
                                                            name: 'Jack',
                                                            address: 'New York City',
                                                        }
                                                ]
                            // Template
                            <xmv-popover  trigger="click" placement="right">
                                <template #trigger>
                                    <xmv-button style="margin-right: 16px">Click to activate</xmv-button>
                                </template>
                                <div>
                                    <xmv-table :data="gridData">
                                        <xmv-table-column width="150" prop="date" label="date" />
                                        <xmv-table-column width="100" prop="name" label="name" />
                                        <xmv-table-column width="300" prop="address" label="address" />
                                    </xmv-table>
                                </div>
                            </xmv-popover>
                        `
        const code_3 =
                        `
                            // JS
                            const popoverRef = ref(null)
                            const handleConfirm = ()=>{
                                popoverRef.value.hide()
                            }
                            // Template
                            <xmv-popover placement="top" ref="popoverRef">
                                <div style="padding:20px">
                                    <p>Are you sure to delete this?</p>
                                    <div style="text-align: right; margin: 0">
                                        <xmv-button size="small" text @click="visible = false">cancel</xmv-button>
                                        <xmv-button size="small" type="primary" @click="handleConfirm">confirm</xmv-button>
                                    </div>
                                </div>
                                <template #trigger>
                                    <xmv-button @click="visible = true">Delete</xmv-button>
                                </template>
                            </xmv-popover>
                        `
        return {gridData,popoverRef,handleConfirm,
                code_1,code_2,code_3}
    }
})
</script>

<style lang="" scoped></style>
