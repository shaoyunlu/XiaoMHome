<template>
    <h1>Form 表单</h1>
    <p>表单包含 <code>输入框</code>, <code>单选框</code>, <code>下拉选择</code>, 
    <code>多选框</code> 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。</p>
    <h2>典型表单</h2>
    <p>最基础的表单包括各种输入表单项，比如<code>input</code>、<code>select</code>、
        <code>radio</code>、<code>checkbox</code>等。</p>
    <p text="sm"><p>在每一个 <code>form</code> 组件中，你需要一个 <code>form-item</code> 
        字段作为输入项的容器，用于获取值与验证值。</p></p>
    <xmv-code :code="code_1">
        <xmv-form :mode="form" label-width="120px">
            <xmv-form-item label="Activity name">
                <xmv-input v-model="form.name" />
            </xmv-form-item>
            <xmv-form-item label="Activity zone">
                <xmv-select v-model="form.region" placeholder="please select your zone">
                    <xmv-option label="Zone one" value="shanghai" />
                    <xmv-option label="Zone two" value="beijing" />
                </xmv-select>
            </xmv-form-item>
            <xmv-form-item label="Activity time">
                <xmv-row style="width:100%;margin:0">
                    <xmv-col :span="11">
                        <xmv-date-picker
                            v-model="form.date1"
                            type="date"
                            style="width: 100%"/>
                    </xmv-col>
                    <xmv-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </xmv-col>
                    <xmv-col :span="11">
                        <xmv-time-picker
                            v-model="form.date2"
                            style="width: 100%"/>
                    </xmv-col>
                </xmv-row>
            </xmv-form-item>
            <xmv-form-item label="Instant delivery">
                <xmv-switch v-model="form.delivery" />
            </xmv-form-item>
            <xmv-form-item label="Activity type">
                <xmv-checkbox-group v-model="form.type">
                    <xmv-checkbox label="Online activities">Online</xmv-checkbox>
                    <xmv-checkbox label="Promotion activities">Promotion</xmv-checkbox>
                    <xmv-checkbox label="Offline activities">Offline</xmv-checkbox>
                    <xmv-checkbox label="Simple brand exposure">Simple brand exposure</xmv-checkbox>
                </xmv-checkbox-group>
            </xmv-form-item>
            <xmv-form-item label="Resources">
                <xmv-radio-group v-model="form.resource">
                    <xmv-radio label="Sponsor">Sponsor</xmv-radio>
                    <xmv-radio label="Venue">Venue</xmv-radio>
                </xmv-radio-group>
            </xmv-form-item>
            <xmv-form-item label="Activity form">
                <xmv-input v-model="form.desc" type="textarea" />
            </xmv-form-item>
            <xmv-form-item>
                <xmv-button type="primary" @click="onSubmit_1">Create</xmv-button>
                <xmv-button>Cancel</xmv-button>
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
    <h2>行内表单</h2>
    <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
    <p text="sm"><p>通过设置 <code>inline</code> 属性为 <code>true</code> 可以让表单域变为行内的表单域。</p></p>
    <xmv-code :code="code_2">
        <xmv-form :inline="true" :mode="formInline" class="demo-form-inline">
            <xmv-form-item label="Approved by">
                <xmv-input v-model="formInline.user" placeholder="Approved by" clearable />
            </xmv-form-item>
            <xmv-form-item label="Activity zone">
                <xmv-select
                    v-model="formInline.region"
                    placeholder="Activity zone"
                    clearable>
                    <xmv-option label="Zone one" value="shanghai" />
                    <xmv-option label="Zone two" value="beijing" />
                </xmv-select>
            </xmv-form-item>
            <xmv-form-item label="Activity time">
                <xmv-date-picker
                    v-model="formInline.date"
                    type="date"/>
            </xmv-form-item>
            <xmv-form-item>
                <xmv-button type="primary" @click="onSubmit_2">Query</xmv-button>
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
    <h2>对齐方式</h2>
    <p>根据你们的设计情况，来选择最佳的标签对齐方式。</p>
    <p text="sm">
        <p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，
            可选值为 <code>top</code>、<code>left</code>， 当设为 <code>top</code> 时标签会置于表单域的顶部</p>
    </p>
    <xmv-code :code="code_3">
        <xmv-radio-group v-model="labelPosition" label="label position">
            <xmv-radio-button label="left">Left</xmv-radio-button>
            <xmv-radio-button label="right">Right</xmv-radio-button>
            <xmv-radio-button label="top">Top</xmv-radio-button>
        </xmv-radio-group>
        <div style="margin: 20px" />
        <xmv-form
            :label-position="labelPosition"
            label-width="100px"
            :mode="formLabelAlign"
            style="max-width: 460px">
            <xmv-form-item label="Name">
                <xmv-input v-model="formLabelAlign.name" />
            </xmv-form-item>
            <xmv-form-item label="Activity zone">
                <xmv-input v-model="formLabelAlign.region" />
            </xmv-form-item>
            <xmv-form-item label="Activity form">
                <xmv-input v-model="formLabelAlign.type" />
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
    <h2>表单校验</h2>
    <p>Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。</p>
    <p text="sm">
        <p><code>Form</code> 组件提供了表单验证的功能，只需为 <code>rules</code> 属性传入约定的验证规则，
            并将 <code>form-Item</code> 的 <code>prop</code> 属性设置为需要验证的特殊键值即可。</p>
    </p>
    <xmv-code :code="code_4">
        <xmv-form :mode="formValidate" label-width="120px" :rules="rules" ref="formValidateRef">
            <xmv-form-item label="Activity name" prop="name">
                <xmv-input v-model="formValidate.name" />
            </xmv-form-item>
            <xmv-form-item label="Activity zone" prop="region">
                <xmv-select v-model="formValidate.region" placeholder="please select your zone">
                    <xmv-option label="Zone one" value="shanghai" />
                    <xmv-option label="Zone two" value="beijing" />
                </xmv-select>
            </xmv-form-item>
            <xmv-form-item label="Activity time" required>
                <xmv-row style="width:100%;margin:0">
                    <xmv-col :span="11">
                        <xmv-form-item prop="date1">
                        <xmv-date-picker
                            v-model="formValidate.date1"
                            type="date"
                            style="width: 100%"/>
                        </xmv-form-item>
                    </xmv-col>
                    <xmv-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </xmv-col>
                    <xmv-col :span="11">
                        <xmv-form-item prop="date2">
                        <xmv-time-picker
                            v-model="formValidate.date2"
                            style="width: 100%"/>
                        </xmv-form-item>
                    </xmv-col>
                </xmv-row>
            </xmv-form-item>
            <xmv-form-item label="Instant delivery">
                <xmv-switch v-model="formValidate.delivery" />
            </xmv-form-item>
            <xmv-form-item label="Activity type" prop="type">
                <xmv-checkbox-group v-model="formValidate.type">
                    <xmv-checkbox label="Online activities">Online</xmv-checkbox>
                    <xmv-checkbox label="Promotion activities">Promotion</xmv-checkbox>
                    <xmv-checkbox label="Offline activities">Offline</xmv-checkbox>
                    <xmv-checkbox label="Simple brand exposure">Simple brand exposure</xmv-checkbox>
                </xmv-checkbox-group>
            </xmv-form-item>
            <xmv-form-item label="Resources" prop="resource">
                <xmv-radio-group v-model="formValidate.resource">
                    <xmv-radio label="Sponsor">Sponsor</xmv-radio>
                    <xmv-radio label="Venue">Venue</xmv-radio>
                </xmv-radio-group>
            </xmv-form-item>
            <xmv-form-item label="Activity form" prop="desc">
                <xmv-input v-model="formValidate.desc" type="textarea" />
            </xmv-form-item>
            <xmv-form-item>
                <xmv-button type="primary" @click="onSubmit">Create</xmv-button>
                <xmv-button>Cancel</xmv-button>
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
    <h2>自定义校验规则</h2>
    <p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
    <xmv-code :code="code_5">
        <xmv-form
            ref="ruleFormRef"
            :mode="ruleForm"
            :rules="ruleFormRules"
            label-width="120px"
            class="demo-ruleForm">
            <xmv-form-item label="Password" prop="pass">
                <xmv-input v-model="ruleForm.pass" type="password" autocomplete="off" />
            </xmv-form-item>
            <xmv-form-item label="Confirm" prop="checkPass">
            <xmv-input
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"/>
            </xmv-form-item>
            <xmv-form-item label="Age" prop="age">
                <xmv-input v-model.number="ruleForm.age" />
            </xmv-form-item>
            <xmv-form-item>
                <xmv-button type="primary" @click="submitForm(ruleFormRef)">Submit</xmv-button>
                <xmv-button @click="resetForm(ruleFormRef)">Reset</xmv-button>
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
    <h2>添加/删除表单项</h2>
    <p text="sm">
        <p>除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。</p>
    </p>
    <xmv-code :code="code_6">
        <xmv-form
            ref="dynamicFormRef"
            :mode="dynamicValidateForm"
            label-width="120px"
            class="demo-dynamic">
            <xmv-form-item
                prop="email"
                label="Email"
                :rules="[
                    {
                        required: true,
                        message: 'Please input email address',
                    },
                    {
                        type: 'email',
                        message: 'Please input correct email address',
                    },
                ]">
                <xmv-input v-model="dynamicValidateForm.email" />
            </xmv-form-item>
            <xmv-form-item
                v-for="(domain, index) in dynamicValidateForm.domains"
                :key="domain.key"
                :label="'Domain' + index"
                :prop="'domains.' + index + '.value'"
                :rules="[{
                    required: true,
                    message: 'domain can not be null',
                    trigger: 'blur',
                }]">
                <xmv-input v-model="domain.value" />
                <xmv-button class="mt-2" @click="removeDomain(domain)">Delete</xmv-button>
            </xmv-form-item>
            <xmv-form-item>
                <xmv-button type="primary" @click="dynamicSubmitForm(formRef)">Submit</xmv-button>
                <xmv-button @click="addDomain">New domain</xmv-button>
                <xmv-button @click="resetForm(formRef)">Reset</xmv-button>
            </xmv-form-item>
        </xmv-form>
    </xmv-code>
