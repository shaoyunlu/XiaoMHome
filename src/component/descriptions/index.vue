<template>
    <h1>Descriptions 描述列表</h1>
    <p>列表形式展示多个字段。</p>
    <h2>基础用法</h2>
    <xmv-code :code="code_1">
        <xmv-descriptions title="不带边框">
            <xmv-descriptions-item>
                <template #title>
                    姓名
                </template>
                张三
            </xmv-descriptions-item>
            <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
            <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
            <xmv-descriptions-item label="学历">
                <xmv-tag>本科</xmv-tag>
            </xmv-descriptions-item>
            <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
        </xmv-descriptions>
        <br><br>
        <xmv-descriptions title="带边框" border>
            <xmv-descriptions-item>
                <template #title>
                    姓名
                </template>
                张三
            </xmv-descriptions-item>
            <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
            <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
            <xmv-descriptions-item label="学历">
                <xmv-tag>本科</xmv-tag>
            </xmv-descriptions-item>
            <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
        </xmv-descriptions>
    </xmv-code>
    <h2>不同尺寸</h2>
    <xmv-code :code="code_2">
        <xmv-radio-group v-model="size">
            <xmv-radio label="large">Large</xmv-radio>
            <xmv-radio label="normal">Default</xmv-radio>
            <xmv-radio label="small">Small</xmv-radio>
        </xmv-radio-group>
        <br><br>
        <xmv-descriptions title="带边框" :size="size" border>
            <xmv-descriptions-item>
                <template #title>
                    姓名
                </template>
                张三
            </xmv-descriptions-item>
            <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
            <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
            <xmv-descriptions-item label="学历">
                <xmv-tag>本科</xmv-tag>
            </xmv-descriptions-item>
            <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
        </xmv-descriptions>
    </xmv-code>
    <h2>垂直列表</h2>
    <xmv-code :code="code_3">
        <xmv-radio-group v-model="size_2">
            <xmv-radio label="large">Large</xmv-radio>
            <xmv-radio label="normal">Default</xmv-radio>
            <xmv-radio label="small">Small</xmv-radio>
        </xmv-radio-group>
        <br><br>
        <xmv-descriptions title="带边框" :size="size_2" border direction="vertical">
            <xmv-descriptions-item>
                <template #title>
                    姓名
                </template>
                张三
            </xmv-descriptions-item>
            <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
            <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
            <xmv-descriptions-item label="学历">
                <xmv-tag>本科</xmv-tag>
            </xmv-descriptions-item>
            <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
        </xmv-descriptions>
    </xmv-code>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const size = ref('normal')
        const size_2 = ref('normal')

        let code_1 =
                        `
                            <xmv-descriptions title="不带边框">
                                <xmv-descriptions-item>
                                    <template #title>
                                        姓名
                                    </template>
                                    张三
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
                                <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
                                <xmv-descriptions-item label="学历">
                                    <xmv-tag>本科</xmv-tag>
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
                            </xmv-descriptions>
                            <br><br>
                            <xmv-descriptions title="带边框" border>
                                <xmv-descriptions-item>
                                    <template #title>
                                        姓名
                                    </template>
                                    张三
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
                                <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
                                <xmv-descriptions-item label="学历">
                                    <xmv-tag>本科</xmv-tag>
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
                            </xmv-descriptions>
                        `
        let code_2 =
                        `
                            // JS
                            const size = ref('normal')
                            // Template
                            <xmv-radio-group v-model="size">
                                <xmv-radio label="large">Large</xmv-radio>
                                <xmv-radio label="normal">Default</xmv-radio>
                                <xmv-radio label="small">Small</xmv-radio>
                            </xmv-radio-group>
                            <br><br>
                            <xmv-descriptions title="带边框" :size="size" border>
                                <xmv-descriptions-item>
                                    <template #title>
                                        姓名
                                    </template>
                                    张三
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
                                <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
                                <xmv-descriptions-item label="学历">
                                    <xmv-tag>本科</xmv-tag>
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
                            </xmv-descriptions>
                        `
        let code_3 =
                        `
                            // JS
                            const size_2 = ref('normal')
                            // Template
                            <xmv-radio-group v-model="size_2">
                                <xmv-radio label="large">Large</xmv-radio>
                                <xmv-radio label="normal">Default</xmv-radio>
                                <xmv-radio label="small">Small</xmv-radio>
                            </xmv-radio-group>
                            <br><br>
                            <xmv-descriptions title="带边框" :size="size_2" border>
                                <xmv-descriptions-item>
                                    <template #title>
                                        姓名
                                    </template>
                                    张三
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="性别">男</xmv-descriptions-item>
                                <xmv-descriptions-item label="身高">183</xmv-descriptions-item>
                                <xmv-descriptions-item label="学历">
                                    <xmv-tag>本科</xmv-tag>
                                </xmv-descriptions-item>
                                <xmv-descriptions-item label="兴趣">游泳</xmv-descriptions-item>
                            </xmv-descriptions>
                        `
        return {code_1,code_2,code_3,size,size_2}
    }
})
</script>

<style lang="" scoped></style>
