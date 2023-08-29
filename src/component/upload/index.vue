<template>
    <h1>Upload 上传</h1>
    <p>通过点击或者拖拽上传文件。</p>
    <h2>基础用法</h2>
    <p text="sm"><p>通过 <code>slot</code> 你可以传入自定义的上传按钮类型和文字提示。</p></p>
    <xmv-code :code="code_1">
        <xmv-upload :file-list="fileList1">
            <xmv-button type="primary">Click to upload</xmv-button>
            <template #tip>
                <div class="xmv-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
        </xmv-upload>
    </xmv-code>
    <h2>数量限制</h2>
    <p text="sm">通过设置 <code>limit</code> 属性来限制文件上传数量，超出数量时，默认会将第一个文件替换掉。</p>
    <xmv-code :code="code_2">
        <xmv-upload :file-list="fileList2" :limit="3">
            <xmv-button type="primary">Click to upload</xmv-button>
            <template #tip>
                <div class="xmv-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
        </xmv-upload>
    </xmv-code>
    <h2>文件校验</h2>
    <p text="sm">设置 <code>before-upload</code> 属性，该属性接受一个函数，
        返回值可以为 <code>Boolean</code> 或 <code>Promise</code> 。
        只有在返回为 <code>true</code> 或者 <code>resove</code> 的时候，文件才会上传。</p>
    <xmv-code :code="code_6">
        <xmv-upload :file-list="fileList6" :before-upload="beforeUpload">
            <xmv-button type="primary">Click to upload</xmv-button>
            <template #tip>
                <div class="xmv-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
        </xmv-upload>
    </xmv-code>
    <h2>照片墙</h2>
    <p>使用 <code>list-type</code> 属性来设定文件列表的样式。</p>
    <xmv-code :code="code_3">
        <xmv-upload :file-list="fileList3" list-type="picture-card">
            <xmv-icon name="plus"></xmv-icon>
        </xmv-upload>
    </xmv-code>
    <h2>图片列表缩略图</h2>
    <xmv-code :code="code_4">
        <xmv-upload :file-list="fileList4" list-type="picture">
            <xmv-button type="primary">Click to upload</xmv-button>
        </xmv-upload>
    </xmv-code>
    <h2>拖拽上传</h2>
    <p>你可以将文件拖拽到特定区域以进行上传。</p>
    <xmv-code :code="code_5">
        <xmv-upload :file-list="fileList5" drag>
            <xmv-icon name="uploadFilled" class="xmv-icon--upload"></xmv-icon>
            <div class="xmv-upload__text">
                Drop file here or <em>click to upload</em>
            </div>
        </xmv-upload>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import {formatBytes} from './utils'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const fileList1 = ref([])
        const fileList2 = ref([])
        const fileList3 = ref([])
        const fileList4 = ref([])
        const fileList5 = ref([])
        const fileList6 = ref([])

        const beforeUpload = (file)=>{
            let size = (file.size/1024).toFixed(2)
            return new Promise((resolve ,reject)=>{
                if (size < 500){
                    resolve()
                }else{
                    reject()
                }
            })
        }

        let code_1 = 
                        `
                            // JS
                            const fileList1 = ref([])
                            // Template
                            <xmv-upload :file-list="fileList1">
                                <xmv-button type="primary">Click to upload</xmv-button>
                                <template #tip>
                                    <div class="xmv-upload__tip">
                                        jpg/png files with a size less than 500KB.
                                    </div>
                                </template>
                            </xmv-upload>
                        `
        let code_2 = 
                        `
                            // JS
                            const fileList2 = ref([])
                            // Template
                            <xmv-upload :file-list="fileList2" :limit="3">
                                <xmv-button type="primary">Click to upload</xmv-button>
                                <template #tip>
                                    <div class="xmv-upload__tip">
                                        jpg/png files with a size less than 500KB.
                                    </div>
                                </template>
                            </xmv-upload>
                        `
        let code_3 = 
                        `
                            // JS
                            const fileList3 = ref([])
                            // Template
                            <xmv-upload :file-list="fileList3" list-type="picture-card">
                                <xmv-icon name="plus"></xmv-icon>
                            </xmv-upload>
                        `
        let code_4 =
                        `
                            // JS
                            const fileList4 = ref([])
                            // Template
                            <xmv-upload :file-list="fileList4" list-type="picture">
                                <xmv-button type="primary">Click to upload</xmv-button>
                            </xmv-upload>
                        `
        let code_5 =
                        `
                            // JS
                            const fileList5 = ref([])
                            // Template
                            <xmv-upload :file-list="fileList5" drag>
                                <xmv-icon name="uploadFilled" class="xmv-icon--upload"></xmv-icon>
                                <div class="xmv-upload__text">
                                    Drop file here or <em>click to upload</em>
                                </div>
                            </xmv-upload>
                        `
        let code_6 =
                        `
                            // JS
                            const fileList6 = ref([])
                            const beforeUpload = (file)=>{
                                let size = (file.size/1024).toFixed(2)
                                return new Promise((resolve ,reject)=>{
                                    if (size < 500){
                                        resolve()
                                    }else{
                                        reject()
                                    }
                                })
                            }
                            // Template
                            <xmv-upload :file-list="fileList6" :before-upload="beforeUpload">
                                <xmv-button type="primary">Click to upload</xmv-button>
                                <template #tip>
                                    <div class="xmv-upload__tip">
                                        jpg/png files with a size less than 500KB.
                                    </div>
                                </template>
                            </xmv-upload>
                        `

        return {fileList1,fileList2,fileList3,fileList4,fileList5,fileList6,
                beforeUpload,code_1,code_2,code_3,code_4,code_5,code_6}
    }
})
</script>

<style lang="" scoped></style>
