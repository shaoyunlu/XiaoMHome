<template>
    <xmv-scrollbar class="sidebar">
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
                </section>
            </div>
        </aside>
    </xmv-scrollbar>
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
