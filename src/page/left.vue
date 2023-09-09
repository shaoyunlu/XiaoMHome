<template>
    <div class="sidebar">
    <xmv-scrollbar >
        <aside>
            <div class="sidebar-groups">
                <section class="sidebar-group">
                    <p class="sidebar-group__title">Basic 基础组件</p>
                    <a href="#/button" class="link"><p class="link-text">Button 按钮</p></a>
                    <a href="#/layout" class="link"><p class="link-text">Layout 布局</p></a>
                    <a href="#/icon" class="link"><p class="link-text">Icon 图标</p></a>
                    <a href="#/scrollbar" class="link"><p class="link-text">Scrollbar 滚动条</p></a>
                    <a href="#/space" class="link"><p class="link-text">Space 间距</p></a>
                </section>
                <section class="sidebar-group">
                    <p class="sidebar-group__title">Form 表单组件</p>
                    <a href="#/checkbox" class="link">
                        <p class="link-text">Checkbox 多选框</p>
                    </a>
                    <a href="#/colorPicker" class="link">
                        <p class="link-text">Color Picker 取色器</p>
                    </a>
                    <a href="#/datePicker" class="link">
                        <p class="link-text">Date Picker 日期选择器</p>
                    </a>
                    <a href="#/input" class="link">
                        <p class="link-text">Input 输入框</p>
                    </a>
                    <a href="#/inputNumber" class="link">
                        <p class="link-text">Input Number 输入框</p>
                    </a>
                    <a href="#/radio" class="link">
                        <p class="link-text">Radio 单选框</p>
                    </a>
                    <a href="#/select" class="link">
                        <p class="link-text">Select 选择器</p>
                    </a>
                    <a href="#/slider" class="link">
                        <p class="link-text">Slider 滑块</p>
                    </a>
                    <a href="#/switch" class="link">
                        <p class="link-text">Switch 开关</p>
                    </a>
                    <a href="#/timePicker" class="link">
                        <p class="link-text">Time Picker 时间选择器</p>
                    </a>
                    <a href="#/upload" class="link">
                        <p class="link-text">Upload 上传</p>
                    </a>
                </section>
                <section class="sidebar-group">
                    <p class="sidebar-group__title">Data 数据展示</p>
                    <a href="#/badge" class="link">
                        <p class="link-text">Badge 徽章</p>
                    </a>
                    <a href="#/card" class="link">
                        <p class="link-text">Card 卡片</p>
                    </a>
                    <a href="#/carousel" class="link">
                        <p class="link-text">Carousel 走马灯</p>
                    </a>
                    <a href="#/collapse" class="link">
                        <p class="link-text">Collapse 折叠面板</p>
                    </a>
                    <a href="#/descriptions" class="link">
                        <p class="link-text">Descriptions 描述列表</p>
                    </a>
                    <a href="#/empty" class="link">
                        <p class="link-text">Empty 空状态</p>
                    </a>
                    <a href="#/image" class="link">
                        <p class="link-text">Image 图片</p>
                    </a>
                    <a href="#/pagination" class="link">
                        <p class="link-text">Pagination 分页</p>
                    </a>
                </section>
            </div>
        </aside>
    </xmv-scrollbar>
    </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {addEvent ,removeClass ,addClass} from 'xiaomeng-dom-util'
import { useRouter } from 'vue-router';
export default defineComponent({
    name:"",
    setup(props ,context) {

        onMounted(()=>{

            const router = useRouter();

            let linkTexts = document.querySelectorAll('.link')

            router.beforeEach((to, from, next) => {
                // 在这里执行你的代码
                removeClass(linkTexts ,'active')
                let el = document.querySelector('[href="'+to.href+'"]')
                addClass(el ,'active')
                next();
            })
        })

        return {}
    }
})
</script>

<style lang="" scoped></style>
