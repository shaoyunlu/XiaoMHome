<template>
    <h1>Icon 图标</h1>
    <p>XMV 提供了一套常用的图标集合。</p>
    <h2>使用方法</h2>
    <ul>
        <li>内置了一套常用的图标</li>
        <li>导入其他图标</li>
    </ul>
    <h2>内置图标</h2>
    <div class="demo-icon-item">
        <div class="demo-icon-title">以字母先后顺序进行展示</div>
        <pre style="font-size: 14px;margin: 0;">
            <code class="language-javascript" 
                style="display: block;margin-left:-100px;margin-top: -30px;margin-bottom: -60px;">
                {{ `<xmv-icon name="arrowLeft"></xmv-icon>` }}
            </code>
        </pre>
        <ul class="demo-icon-list">
            <li class="icon-item" v-for="tmp in li_1">
                <span class="demo-svg-icon">
                    <xmv-icon :name="tmp"></xmv-icon>
                    <span class="icon-name">{{ capitalizeFirstLetter(tmp) }}</span>
                </span>
            </li>
        </ul>
    </div>
    <h2>导入其他图标</h2>
    <p>支持图标作为参数传到组件中来</p>

    <div class="demo-icon-item">
        <div class="demo-icon-title">以字母先后顺序进行展示</div>
        <pre style="font-size: 14px;margin: 0;">
            <code class="language-javascript" 
                style="display: block;margin-left:-100px;margin-top: -30px;margin-bottom: -60px;">
                {{ 
                    `
                        import userIcon from './userIcon.vue'
                        <xmv-icon :icon="userIcon"></xmv-icon>
                    ` 
                }}
            </code>
        </pre>
        <ul class="demo-icon-list">
            <li class="icon-item">
                <span class="demo-svg-icon">
                    <xmv-icon :icon="userIcon"></xmv-icon>
                    <span class="icon-name">userIcon</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import {defineComponent ,onMounted} from 'vue'
import userIcon from './userIcon.vue'
export default defineComponent({
    name:"",
    components:{userIcon},
    setup(props ,context) {
        const li_1 = [
            'arrowDown' ,'arrowLeft' ,'arrowRight' ,'arrowUp' , 'barChart','calendar' ,'check' ,'circleCheck',
            'circleClose' ,'clock' ,'close' ,'dArrowLeft' ,'dArrowRight' ,'dlt' ,'document',
            'download' ,'edit' ,'hide' ,'infoFilled' ,'loading' , 'lineChart','message' ,'minus',
            'download' ,'edit' ,'hide' ,'infoFilled' ,'loading' ,'message' ,'minus',
            'moreFilled' ,'plus' , 'pieChart','refresh' ,'search' ,'setting' ,'sort' ,'star',
            'successFilled' ,'upload' ,'vew' ,'warningFilled' ,'zoomIn' ,'zoomOut'
        ]

        const capitalizeFirstLetter = (str)=>{
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        onMounted(()=>{
            Prism.highlightAll()
        })

        return {li_1 ,capitalizeFirstLetter ,userIcon}
    }
})



</script>

<style scoped>
    .demo-icon-item {
        margin-top: 24px;
    }
    .demo-icon-title {
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
    }
    .demo-icon-list {
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        border-top: 1px solid var(--xmv-border-color);
        border-left: 1px solid var(--xmv-border-color);
        border-radius: 4px;
        display: grid;
        grid-template-columns: repeat(7,1fr);
    }
    .demo-icon-list .icon-item {
        text-align: center;
        color: var(--xmv-text-color-regular);
        height: 90px;
        font-size: 13px;
        border-right: 1px solid var(--xmv-border-color);
        border-bottom: 1px solid var(--xmv-border-color);
        transition: background-color var(--xmv-transition-duration);
    }
    .demo-icon-list .icon-item .demo-svg-icon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
    }
    .demo-icon-list .icon-item .demo-svg-icon .xmv-icon{
        font-size: 20px;
    }
    .demo-icon-list .icon-item .demo-svg-icon .icon-name {
        margin-top: 8px;
    }

    .demo-icon-list .icon-item:hover {
        background-color: var(--xmv-border-color-extra-light);
        color: var(--brand-color-light);
    }
</style>
