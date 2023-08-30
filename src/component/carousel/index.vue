<template>
    <h1>Carousel 走马灯</h1>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h2>基础用法</h2>
    <p text="sm"><p>结合使用 <code>xmv-carousel</code> 和 <code>xmv-carousel-item</code> 
        标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 <code>xmv-carousel-item</code> 标签内。 
        默认情况下，点击底部的指示器时就会触发切换。</p></p>
    <xmv-code>
        <xmv-carousel>
            <xmv-carousel-item v-for="item in 4" :key="item">
                <div class="center">
                    <h3>{{ item -1 }}</h3>
                </div>
            </xmv-carousel-item>
        </xmv-carousel>
    </xmv-code>
    <h2>指示器</h2>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <p text="sm"><p><code>indicator-position</code> 属性定义了指示器的位置。 
        默认情况下，它会显示在走马灯内部，设置为 <code>outside</code> 则会显示在外部；
        设置为 <code>none</code> 则不会显示指示器。</p></p>
    <xmv-code>
        <xmv-carousel indicator-position="outside">
            <xmv-carousel-item v-for="item in 4" :key="item">
                <div class="center">
                    <h3>{{ item -1 }}</h3>
                </div>
            </xmv-carousel-item>
        </xmv-carousel>
    </xmv-code>
    <h2>卡片模式</h2>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <p text="sm"><p>将 <code>type</code> 属性设置为 <code>card</code> 即可启用卡片模式。 
    从交互上来说，卡片模式和一般模式的最大区别在于，卡片模式可以通过直接点击两侧的幻灯片进行切换。</p></p>
    <xmv-code>
        <xmv-carousel indicator-position="outside" type="card">
            <xmv-carousel-item v-for="item in 4" :key="item">
                <div class="center">
                    <h3>{{ item -1 }}</h3>
                </div>
            </xmv-carousel-item>
        </xmv-carousel>
    </xmv-code>
    <h2>垂直排列</h2>
    <p>默认情况下，方向 <code>direction</code> 为 水平 <code>horizontal</code>。 
        通过设置 <code>direction</code> 为 <code>vertical</code> 来让走马灯在垂直方向上显示。</p>
    <xmv-code>
        <xmv-carousel direction="vertical">
            <xmv-carousel-item v-for="item in 4" :key="item">
                <div class="center">
                    <h3>{{ item -1 }}</h3>
                </div>
            </xmv-carousel-item>
        </xmv-carousel>
        <br>
        <br>
        <xmv-carousel direction="vertical" type="card">
            <xmv-carousel-item v-for="item in 4" :key="item">
                <div class="center">
                    <h3>{{ item -1 }}</h3>
                </div>
            </xmv-carousel-item>
        </xmv-carousel>
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

<style lang="less" scoped>
    .center{
        width : 100%;
        height : 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