</template>

<script>
import {defineComponent, reactive ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
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

        const formValidateRef = ref(null)

        const formValidate = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        })

        const onSubmit_1 = () => {
            console.log('submit')
        }

        const onSubmit_2 = () => {
            console.log('submit')
        }

        const onSubmit = () => {
            formValidateRef.value.validate().then(()=>{
                console.log('submit')
            }).catch(msg =>{
                console.log(msg)
            })
        }

        const formInline = reactive({
            user: '',
            region: '',
            date: ''
        })

        const labelPosition = ref('left')

        const formLabelAlign = reactive({
            name: '',
            region: '',
            type: ''
        })

        const rules = reactive({
            name : [{required : true}],
            region: [{required: true}],
            count: [
                {
                    required: true,
                    message: 'Please select Activity count'
                },
            ],
            date1: [
                {
                    type: 'date',
                    required: true,
                    message: 'Please pick a date'
                },
            ],
            date2: [
                {
                    type: 'date',
                    required: true,
                    message: 'Please pick a time'
                },
            ],
            type: [
                {
                    type: 'array',
                    required: true,
                    message: 'Please select at least one activity type',
                },
            ],
            resource: [
                {
                    required: true,
                    message: 'Please select activity resource'
                },
            ],
            desc: [
                { required: true, message: 'Please input activity form'},
            ]
        })

        const ruleFormRef = ref(null)

        const ruleForm = reactive({
                            pass: '',
                            checkPass: '',
                            age: ''
        })

        const validatePass = ()=>{
            return new Promise((resolve,reject)=>{
                resolve()
            })
        }
        const checkPass = ()=>{
            return new Promise((resolve,reject)=>{
                resolve()
            })
        }
        const checkAge = (val)=>{
            console.log(val)
            return new Promise((resolve,reject)=>{
                if (val == '123'){
                    resolve()
                }else{
                    reject('数值不等于123')
                }
            })
        }

        const ruleFormRules = reactive({
            pass: [{ validator: validatePass}],
            checkPass: [{ validator: checkPass }],
            age: [{ validator: checkAge }],
        })

        const dynamicFormRef = ref(null)

        const dynamicValidateForm = reactive({
            email : '',
            domains : []
        })

        const submitForm = ()=>{
            ruleFormRef.value.validate().then(()=>{
                console.log('submit')
            }).catch(()=>{

            })
        }

        const resetForm = ()=>{

        }

        const dynamicSubmitForm = ()=>{
            console.log(dynamicValidateForm)
        }

        const addDomain = ()=>{
            dynamicValidateForm.domains.push({
                key: Date.now(),
                value: '',
            })
        }

        const removeDomain = (item) => {
            const index = dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
                dynamicValidateForm.domains.splice(index, 1)
            }
        }

        const code_1 =
                        `
                            // JS
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
                            <xmv-form :mode="form" label-width="120px">
                                <xmv-form-item label="Activity name">
                                    <xmv-input v-model="form.name" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity zone">
                                    <xmv-select v-model="form.region" placeholder="please select your zone">
                                        <xmv-option label="Zone one" value="shanghai" />
                                        <xmv-option label="Zone two" value="beijing" />
                                    </xmv-select>
                                </xmv-form-item>
                                <xmv-form-item label="Activity time">
                                    <xmv-row style="width:100%;margin:0">
                                        <xmv-col :span="11">
                                            <xmv-date-picker
                                                v-model="form.date1"
                                                type="date"
                                                style="width: 100%"/>
                                        </xmv-col>
                                        <xmv-col :span="2" class="text-center">
                                            <span class="text-gray-500">-</span>
                                        </xmv-col>
                                        <xmv-col :span="11">
                                            <xmv-time-picker
                                                v-model="form.date2"
                                                style="width: 100%"/>
                                        </xmv-col>
                                    </xmv-row>
                                </xmv-form-item>
                                <xmv-form-item label="Instant delivery">
                                    <xmv-switch v-model="form.delivery" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity type">
                                    <xmv-checkbox-group v-model="form.type">
                                        <xmv-checkbox label="Online activities">Online</xmv-checkbox>
                                        <xmv-checkbox label="Promotion activities">Promotion</xmv-checkbox>
                                        <xmv-checkbox label="Offline activities">Offline</xmv-checkbox>
                                        <xmv-checkbox label="Simple brand exposure">Simple brand exposure</xmv-checkbox>
                                    </xmv-checkbox-group>
                                </xmv-form-item>
                                <xmv-form-item label="Resources">
                                    <xmv-radio-group v-model="form.resource">
                                        <xmv-radio label="Sponsor">Sponsor</xmv-radio>
                                        <xmv-radio label="Venue">Venue</xmv-radio>
                                    </xmv-radio-group>
                                </xmv-form-item>
                                <xmv-form-item label="Activity form">
                                    <xmv-input v-model="form.desc" type="textarea" />
                                </xmv-form-item>
                                <xmv-form-item>
                                    <xmv-button type="primary" @click="onSubmit">Create</xmv-button>
                                    <xmv-button>Cancel</xmv-button>
                                </xmv-form-item>
                            </xmv-form>
                        `
        const code_2 =
                        `
                            // JS
                            const formInline = reactive({
                                user: '',
                                region: '',
                                date: ''
                            })
                            // Template
                            <xmv-form :inline="true" :mode="formInline" class="demo-form-inline">
                                <xmv-form-item label="Approved by">
                                    <xmv-input v-model="formInline.user" placeholder="Approved by" clearable />
                                </xmv-form-item>
                                <xmv-form-item label="Activity zone">
                                    <xmv-select
                                        v-model="formInline.region"
                                        placeholder="Activity zone"
                                        clearable>
                                        <xmv-option label="Zone one" value="shanghai" />
                                        <xmv-option label="Zone two" value="beijing" />
                                    </xmv-select>
                                </xmv-form-item>
                                <xmv-form-item label="Activity time">
                                    <xmv-date-picker
                                        v-model="formInline.date"
                                        type="date"/>
                                </xmv-form-item>
                                <xmv-form-item>
                                    <xmv-button type="primary" @click="onSubmit">Query</xmv-button>
                                </xmv-form-item>
                            </xmv-form>
                        `
        const code_3 =
                        `
                            // JS
                            const labelPosition = ref('left')
                            const formLabelAlign = reactive({
                                name: '',
                                region: '',
                                type: ''
                            })
                            // Template
                            <xmv-radio-group v-model="labelPosition" label="label position">
                                <xmv-radio-button label="left">Left</xmv-radio-button>
                                <xmv-radio-button label="right">Right</xmv-radio-button>
                                <xmv-radio-button label="top">Top</xmv-radio-button>
                            </xmv-radio-group>
                            <div style="margin: 20px" />
                            <xmv-form
                                :label-position="labelPosition"
                                label-width="100px"
                                :mode="formLabelAlign"
                                style="max-width: 460px">
                                <xmv-form-item label="Name">
                                    <xmv-input v-model="formLabelAlign.name" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity zone">
                                    <xmv-input v-model="formLabelAlign.region" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity form">
                                    <xmv-input v-model="formLabelAlign.type" />
                                </xmv-form-item>
                            </xmv-form>
                        `
        const code_4 =
                        `
                            // JS
                            const formValidateRef = ref(null)
                            const formValidate = reactive({
                                name: '',
                                region: '',
                                date1: '',
                                date2: '',
                                delivery: false,
                                type: [],
                                resource: '',
                                desc: ''
                            })
                            const rules = reactive({
                                name : [{required : true}],
                                region: [{required: true}],
                                count: [
                                    {
                                        required: true,
                                        message: 'Please select Activity count'
                                    },
                                ],
                                date1: [
                                    {
                                        type: 'date',
                                        required: true,
                                        message: 'Please pick a date'
                                    },
                                ],
                                date2: [
                                    {
                                        type: 'date',
                                        required: true,
                                        message: 'Please pick a time'
                                    },
                                ],
                                type: [
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'Please select at least one activity type',
                                    },
                                ],
                                resource: [
                                    {
                                        required: true,
                                        message: 'Please select activity resource'
                                    },
                                ],
                                desc: [
                                    { required: true, message: 'Please input activity form'},
                                ]
                            })
                            const onSubmit = () => {
                                formValidateRef.value.validate().then(()=>{
                                    console.log('submit')
                                }).catch(msg =>{
                                    console.log(msg)
                                })
                            }
                            // Template
                            <xmv-form :mode="formValidate" label-width="120px" :rules="rules" ref="formValidateRef">
                                <xmv-form-item label="Activity name" prop="name">
                                    <xmv-input v-model="formValidate.name" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity zone" prop="region">
                                    <xmv-select v-model="formValidate.region" placeholder="please select your zone">
                                        <xmv-option label="Zone one" value="shanghai" />
                                        <xmv-option label="Zone two" value="beijing" />
                                    </xmv-select>
                                </xmv-form-item>
                                <xmv-form-item label="Activity time" required>
                                    <xmv-row style="width:100%;margin:0">
                                        <xmv-col :span="11">
                                            <xmv-form-item prop="date1">
                                            <xmv-date-picker
                                                v-model="formValidate.date1"
                                                type="date"
                                                style="width: 100%"/>
                                            </xmv-form-item>
                                        </xmv-col>
                                        <xmv-col :span="2" class="text-center">
                                            <span class="text-gray-500">-</span>
                                        </xmv-col>
                                        <xmv-col :span="11">
                                            <xmv-form-item prop="date2">
                                            <xmv-time-picker
                                                v-model="formValidate.date2"
                                                style="width: 100%"/>
                                            </xmv-form-item>
                                        </xmv-col>
                                    </xmv-row>
                                </xmv-form-item>
                                <xmv-form-item label="Instant delivery">
                                    <xmv-switch v-model="formValidate.delivery" />
                                </xmv-form-item>
                                <xmv-form-item label="Activity type" prop="type">
                                    <xmv-checkbox-group v-model="formValidate.type">
                                        <xmv-checkbox label="Online activities">Online</xmv-checkbox>
                                        <xmv-checkbox label="Promotion activities">Promotion</xmv-checkbox>
                                        <xmv-checkbox label="Offline activities">Offline</xmv-checkbox>
                                        <xmv-checkbox label="Simple brand exposure">Simple brand exposure</xmv-checkbox>
                                    </xmv-checkbox-group>
                                </xmv-form-item>
                                <xmv-form-item label="Resources" prop="resource">
                                    <xmv-radio-group v-model="formValidate.resource">
                                        <xmv-radio label="Sponsor">Sponsor</xmv-radio>
                                        <xmv-radio label="Venue">Venue</xmv-radio>
                                    </xmv-radio-group>
                                </xmv-form-item>
                                <xmv-form-item label="Activity form" prop="desc">
                                    <xmv-input v-model="formValidate.desc" type="textarea" />
                                </xmv-form-item>
                                <xmv-form-item>
                                    <xmv-button type="primary" @click="onSubmit">Create</xmv-button>
                                    <xmv-button>Cancel</xmv-button>
                                </xmv-form-item>
                            </xmv-form>
                        `
        const code_5 =
                        `
                            // JS
                            const ruleFormRef = ref(null)
                            const ruleForm = reactive({
                                                pass: '',
                                                checkPass: '',
                                                age: ''
                            })
                            const validatePass = ()=>{
                                return new Promise((resolve,reject)=>{
                                    resolve()
                                })
                            }
                            const checkPass = ()=>{
                                return new Promise((resolve,reject)=>{
                                    resolve()
                                })
                            }
                            const checkAge = (val)=>{
                                console.log(val)
                                return new Promise((resolve,reject)=>{
                                    if (val == '123'){
                                        resolve()
                                    }else{
                                        reject('数值不等于123')
                                    }
                                })
                            }
                            const ruleFormRules = reactive({
                                pass: [{ validator: validatePass}],
                                checkPass: [{ validator: checkPass }],
                                age: [{ validator: checkAge }],
                            })
                            const submitForm = ()=>{
                                ruleFormRef.value.validate().then(()=>{
                                    console.log('submit')
                                }).catch(()=>{

                                })
                            }
                            // Template
                            <xmv-form
                                ref="ruleFormRef"
                                :mode="ruleForm"
                                :rules="ruleFormRules"
                                label-width="120px"
                                class="demo-ruleForm">
                                <xmv-form-item label="Password" prop="pass">
                                    <xmv-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                                </xmv-form-item>
                                <xmv-form-item label="Confirm" prop="checkPass">
                                <xmv-input
                                    v-model="ruleForm.checkPass"
                                    type="password"
                                    autocomplete="off"/>
                                </xmv-form-item>
                                <xmv-form-item label="Age" prop="age">
                                    <xmv-input v-model.number="ruleForm.age" />
                                </xmv-form-item>
                                <xmv-form-item>
                                    <xmv-button type="primary" @click="submitForm(ruleFormRef)">Submit</xmv-button>
                                    <xmv-button @click="resetForm(ruleFormRef)">Reset</xmv-button>
                                </xmv-form-item>
                            </xmv-form>
                        `
        const code_6 =
                        `
                            // JS
                            const dynamicFormRef = ref(null)
                            const dynamicValidateForm = reactive({
                                email : '',
                                domains : []
                            })
                            const dynamicSubmitForm = ()=>{
                                console.log(dynamicValidateForm)
                            }
                            const addDomain = ()=>{
                                dynamicValidateForm.domains.push({
                                    key: Date.now(),
                                    value: '',
                                })
                            }

                            const removeDomain = (item) => {
                                const index = dynamicValidateForm.domains.indexOf(item)
                                if (index !== -1) {
                                    dynamicValidateForm.domains.splice(index, 1)
                                }
                            }
                            // Template
                            <xmv-form
                                ref="dynamicFormRef"
                                :mode="dynamicValidateForm"
                                label-width="120px"
                                class="demo-dynamic">
                                <xmv-form-item
                                    prop="email"
                                    label="Email"
                                    :rules="[
                                        {
                                            required: true,
                                            message: 'Please input email address',
                                        },
                                        {
                                            type: 'email',
                                            message: 'Please input correct email address',
                                        },
                                    ]">
                                    <xmv-input v-model="dynamicValidateForm.email" />
                                </xmv-form-item>
                                <xmv-form-item
                                    v-for="(domain, index) in dynamicValidateForm.domains"
                                    :key="domain.key"
                                    :label="'Domain' + index"
                                    :prop="'domains.' + index + '.value'"
                                    :rules="[{
                                        required: true,
                                        message: 'domain can not be null',
                                        trigger: 'blur',
                                    }]">
                                    <xmv-input v-model="domain.value" />
                                    <xmv-button class="mt-2" @click="removeDomain(domain)">Delete</xmv-button>
                                </xmv-form-item>
                                <xmv-form-item>
                                    <xmv-button type="primary" @click="dynamicSubmitForm(formRef)">Submit</xmv-button>
                                    <xmv-button @click="addDomain">New domain</xmv-button>
                                    <xmv-button @click="resetForm(formRef)">Reset</xmv-button>
                                </xmv-form-item>
                            </xmv-form>
                        `
        return {
                form,
                formInline,
                formValidateRef,rules,formValidate,
                labelPosition,formLabelAlign,
                ruleFormRef,ruleForm,ruleFormRules,
                dynamicFormRef,dynamicValidateForm,dynamicSubmitForm,
                onSubmit,submitForm,resetForm,addDomain,removeDomain,
                onSubmit_1,onSubmit_2,
                code_1,code_2,code_3,code_4,code_5,code_6}
    }
})
</script>

<style lang="less" scoped>
    .text-center {
        text-align: center;
    }

    .mt-2 {
        margin-top: 0.5rem;
    }
</style>
