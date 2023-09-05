<template>
    <h1>Collapse 折叠面板</h1>
    <p>通过折叠面板收纳内容区域</p>
    <h2>基础用法</h2>
    <p>可同时展开多个面板，面板之间不影响</p>
    <xmv-code :code="code_1">
        <xmv-collapse v-model="collapse1">
            <xmv-collapse-item title="面板信息1" name="1">
                <div>
                    这是面板信息1的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息2" name="2">
                <div>
                    这是面板信息2的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息3" name="3">
                <div>
                Hello World !
                </div>
                <div>
                Hello JS !
                </div>
            </xmv-collapse-item>
        </xmv-collapse>
    </xmv-code>
    <h2>手风琴效果</h2>
    <p>每次只能展开一个面板</p>
    <p text="sm"><p>通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。</p></p>
    <xmv-code :code="code_2">
        <xmv-collapse accordion v-model="collapse2">
            <xmv-collapse-item title="面板信息1" name="1">
                <div>
                    这是面板信息1的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息2" name="2">
                <div>
                    这是面板信息2的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息3" name="3">
                <div>
                Hello World !
                </div>
                <div>
                Hello JS !
                </div>
            </xmv-collapse-item>
        </xmv-collapse>
    </xmv-code>
    <h2>自定义面板标题</h2>
    <p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <xmv-code :code="code_3">
        <xmv-collapse v-model="collapse3">
            <xmv-collapse-item name="1">
                <template #title>
                    <span>面板信息1</span><xmv-icon name="infoFilled"></xmv-icon>
                </template>
                <div>
                    这是面板信息1的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息2" name="2">
                <div>
                    这是面板信息2的内容
                </div>
            </xmv-collapse-item>
            <xmv-collapse-item title="面板信息3" name="3">
                <div>
                Hello World !
                </div>
                <div>
                Hello JS !
                </div>
            </xmv-collapse-item>
        </xmv-collapse>
    </xmv-code>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const collapse1 = ref('1')
        const collapse2 = ref('2')
        const collapse3 = ref('1')

        let code_1 =
                        `
                            // JS
                            const collapse1 = ref(1)
                            // Template
                            <xmv-collapse v-model="collapse1">
                                <xmv-collapse-item title="面板信息1" name="1">
                                    <div>
                                    Consistent with real life: in line with the process and logic of real
                                    life, and comply with languages and habits that the users are used to;
                                    </div>
                                    <div>
                                    Consistent within interface: all elements should be consistent, such
                                    as: design style, icons and texts, position of elements, etc.
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息2" name="2">
                                    <div>
                                    Consistent with real life: in line with the process and logic of real
                                    life, and comply with languages and habits that the users are used to;
                                    </div>
                                    <div>
                                    Consistent within interface: all elements should be consistent, such
                                    as: design style, icons and texts, position of elements, etc.
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息3" name="3">
                                    <div>
                                    Hello World !
                                    </div>
                                    <div>
                                    Hello JS !
                                    </div>
                                </xmv-collapse-item>
                            </xmv-collapse>
                        `
        let code_2 =
                        `
                            // JS
                            const collapse2 = ref(2)
                            // Template
                            <xmv-collapse accordion v-model="collapse2">
                                <xmv-collapse-item title="面板信息1" name="1">
                                    <div>
                                        这是面板信息1的内容
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息2" name="2">
                                    <div>
                                        这是面板信息2的内容
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息3" name="3">
                                    <div>
                                    Hello World !
                                    </div>
                                    <div>
                                    Hello JS !
                                    </div>
                                </xmv-collapse-item>
                            </xmv-collapse>
                        `
        let code_3 =
                        `
                            // JS
                            const collapse3 = ref(1)
                            // Template
                            <xmv-collapse v-model="collapse3">
                                <xmv-collapse-item name="1">
                                    <template #title>
                                        <span>面板信息1</span><xmv-icon name="infoFilled"></xmv-icon>
                                    </template>
                                    <div>
                                        这是面板信息1的内容
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息2" name="2">
                                    <div>
                                        这是面板信息2的内容
                                    </div>
                                </xmv-collapse-item>
                                <xmv-collapse-item title="面板信息3" name="3">
                                    <div>
                                    Hello World !
                                    </div>
                                    <div>
                                    Hello JS !
                                    </div>
                                </xmv-collapse-item>
                            </xmv-collapse>
                        `
        return {collapse1,collapse2,collapse3 ,code_1 ,code_2 ,code_3}
    }
})
</script>

<style lang="" scoped></style>
