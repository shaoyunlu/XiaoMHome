<template>
    <h1>Drawer 抽屉</h1>
    <p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, 
    <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p>
    <h2>基础用法</h2>
    <p>呼出一个临时的侧边栏, 可以从多个方向呼出</p>
    <xmv-code :code="code_1">
        <xmv-radio-group v-model="direction">
            <xmv-radio label="ltr">left to right</xmv-radio>
            <xmv-radio label="rtl">right to left</xmv-radio>
            <xmv-radio label="ttb">top to bottom</xmv-radio>
            <xmv-radio label="btt">bottom to top</xmv-radio>
        </xmv-radio-group>
        <xmv-button type="primary" style="margin-left: 16px" @click="drawer = true">
            open
        </xmv-button>
        <xmv-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
            with footer
        </xmv-button>
        <xmv-drawer
            v-model="drawer"
            title="I am the title"
            :direction="direction"
            :before-close="handleClose"
        >
            <span>Hi, there!</span>
        </xmv-drawer>
        <xmv-drawer v-model="drawer2" :direction="direction">
            <template #header>
                <h4>set title by slot</h4>
            </template>
            <template #default>
            <div>
                <xmv-radio-group v-model="radio1">
                    <xmv-radio  label="Option 1" size="large">Option 1</xmv-radio>
                    <xmv-radio  label="Option 2" size="large">Option 2</xmv-radio>
                </xmv-radio-group>
            </div>
            </template>
            <template #footer>
            <div style="flex: auto">
                <xmv-button @click="cancelClick">cancel</xmv-button>
                <xmv-button type="primary" @click="confirmClick">confirm</xmv-button>
            </div>
            </template>
        </xmv-drawer>
    </xmv-code>
    <h2>不添加 Title</h2>
    <p>当你不需要标题的时候，你可以将它移除。</p>
    <p text="sm"><p>通过设置 <code>with-header</code> 属性为 <strong>false</strong> 
        来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 <code>title</code>。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-button type="primary" style="margin-left: 16px" @click="drawerWithoutHeader = true">
            open
        </xmv-button>

        <xmv-drawer v-model="drawerWithoutHeader" title="I am the title" :with-header="false">
            <span>Hi there!</span>
        </xmv-drawer>
    </xmv-code>
    <h2>自定义内容</h2>
    <p>像 <code>Dialog</code> 组件一样，<code>Drawer</code> 也可以用来显示多种不同的交互。</p>
    <xmv-code :code="code_3">
        <xmv-button text @click="table = true">Open Drawer with nested table</xmv-button>
        <xmv-button text @click="dialog = true">Open Drawer with nested form</xmv-button>

        <xmv-drawer
            v-model="table"
            title="I have a nested table inside!"
            direction="rtl"
            size="50%">
            <xmv-table :data="gridData">
                <xmv-table-column prop="date" label="Date" width="150" />
                <xmv-table-column prop="name" label="Name" width="200" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </xmv-drawer>
        <xmv-drawer
            v-model="dialog"
            title="I have a nested form inside!"
            :before-close="handleClose"
            direction="ltr"
            class="demo-drawer">
            <div class="demo-drawer__content">
            <xmv-form :mode="form" :label-width="formLabelWidth">
                <xmv-form-item label="Name" >
                    <xmv-input v-model="form.name" autocomplete="off" />
                </xmv-form-item>
                <xmv-form-item label="Area">
                <xmv-select
                    v-model="form.region">
                    <xmv-option label="Area1" value="shanghai" />
                    <xmv-option label="Area2" value="beijing" />
                </xmv-select>
                </xmv-form-item>
            </xmv-form>
            <div class="demo-drawer__footer">
                <xmv-button @click="cancelForm">Cancel</xmv-button>
                <xmv-button type="primary" :loading="loading" @click="onClick">{{
                loading ? 'Submitting ...' : 'Submit'
                }}</xmv-button>
            </div>
            </div>
        </xmv-drawer>
    </xmv-code>
    <h2>嵌套抽屉</h2>
    <p>你可以像 <code>Dialog</code> 一样拥有多层嵌套的 <code>Drawer</code></p>
    <xmv-code :code="code_4">
        <xmv-button type="primary" style="margin-left: 16px" @click="outerDrawer = true">
            open
        </xmv-button>

        <xmv-drawer v-model="outerDrawer" title="I'm outer Drawer" size="50%">
            <div>
                <xmv-button @click="innerDrawer = true">Click me!</xmv-button>
                <xmv-drawer
                    v-model="innerDrawer"
                    title="I'm inner Drawer"
                    :append-to-body="true"
                    :before-close="handleClose"
                >
                    <p>_(:зゝ∠)_</p>
                </xmv-drawer>
            </div>
        </xmv-drawer>
    </xmv-code>
