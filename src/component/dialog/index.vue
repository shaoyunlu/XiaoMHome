<template>
    <h1>Dialog 对话框</h1>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h2>基础用法</h2>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <p text="sm">
        <p>需要设置 <code>model-value / v-model</code> 属性，它接收 <code>Boolean</code>，
            当为 <code>true</code> 时显示 Dialog。 Dialog 分为两个部分：<code>body</code> 
            和 <code>footer</code>，<code>footer</code> 需要具名为 <code>footer</code> 
            的 <code>slot</code>。 <code>title</code> 属性用于定义标题，它是可选的，默认值为空。 
            最后，本例还展示了 <code>before-close</code> 的用法。
        </p>
    </p>
    <xmv-code :code="code_1">
        <xmv-button text @click="dialogVisible = true">
            click to open the Dialog
        </xmv-button>
        <xmv-dialog
            v-model="dialogVisible"
            title="Tips"
            width="30%"
            :before-close="handleClose"
        >
            <span>This is a message</span>
            <template #footer>
            <span class="dialog-footer">
                <xmv-button @click="dialogVisible = false">Cancel</xmv-button>
                <xmv-button type="primary" @click="dialogVisible = false">
                Confirm
                </xmv-button>
            </span>
            </template>
        </xmv-dialog>
    </xmv-code>
    <h2>自定义内容</h2>
    <p>对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在 Dialog 中使用 xiaomeng-vue-ui 的表格和表单。</p>
    <xmv-code :code="code_2">
        <xmv-button text @click="dialogTableVisible = true">
            打开一个表格 Dialog
        </xmv-button>

        <xmv-button text @click="dialogFormVisible = true">
            打开一个表单 Dialog
        </xmv-button>

        <xmv-dialog v-model="dialogTableVisible" title="Shipping address">
            <div>
                <xmv-table :data="gridData">
                    <xmv-table-column prop="date" label="Date" width="150" />
                    <xmv-table-column prop="name" label="Name" width="200" />
                    <xmv-table-column prop="address" label="Address" />
                </xmv-table>
            </div>
        </xmv-dialog>
        
        <xmv-dialog v-model="dialogFormVisible" title="Shipping address">
            <xmv-form :mode="form" :label-width="formLabelWidth" class="demo-form">
                <xmv-form-item label="Promotion name">
                    <xmv-input v-model="form.name" autocomplete="off" />
                </xmv-form-item>
                <xmv-form-item label="Zones" >
                    <xmv-select v-model="form.region">
                        <xmv-option label="Zone No.1" value="shanghai" />
                        <xmv-option label="Zone No.2" value="beijing" />
                    </xmv-select>
                </xmv-form-item>
            </xmv-form>
            <template #footer>
                <span class="dialog-footer">
                    <xmv-button @click="dialogFormVisible = false">Cancel</xmv-button>
                    <xmv-button type="primary" @click="dialogFormVisible = false">
                        Confirm
                    </xmv-button>
                </span>
            </template>
        </xmv-dialog>
    </xmv-code>
    <h2>嵌套的对话框</h2>
    <p>以下是一个嵌套的对话框例子。</p>
    <xmv-code :code="code_3">
        <xmv-button text @click="outerVisible = true">
            open the outer Dialog
        </xmv-button>

        <xmv-dialog v-model="outerVisible" title="Outer Dialog">
            <template #default>
                <xmv-dialog
                    v-model="innerVisible"
                    width="30%"
                    title="Inner Dialog"
                    append-to-body
                />
            </template>
            <template #footer>
                <div class="dialog-footer">
                    <xmv-button @click="outerVisible = false">Cancel</xmv-button>
                    <xmv-button type="primary" @click="innerVisible = true">
                    open the inner Dialog
                    </xmv-button>
                </div>
            </template>
        </xmv-dialog>
    </xmv-code>
    <h2>内容居中</h2>
    <p>对话框的内容可以居中。</p>
    <p text="sm"><p>将<code>center</code>设置为<code>true</code>即可使标题和底部居中。 
        <code>center</code>仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，
        内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS 样式。</p>
    </p>
    <xmv-code :code="code_4">
        <xmv-button text @click="centerDialogVisible = true">
            Click to open the Dialog
        </xmv-button>

        <xmv-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
            <span>
            It should be noted that the content will not be aligned in center by
            default
            </span>
            <template #footer>
            <span class="dialog-footer">
                <xmv-button @click="centerDialogVisible = false">Cancel</xmv-button>
                <xmv-button type="primary" @click="centerDialogVisible = false">
                Confirm
                </xmv-button>
            </span>
            </template>
        </xmv-dialog>
    </xmv-code>
    <h2>居中对话框</h2>
    <p>从屏幕中心打开对话框。</p>
    <p text="sm"><p>设置 <code>align-center</code> 为 <code>true</code> 
        使对话框水平垂直居中。 由于对话框垂直居中在弹性盒子中，所以<code>top</code>属性将不起作用。</p></p>
    <xmv-code :code="code_5">
        <xmv-button text @click="centerDialogVisible_2 = true">
            Click to open the Dialog
        </xmv-button>

        <xmv-dialog
            v-model="centerDialogVisible_2"
            title="Warning"
            width="30%"
            align-center>
            <span>Open the dialog from the center from the screen</span>
            <template #footer>
            <span class="dialog-footer">
                <xmv-button @click="centerDialogVisible_2 = false">Cancel</xmv-button>
                <xmv-button type="primary" @click="centerDialogVisible_2 = false">
                Confirm
                </xmv-button>
            </span>
            </template>
        </xmv-dialog>
    </xmv-code>
    <h2>可拖拽对话框</h2>
    <p>试着拖动一下<code>header</code>部分吧</p>
    <p text="sm"><p>设置<code>draggable</code>属性为<code>true</code>以做到拖拽</p></p>
    <xmv-code :code="code_6">
        <xmv-button text @click="dialogDragVisible = true">
            Click to open Dialog
        </xmv-button>

        <xmv-dialog v-model="dialogDragVisible" title="Tips" width="30%" draggable>
            <span>It's a draggable Dialog</span>
            <template #footer>
            <span class="dialog-footer">
                <xmv-button @click="dialogDragVisible = false">Cancel</xmv-button>
                <xmv-button type="primary" @click="dialogDragVisible = false">
                Confirm
                </xmv-button>
            </span>
            </template>
        </xmv-dialog>
    </xmv-code>
