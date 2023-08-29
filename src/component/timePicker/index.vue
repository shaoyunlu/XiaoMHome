<template>
    <h1>TimePicker 时间选择器</h1>
    <p>用于选择或输入日期</p>
    <h2>任意时间点</h2>
    <p>可以选择任意时间</p>
    <xmv-code :code="code_1">
        <xmv-time-picker v-model="value1" />
    </xmv-code>
    <h2>限制时间范围</h2>
    <p>您也可以限制时间选择范围。</p>
    <p text="sm"><p>通过 <code>disabledHours</code>，<code>disabledMinutes</code> 
            和 <code>disabledSeconds</code> 限制可选时间范围。,</p></p>
    <xmv-code :code="code_2">
        <xmv-time-picker v-model="value2"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"></xmv-time-picker>
    </xmv-code>
    <h2>任意时间范围</h2>
    <p>可选择任意的时间范围</p>
    <p text="sm"><p>添加<code>is-range</code>属性即可选择时间范围。</p></p>
    <xmv-code :code="code_3">
        <xmv-time-picker is-range v-model="value3"></xmv-time-picker>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref([])

        const disabledHours = ref([1,2,3,4,5,6])
        const disabledMinutes = ref([11,12,13,14,15,16])
        const disabledSeconds = ref([17,18,19,20,21,22,23])

        let code_1 = 
                        `
                            // JS
                            const value1 = ref('')
                            // Template
                            <xmv-time-picker v-model="value1" />
                        `
        let code_2 = 
                        `
                            // JS
                            const value2 = ref('')
                            const disabledHours = ref([1,2,3,4,5,6])
                            const disabledMinutes = ref([11,12,13,14,15,16])
                            const disabledSeconds = ref([17,18,19,20,21,22,23])
                            // Template
                            <xmv-time-picker v-model="value2"
                                :disabled-hours="disabledHours"
                                :disabled-minutes="disabledMinutes"
                                :disabled-seconds="disabledSeconds"></xmv-time-picker>
                        `
        let code_3 = 
                        `
                            // JS
                            const value3 = ref([])
                            // Template
                            <xmv-time-picker is-range v-model="value3"></xmv-time-picker>
                        `

        return {value1 ,value2 ,value3,
                disabledHours ,disabledMinutes ,disabledSeconds,
                code_1,code_2,code_3}
    }
})
</script>

<style lang="" scoped></style>