</template>

<script>
import {defineComponent,ref,reactive} from 'vue'
import {XmvMessageBox} from 'xiaomeng-vue-ui'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const drawer = ref(false)
        const drawer2 = ref(false)
        const drawerWithoutHeader = ref(false)
        const direction = ref('rtl')
        const radio1 = ref('Option 1')
        const loading = ref(false)

        const table = ref(false)
        const dialog = ref(false)

        const outerDrawer = ref(false)
        const innerDrawer = ref(false)

        const formLabelWidth = '80px'

        const gridData = [
                            {
                                date: '2016-05-02',
                                name: 'Peter Parker',
                                address: 'Queens, New York City',
                            },
                            {
                                date: '2016-05-04',
                                name: 'Peter Parker',
                                address: 'Queens, New York City',
                            },
                            {
                                date: '2016-05-01',
                                name: 'Peter Parker',
                                address: 'Queens, New York City',
                            },
                            {
                                date: '2016-05-03',
                                name: 'Peter Parker',
                                address: 'Queens, New York City',
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
                    desc: ''
        })
        const cancelClick = ()=> {
            drawer2.value = false
        }

        const confirmClick = ()=>{

        }

        const handleClose = (done)=>{
            XmvMessageBox.confirm('Test' ,'Test').then(()=>{
                done()
            })
        }

        const cancelForm = ()=>{}
        const onClick = ()=>{}

        const code_1 =
                        `
                            // JS
                            const direction = ref('rtl')
                            const drawer = ref(false)
                            const drawer2 = ref(false)
                            const handleClose = (done)=>{
                                XmvMessageBox.confirm('Test' ,'Test').then(()=>{
                                    done()
                                })
                            }
                            // Template
                            <xmv-radio-group v-model="direction">
                                <xmv-radio label="ltr">left to right</xmv-radio>
                                <xmv-radio label="rtl">right to left</xmv-radio>
                                <xmv-radio label="ttb">top to bottom</xmv-radio>
                                <xmv-radio label="btt">bottom to top</xmv-radio>
                            </xmv-radio-group>
                            <xmv-button type="primary" style="margin-left: 16px" @click="drawer = true">
                                open
                            </xmv-button>
                            <xmv-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
                                with footer
                            </xmv-button>
                            <xmv-drawer
                                v-model="drawer"
                                title="I am the title"
                                :direction="direction"
                                :before-close="handleClose"
                            >
                                <span>Hi, there!</span>
                            </xmv-drawer>
                            <xmv-drawer v-model="drawer2" :direction="direction">
                                <template #header>
                                    <h4>set title by slot</h4>
                                </template>
                                <template #default>
                                <div>
                                    <xmv-radio-group v-model="radio1">
                                        <xmv-radio  label="Option 1" size="large">Option 1</xmv-radio>
                                        <xmv-radio  label="Option 2" size="large">Option 2</xmv-radio>
                                    </xmv-radio-group>
                                </div>
                                </template>
                                <template #footer>
                                <div style="flex: auto">
                                    <xmv-button @click="cancelClick">cancel</xmv-button>
                                    <xmv-button type="primary" @click="confirmClick">confirm</xmv-button>
                                </div>
                                </template>
                            </xmv-drawer>
                        `
        const code_2 =
                        `
                            // JS
                            const drawerWithoutHeader = ref(false)
                            // Template
                            <xmv-button type="primary" style="margin-left: 16px" @click="drawerWithoutHeader = true">
                                open
                            </xmv-button>

                            <xmv-drawer v-model="drawerWithoutHeader" title="I am the title" :with-header="false">
                                <span>Hi there!</span>
                            </xmv-drawer>
                        `
        const code_3 =
                        `
                            // JS
                            const table = ref(false)
                            const dialog = ref(false)
                            const gridData = [
                                                {
                                                    date: '2016-05-02',
                                                    name: 'Peter Parker',
                                                    address: 'Queens, New York City',
                                                },
                                                {
                                                    date: '2016-05-04',
                                                    name: 'Peter Parker',
                                                    address: 'Queens, New York City',
                                                },
                                                {
                                                    date: '2016-05-01',
                                                    name: 'Peter Parker',
                                                    address: 'Queens, New York City',
                                                },
                                                {
                                                    date: '2016-05-03',
                                                    name: 'Peter Parker',
                                                    address: 'Queens, New York City',
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
                                        desc: ''
                            })
                            // Template
                            <xmv-button text @click="table = true">Open Drawer with nested table</xmv-button>
                            <xmv-button text @click="dialog = true">Open Drawer with nested form</xmv-button>

                            <xmv-drawer
                                v-model="table"
                                title="I have a nested table inside!"
                                direction="rtl"
                                size="50%">
                                <xmv-table :data="gridData">
                                    <xmv-table-column prop="date" label="Date" width="150" />
                                    <xmv-table-column prop="name" label="Name" width="200" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </xmv-drawer>
                            <xmv-drawer
                                v-model="dialog"
                                title="I have a nested form inside!"
                                :before-close="handleClose"
                                direction="ltr"
                                class="demo-drawer">
                                <div class="demo-drawer__content">
                                <xmv-form :mode="form" :label-width="formLabelWidth">
                                    <xmv-form-item label="Name" >
                                        <xmv-input v-model="form.name" autocomplete="off" />
                                    </xmv-form-item>
                                    <xmv-form-item label="Area">
                                    <xmv-select
                                        v-model="form.region">
                                        <xmv-option label="Area1" value="shanghai" />
                                        <xmv-option label="Area2" value="beijing" />
                                    </xmv-select>
                                    </xmv-form-item>
                                </xmv-form>
                                <div class="demo-drawer__footer">
                                    <xmv-button @click="cancelForm">Cancel</xmv-button>
                                    <xmv-button type="primary" :loading="loading" @click="onClick">{{
                                    loading ? 'Submitting ...' : 'Submit'
                                    }}</xmv-button>
                                </div>
                                </div>
                            </xmv-drawer>
                        `
        const code_4 =
                        `
                            // JS
                            const outerDrawer = ref(false)
                            const innerDrawer = ref(false)
                            // Template
                            <xmv-button type="primary" style="margin-left: 16px" @click="outerDrawer = true">
                                open
                            </xmv-button>

                            <xmv-drawer v-model="outerDrawer" title="I'm outer Drawer" size="50%">
                                <div>
                                    <xmv-button @click="innerDrawer = true">Click me!</xmv-button>
                                    <xmv-drawer
                                        v-model="innerDrawer"
                                        title="I'm inner Drawer"
                                        :append-to-body="true"
                                        :before-close="handleClose"
                                    >
                                        <p>_(:зゝ∠)_</p>
                                    </xmv-drawer>
                                </div>
                            </xmv-drawer>
                        `
        return {drawer,drawer2,direction,radio1,drawerWithoutHeader,
                table,dialog,gridData,loading,form,formLabelWidth,outerDrawer,innerDrawer,
                code_1,code_2,code_3,code_4,
                cancelClick,confirmClick,handleClose,cancelForm,onClick}
    }
})
</script>

<style lang="" scoped></style>