</template>

<script>
import {defineComponent,ref,reactive} from 'vue'
import {XmvMessageBox} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const dialogVisible = ref(false)
        const dialogTableVisible = ref(false)
        const dialogFormVisible = ref(false)
        const formLabelWidth = '140px'

        const outerVisible = ref(false)
        const innerVisible = ref(false)
        const centerDialogVisible = ref(false)
        const centerDialogVisible_2 = ref(false)
        const dialogDragVisible = ref(false)
        const gridData = [
                            {
                                date: '2016-05-02',
                                name: 'John Smith',
                                address: 'No.1518,  Jinshajiang Road, Putuo District',
                            },
                            {
                                date: '2016-05-04',
                                name: 'John Smith',
                                address: 'No.1518,  Jinshajiang Road, Putuo District',
                            },
                            {
                                date: '2016-05-01',
                                name: 'John Smith',
                                address: 'No.1518,  Jinshajiang Road, Putuo District',
                            },
                            {
                                date: '2016-05-03',
                                name: 'John Smith',
                                address: 'No.1518,  Jinshajiang Road, Putuo District',
                            },
                        ]
        const form = reactive({
                                name: '',
                                region: '',
                                date1: '',
                                date2: '',
                                delivery: false,
                                type: [],
                                resource: '',
                                desc: '',
                                })
        const handleClose = (done)=>{
            XmvMessageBox.confirm('提示' ,'确认要关闭么？').then(()=>{
                done()
            })
        }

        const code_1 =
                        `
                            // JS
                            const dialogVisible = ref(false)
                            const handleClose = (done)=>{
                                XmvMessageBox.confirm('确认要关闭么？' ,'提示').then(()=>{
                                    done()
                                })
                            }
                            // Template
                            <xmv-button text @click="dialogVisible = true">
                                click to open the Dialog
                            </xmv-button>
                            <xmv-dialog
                                v-model="dialogVisible"
                                title="Tips"
                                width="30%"
                                :before-close="handleClose">
                                <span>This is a message</span>
                                <template #footer>
                                <span class="dialog-footer">
                                    <xmv-button @click="dialogVisible = false">Cancel</xmv-button>
                                    <xmv-button type="primary" @click="dialogVisible = false">
                                    Confirm
                                    </xmv-button>
                                </span>
                                </template>
                            </xmv-dialog>
                        `
        const code_2 =
                        `
                            // JS
                            const dialogTableVisible = ref(false)
                            const dialogFormVisible = ref(false)

                            const gridData = [
                                    {
                                        date: '2016-05-02',
                                        name: 'John Smith',
                                        address: 'No.1518,  Jinshajiang Road, Putuo District',
                                    },
                                    {
                                        date: '2016-05-04',
                                        name: 'John Smith',
                                        address: 'No.1518,  Jinshajiang Road, Putuo District',
                                    },
                                    {
                                        date: '2016-05-01',
                                        name: 'John Smith',
                                        address: 'No.1518,  Jinshajiang Road, Putuo District',
                                    },
                                    {
                                        date: '2016-05-03',
                                        name: 'John Smith',
                                        address: 'No.1518,  Jinshajiang Road, Putuo District',
                                    },
                                ]
                            const form = reactive({
                                                    name: '',
                                                    region: '',
                                                    date1: '',
                                                    date2: '',
                                                    delivery: false,
                                                    type: [],
                                                    resource: '',
                                                    desc: '',
                                                    })

                            // Template
                            <xmv-button text @click="dialogTableVisible = true">
                                打开一个表格 Dialog
                            </xmv-button>

                            <xmv-button text @click="dialogFormVisible = true">
                                打开一个表单 Dialog
                            </xmv-button>

                            <xmv-dialog v-model="dialogTableVisible" title="Shipping address">
                                <div>
                                    <xmv-table :data="gridData">
                                        <xmv-table-column prop="date" label="Date" width="150" />
                                        <xmv-table-column prop="name" label="Name" width="200" />
                                        <xmv-table-column prop="address" label="Address" />
                                    </xmv-table>
                                </div>
                            </xmv-dialog>
                            
                            <xmv-dialog v-model="dialogFormVisible" title="Shipping address">
                                <xmv-form :mode="form" :label-width="formLabelWidth" class="demo-form">
                                    <xmv-form-item label="Promotion name">
                                        <xmv-input v-model="form.name" autocomplete="off" />
                                    </xmv-form-item>
                                    <xmv-form-item label="Zones" >
                                        <xmv-select v-model="form.region">
                                            <xmv-option label="Zone No.1" value="shanghai" />
                                            <xmv-option label="Zone No.2" value="beijing" />
                                        </xmv-select>
                                    </xmv-form-item>
                                </xmv-form>
                                <template #footer>
                                    <span class="dialog-footer">
                                        <xmv-button @click="dialogFormVisible = false">Cancel</xmv-button>
                                        <xmv-button type="primary" @click="dialogFormVisible = false">
                                            Confirm
                                        </xmv-button>
                                    </span>
                                </template>
                            </xmv-dialog>
                        `
        const code_3 =
                        `
                            // JS
                            const outerVisible = ref(false)
                            const innerVisible = ref(false)
                            // Template
                            <xmv-button text @click="outerVisible = true">
                                open the outer Dialog
                            </xmv-button>

                            <xmv-dialog v-model="outerVisible" title="Outer Dialog">
                                <template #default>
                                    <xmv-dialog
                                        v-model="innerVisible"
                                        width="30%"
                                        title="Inner Dialog"
                                        append-to-body
                                    />
                                </template>
                                <template #footer>
                                    <div class="dialog-footer">
                                        <xmv-button @click="outerVisible = false">Cancel</xmv-button>
                                        <xmv-button type="primary" @click="innerVisible = true">
                                        open the inner Dialog
                                        </xmv-button>
                                    </div>
                                </template>
                            </xmv-dialog>
                        `
        const code_4 =
                        `
                            // JS
                            const centerDialogVisible = ref(false)
                            // Template
                            <xmv-button text @click="centerDialogVisible = true">
                                Click to open the Dialog
                            </xmv-button>

                            <xmv-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
                                <span>
                                It should be noted that the content will not be aligned in center by
                                default
                                </span>
                                <template #footer>
                                <span class="dialog-footer">
                                    <xmv-button @click="centerDialogVisible = false">Cancel</xmv-button>
                                    <xmv-button type="primary" @click="centerDialogVisible = false">
                                    Confirm
                                    </xmv-button>
                                </span>
                                </template>
                            </xmv-dialog>
                        `
        const code_5 =
                        `
                            // JS
                            const centerDialogVisible_2 = ref(false)
                            // Template
                            <xmv-button text @click="centerDialogVisible_2 = true">
                                Click to open the Dialog
                            </xmv-button>

                            <xmv-dialog
                                v-model="centerDialogVisible_2"
                                title="Warning"
                                width="30%"
                                align-center>
                                <span>Open the dialog from the center from the screen</span>
                                <template #footer>
                                <span class="dialog-footer">
                                    <xmv-button @click="centerDialogVisible_2 = false">Cancel</xmv-button>
                                    <xmv-button type="primary" @click="centerDialogVisible_2 = false">
                                    Confirm
                                    </xmv-button>
                                </span>
                                </template>
                            </xmv-dialog>
                        `
        const code_6 =
                        `
                            // JS
                            const dialogDragVisible = ref(false)
                            // Template
                            <xmv-button text @click="dialogDragVisible = true">
                                Click to open Dialog
                            </xmv-button>

                            <xmv-dialog v-model="dialogDragVisible" title="Tips" width="30%" draggable>
                                <span>It's a draggable Dialog</span>
                                <template #footer>
                                <span class="dialog-footer">
                                    <xmv-button @click="dialogDragVisible = false">Cancel</xmv-button>
                                    <xmv-button type="primary" @click="dialogDragVisible = false">
                                    Confirm
                                    </xmv-button>
                                </span>
                                </template>
                            </xmv-dialog>
                        `
        return {dialogVisible,dialogTableVisible,dialogFormVisible,gridData,
                form,formLabelWidth,outerVisible,innerVisible,centerDialogVisible,
                centerDialogVisible_2,dialogDragVisible,
                code_1,code_2,code_3,code_4,code_5,code_6,
                handleClose}
    }
})
</script>

<style lang="less">

    .demo-form{
        .xmv-select, .xmv-input {
            width: 300px;
        }
    }
    
</style>
