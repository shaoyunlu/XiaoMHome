<template>
    <h1>Image 图片</h1>
    <p>图片容器，在保留所有原生 img 的特性下，支持加载失败、图片预览等</p>
    <p text="sm"><p>可通过<code>fit</code>确定图片如何适应到容器框，同原生 
        <a>object-fit</a>。</p>
    </p>
    <xmv-code :code="code_1">
        <div class="demo-image">
            <div v-for="fit in fits" :key="fit" class="block">
                <span class="demonstration">{{ fit }}</span>
                <xmv-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
            </div>
        </div>
    </xmv-code>
    <h2>加载失败</h2>
    <p text="sm"><p>可通过<code>slot = error</code>可自定义加载失败内容</p></p>
    <xmv-code :code="code_2">
        <div class="demo-image__error">
            <div class="block">
                <span class="demonstration">Default</span>
                <xmv-image />
            </div>
            <div class="block">
            <span class="demonstration">Custom</span>
                <xmv-image>
                    <template #error>
                    <div class="image-slot">
                        <xmv-icon name="pic"></xmv-icon>
                    </div>
                    </template>
                </xmv-image>
            </div>
        </div>
    </xmv-code>
    <h2>图片预览</h2>
    <p text="sm"><p>可通过 <code>previewSrcList</code> 开启预览大图的功能。 默认初始位置为 0。</p></p>
    <xmv-code :code="code_3">
        <div class="demo-image__preview">
            <xmv-image
            style="width: 100px; height: 100px"
            :src="url"
            :preview-src-list="srcList"
            fit="cover"/>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
        const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        const srcList = [
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]

        let code_1 =
                        `
                            // JS
                            const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
                            const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                            // Template
                            <div class="demo-image">
                                <div v-for="fit in fits" :key="fit" class="block">
                                    <span class="demonstration">{{ fit }}</span>
                                    <xmv-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
                                </div>
                            </div>
                        `
        let code_2 =
                        `
                            <div class="demo-image__error">
                                <div class="block">
                                    <span class="demonstration">Default</span>
                                    <xmv-image />
                                </div>
                                <div class="block">
                                <span class="demonstration">Custom</span>
                                    <xmv-image>
                                        <template #error>
                                        <div class="image-slot">
                                            <xmv-icon name="pic"></xmv-icon>
                                        </div>
                                        </template>
                                    </xmv-image>
                                </div>
                            </div>
                        `
        let code_3 =
                        `
                            // JS
                            const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                            const srcList = [
                                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                            ]
                            // Template
                            <div class="demo-image__preview">
                                <xmv-image
                                style="width: 100px; height: 100px"
                                :src="url"
                                :preview-src-list="srcList"
                                fit="cover"/>
                            </div>
                        `
        return {fits ,url ,srcList ,code_1 ,code_2 ,code_3}
    }
})
</script>

<style scoped>
    .demo-image .block {
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--xmv-border-color);
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
    }
    .demo-image .block:last-child {
        border-right: none;
    }
    .demo-image .demonstration {
        display: block;
        color: var(--xmv-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
    }

    .demo-image__error .block {
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--xmv-border-color);
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
        vertical-align: top;
    }
.demo-image__error .demonstration {
  display: block;
  color: var(--xmv-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__error .xmv-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--xmv-fill-color-light);
  color: var(--xmv-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .xmv-icon {
  font-size: 30px;
}
</style>
