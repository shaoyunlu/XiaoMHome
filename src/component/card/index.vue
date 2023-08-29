<template>
    <h1>Card 卡片</h1>
    <p>将信息聚合在卡片容器中展示。</p>
    <h2>基础用法</h2>
    <p>卡片包含标题，内容以及操作区域。</p>
    <p text="sm"><p>Card 组件由 <code>header</code> 和 <code>body</code> 组成。 
    <code>header</code> 是可选的，其内容取决于一个具名的 slot。</p></p>
    <xmv-code>
        <xmv-card>
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <xmv-button class="button" text>Operation button</xmv-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </xmv-card>
    </xmv-code>
    <h2>简单卡片</h2>
    <p>卡片可以只有内容区域。</p>
    <xmv-code>
        <xmv-card>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </xmv-card>
    </xmv-code>
    <h2>带有阴影效果的卡片</h2>
    <p>你可以定义什么时候展示卡片的阴影效果。</p>
    <p text="sm"><p>通过 <code>shadow</code> 属性设置卡片阴影出现的时机。 该属性的值可以是：
        <code>always</code>、<code>hover</code> 或 <code>never</code>。</p></p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="7">
                <xmv-card shadow="always">
                    Always
                </xmv-card>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-card shadow="hover">
                    Hover
                </xmv-card>
            </xmv-col>
            <xmv-col :span="7" :offset="1">
                <xmv-card shadow="never">
                    Never
                </xmv-card>
            </xmv-col>
        </xmv-row>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        return {}
    }
})
</script>

<style lang="" scoped></style>
