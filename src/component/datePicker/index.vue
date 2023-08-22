<template>
    <h1>DatePicker 日期选择器</h1>
    <p>用于选择或输入日期</p>
    <h2>选择某一天</h2>
    <p>以”日“为基本单位，基础的日期选择控件</p>
    <p text="sm">
        <p>基本单位由 <code>type</code> 属性指定。<code>size</code> 属性控制大小</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_1_1" size="small"></xmv-date-picker>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_1_2"></xmv-date-picker>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_1_3" size="large"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>选择某一月</h2>
    <p>通过设置<code>type</code> 为 month,可以显示月。</p>
    <xmv-code :code="code_2">
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_2_1" type="month"></xmv-date-picker>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_2_2" type="month"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>选择一段时间</h2>
    <p>你可以通过如下例子来学习如何设置一个日期范围选择器。</p>
    <xmv-code :code="code_3">
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_3_1" type="daterange"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_3_2" type="daterange"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    <h2>选择月份范围</h2>
    <p>同时也支持月份范围选择。</p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_4_1" type="monthrange"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
        <xmv-row>
            <xmv-col :span="7" :offset="1">
                <xmv-date-picker v-model="date_4_2" type="monthrange"></xmv-date-picker>
            </xmv-col>
        </xmv-row>
    </xmv-code>
    
</template>

<script>
import {defineComponent ,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        const date_1_1 = ref('')
        const date_1_2 = ref('2022-06-02')
        const date_1_3 = ref('')
        const date_2_1 = ref('')
        const date_2_2 = ref('2022-07')
        const date_3_1 = ref([])
        const date_3_2 = ref(['2022-06-01' ,'2023-07-01'])
        const date_4_1 = ref([])
        const date_4_2 = ref(['2021-01' ,'2023-06'])

        let code_1 =
                        `
                            // JS
                            const date_1_1 = ref('')
                            const date_1_2 = ref('2022-06-02')
                            const date_1_3 = ref('')
                            // Template
                            <xmv-row>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker ref="date_1_1" size="small"></xmv-date-picker>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker ref="date_1_1"></xmv-date-picker>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker ref="date_1_1" size="large"></xmv-date-picker>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_2 =    
                        `
                            // JS
                            const date_2_1 = ref('')
                            const date_2_2 = ref('2022-07')
                            // Template
                            <xmv-row>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker v-model="date_2_1" type="month"></xmv-date-picker>
                                </xmv-col>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker v-model="date_2_2" type="month"></xmv-date-picker>
                                </xmv-col>
                            </xmv-row>
                        `
        let code_3 =    
                        `
                            // JS
                            const date_3_1 = ref([])
                            const date_3_2 = ref(['2022-06-01' ,'2023-07-01'])
                            // Template
                            <xmv-row>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker v-model="date_3_1" type="daterange"></xmv-date-picker>
                                </xmv-col>
                            </xmv-row>
                            <xmv-row>
                                <xmv-col :span="7" :offset="1">
                                    <xmv-date-picker v-model="date_3_2" type="daterange"></xmv-date-picker>
                                </xmv-col>
                            </xmv-row>
                        `
        return {date_1_1 ,date_1_2 ,date_1_3 ,date_2_1,date_2_2,date_3_1,date_3_2,
                date_4_1 ,date_4_2,
                code_1 ,code_2 ,code_3}
    }
})
</script>

<style lang="" scoped></style>
