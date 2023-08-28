<template>
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h2>基础用法</h2>
    <p text="sm">
        <p>绑定 <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量。 
        可以使用 <code>--xmv-switch-on-color</code> 属性与 <code>--xmv-switch-off-color</code> 属性来设置开关的背景色。</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-switch v-model="value1_1" style="margin-right:10px"/>
        <xmv-switch
            v-model="value1_2"
            style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949"/>
    </xmv-code>
    <h2>尺寸</h2>
    <p test="sm"><p>通过设置 <code>size</code> 属性，可调整组件大小。</p></p>
    <xmv-code :code="code_2">
        <div>
            <xmv-switch v-model="value2_1" size="large" 
                active-text="open" inactive-text="close"></xmv-switch>
        </div>
        <div>
            <xmv-switch v-model="value2_2" 
                active-text="open" inactive-text="close"></xmv-switch>
        </div>
        <div>
            <xmv-switch v-model="value2_3" size="small" 
                active-text="open" inactive-text="close"></xmv-switch>
        </div>
    </xmv-code>
    <h2>文字描述</h2>
    <p>使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述。 
        使用 <code>inline-prompt</code> 属性来控制文本是否显示在点内。</p>
    <xmv-code :code="code_3">
        <xmv-switch v-model="value3_1" active-text="Pay by month" inactive-text="Pay by year"/>
        <br />
        <xmv-switch v-model="value3_2" style="--xmv-switch-on-color: #13ce66; 
                    --xmv-switch-off-color: #ff4949"
                    active-text="Pay by month"
                    inactive-text="Pay by year"/>
        <br />
        <xmv-switch v-model="value3_3" inline-prompt active-text="是" inactive-text="否"/>
        <xmv-switch
            v-model="value3_4" inline-prompt
            style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949;margin-left:10px"
            active-text="Y"
            inactive-text="N"
        />
        <xmv-switch
            v-model="value3_5"
            width="60px"
            inline-prompt
            active-text="超出省略"
            inactive-text="超出省略"
            style="margin-left:10px"
        />
        <xmv-switch
            v-model="value3_6"
            inline-prompt
            style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949;margin-left:10px"
            active-text="完整展示多个内容"
            inactive-text="多个内容"
        />
    </xmv-code>
    <h2>禁用状态</h2>
    <p text="sm"><p>设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。</p></p>
    <xmv-code :code="code_4">
        <xmv-switch v-model="value4_1" disabled style="margin-right:10px"></xmv-switch>
        <xmv-switch v-model="value4_2"></xmv-switch>
    </xmv-code>
    <h2>加载状态</h2>
    <p text="sm"><p>设置<code>loading</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即加载中状态。</p></p>
    <xmv-code :code="code_5">
        <xmv-switch :loading="loadingRef" v-model="value5"></xmv-switch>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const value1_1 = ref(true)
        const value1_2 = ref(true)

        const value2_1 = ref(true)
        const value2_2 = ref(true)
        const value2_3 = ref(true)

        const value3_1 = ref(true)
        const value3_2 = ref(true)
        const value3_3 = ref(true)
        const value3_4 = ref(true)
        const value3_5 = ref(true)
        const value3_6 = ref(true)

        const value4_1 = ref(true)
        const value4_2 = ref(true)

        const value5 = ref(true)
        const loadingRef = ref(true)

        let code_1 = 
                        `
                            // JS
                            const value1_1 = ref(true)
                            const value1_2 = ref(true)
                            // Template
                            <xmv-switch v-model="value1_1" style="margin-right:10px"/>
                            <xmv-switch
                                v-model="value1_2"
                                style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949"/>
                        `
        let code_2 =
                        `
                            // JS
                            const value2_1 = ref(true)
                            const value2_2 = ref(true)
                            const value2_3 = ref(true)
                            // Template
                            <div>
                                <xmv-switch v-model="value2_1" size="large" 
                                    active-text="open" inactive-text="close"></xmv-switch>
                            </div>
                            <div>
                                <xmv-switch v-model="value2_2" 
                                    active-text="open" inactive-text="close"></xmv-switch>
                            </div>
                            <div>
                                <xmv-switch v-model="value2_3" size="small" 
                                    active-text="open" inactive-text="close"></xmv-switch>
                            </div>
                        `
        let code_3 =
                        `
                            // JS
                            const value3_1 = ref(true)
                            const value3_2 = ref(true)
                            const value3_3 = ref(true)
                            const value3_4 = ref(true)
                            const value3_5 = ref(true)
                            const value3_6 = ref(true)
                            // Template
                            <xmv-switch v-model="value3_1" active-text="Pay by month" inactive-text="Pay by year"/>
                            <br />
                            <xmv-switch v-model="value3_2" style="--xmv-switch-on-color: #13ce66; 
                                        --xmv-switch-off-color: #ff4949"
                                        active-text="Pay by month"
                                        inactive-text="Pay by year"/>
                            <br />
                            <xmv-switch v-model="value3_3" inline-prompt active-text="是" inactive-text="否"/>
                            <xmv-switch
                                v-model="value3_4" inline-prompt
                                style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949;margin-left:10px"
                                active-text="Y"
                                inactive-text="N"
                            />
                            <xmv-switch
                                v-model="value3_5"
                                width="60px"
                                inline-prompt
                                active-text="超出省略"
                                inactive-text="超出省略"
                                style="margin-left:10px"
                            />
                            <xmv-switch
                                v-model="value3_6"
                                inline-prompt
                                style="--xmv-switch-on-color: #13ce66; --xmv-switch-off-color: #ff4949;margin-left:10px"
                                active-text="完整展示多个内容"
                                inactive-text="多个内容"
                            />
                        `

        let code_4 = 
                        `
                            // JS
                            const value4_1 = ref(true)
                            const value4_2 = ref(true)
                            // Template
                            <xmv-switch v-model="value4_1" disabled style="margin-right:10px"></xmv-switch>
                            <xmv-switch v-model="value4_2"></xmv-switch>
                        `
        let code_5 =
                        `
                            // JS
                            const value5 = ref(true)
                            const loadingRef = ref(true)
                            // Template
                            <xmv-switch :loading="loadingRef" v-model="value5"></xmv-switch>
                        `
        return {value1_1 ,value1_2 ,value2_1 ,value2_2 ,value2_3,
                value3_1,value3_2,value3_3,value3_4,value3_5,value3_6,
                value4_1,value4_2,loadingRef,value5,
                code_1,code_2,code_3,code_4,code_5}
    }
})
</script>

<style lang="" scoped></style>
