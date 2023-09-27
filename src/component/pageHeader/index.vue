<template>
    <h1>Page Header 页头</h1>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>
    <h2>基础用法</h2>
    <p>简单场景下的标准页头。</p>
    <xmv-code :code="code_1">
        <xmv-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </xmv-page-header>
    </xmv-code>
    <h2>自定义图标</h2>
    <p>默认图标可能无法满足您的需求，您可以通过设置<code>icon</code>属性来自定义图标，示例如下。</p>
    <xmv-code :code="code_2">
        <xmv-page-header @back="goBack" icon="arrowLeft">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </xmv-page-header>
    </xmv-code>
    <h2>面包屑导航</h2>
    <p>使用页头组件，您可以通过添加插槽 <code>breadcrumb</code> 来设置面包屑路由导航。</p>
    <xmv-code :code="code_3">
        <xmv-page-header @back="goBack" icon="arrowLeft">
            <template #breadcrumb>
                <xmv-breadcrumb separator="/">
                    <xmv-breadcrumb-item :to="{ path: './page-header.html' }">
                    homepage
                    </xmv-breadcrumb-item>
                    <xmv-breadcrumb-item
                    ><a href="./page-header.html">route 1</a></xmv-breadcrumb-item
                    >
                    <xmv-breadcrumb-item>route 2</xmv-breadcrumb-item>
                </xmv-breadcrumb>
            </template>
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </xmv-page-header>
    </xmv-code>
    <h2>额外操作部分</h2>
    <p>头部可能会变得很复杂，您可以在头部添加更多的区块，以允许丰富的交互。</p>
    <xmv-code :code="code_4">
        <xmv-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
            <template #extra>
                <div class="flex items-center">
                    <xmv-button>Print</xmv-button>
                    <xmv-button type="primary" class="ml-2">Edit</xmv-button>
                </div>
            </template>
        </xmv-page-header>
    </xmv-code>
    <h2>主要内容</h2>
    <p>有时我们想让页头显示一些协同响应内容，我们可以使用 <code>default</code> 插槽。</p>
    <xmv-code :code="code_5">
        <xmv-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
            <div class="mt-4 text-sm font-bold">
                Your additional content can be added with default slot, You may put as
                many content as you want here.
            </div>
        </xmv-page-header>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {

        const code_1 =
                        `
                            <xmv-page-header @back="goBack">
                                <template #content>
                                    <span class="text-large font-600 mr-3"> Title </span>
                                </template>
                            </xmv-page-header>
                        `
        const code_2 =
                        `
                            <xmv-page-header @back="goBack" icon="arrowLeft">
                                <template #content>
                                    <span class="text-large font-600 mr-3"> Title </span>
                                </template>
                            </xmv-page-header>
                        `
        const code_3 =
                        `
                            <xmv-page-header @back="goBack" icon="arrowLeft">
                                <template #breadcrumb>
                                    <xmv-breadcrumb separator="/">
                                        <xmv-breadcrumb-item :to="{ path: './page-header.html' }">
                                        homepage
                                        </xmv-breadcrumb-item>
                                        <xmv-breadcrumb-item
                                        ><a href="./page-header.html">route 1</a></xmv-breadcrumb-item
                                        >
                                        <xmv-breadcrumb-item>route 2</xmv-breadcrumb-item>
                                    </xmv-breadcrumb>
                                </template>
                                <template #content>
                                    <span class="text-large font-600 mr-3"> Title </span>
                                </template>
                            </xmv-page-header>
                        `
        const code_4 =
                        `
                            <xmv-page-header @back="goBack">
                                <template #content>
                                    <span class="text-large font-600 mr-3"> Title </span>
                                </template>
                                <template #extra>
                                    <div class="flex items-center">
                                        <xmv-button>Print</xmv-button>
                                        <xmv-button type="primary" class="ml-2">Edit</xmv-button>
                                    </div>
                                </template>
                            </xmv-page-header>
                        `
        const code_5 =
                        `
                            <xmv-page-header @back="goBack">
                                <template #content>
                                    <span class="text-large font-600 mr-3"> Title </span>
                                </template>
                                <div class="mt-4 text-sm font-bold">
                                    Your additional content can be added with default slot, You may put as
                                    many content as you want here.
                                </div>
                            </xmv-page-header>
                        `
        const goBack = ()=>{

        }
        return {code_1,code_2,code_3,code_4,code_5,goBack}
    }
})
</script>

<style lang="less" scoped>
    .font-bold {
        font-weight: 700;
    }

    .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
    .mt-4 {
        margin-top: 1rem;
    }
</style>
