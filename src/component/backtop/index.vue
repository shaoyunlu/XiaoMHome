<template>
    <h1>Backtop 回到顶部</h1>
    <p>返回页面顶部的操作按钮。</p>
    <h2>基础用法</h2>
    <p>通过滑动来查看容器右下角的按钮。</p>
    <p text="sm">
        <p>设置 <code>visibilityHeight</code> ，超过设定值时，会显示置顶图标。</p>
    </p>
    <xmv-code :code="code_1">
        Scroll down to see the bottom-right button.
        <xmv-backtop :right="100" :bottom="100" />
    </xmv-code>
    <h2>自定义内容</h2>
    <p>显示区域被固定为 40px * 40px 的区域，其中的内容可支持自定义。</p>
    <xmv-code :code="code_2">
        Scroll down to see the bottom-right button.
        <xmv-backtop :bottom="100">
            <div
            style="
                height: 100%;
                width: 100%;
                background-color: var(--xmv-bg-color-overlay);
                box-shadow: var(--xmv-box-shadow-lighter);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            "
            >
            UP
            </div>
        </xmv-backtop>
    </xmv-code>
    <div style="height : 1000px"></div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const code_1 =
                        `
                            Scroll down to see the bottom-right button.
                            <xmv-backtop :right="100" :bottom="100" />
                        `
        const code_2 =
                        `
                            Scroll down to see the bottom-right button.
                            <xmv-backtop :bottom="100">
                                <div
                                style="
                                    height: 100%;
                                    width: 100%;
                                    background-color: var(--xmv-bg-color-overlay);
                                    box-shadow: var(--xmv-box-shadow-lighter);
                                    text-align: center;
                                    line-height: 40px;
                                    color: #1989fa;
                                "
                                >
                                UP
                                </div>
                            </xmv-backtop>
                        `
        return {code_1,code_2}
    }
})
</script>

<style lang="" scoped></style>
