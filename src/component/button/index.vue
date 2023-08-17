<template>
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>

    <h2>基础用法</h2>
    <p text="sm">
        <p>使用 <code>type</code>、<code>plain</code>、<code>round</code> 和 <code>circle</code> 来定义按钮的样式。</p>
    </p>
    <xmv-code :code="code_1">
        <xmv-row>
                <xmv-col>
                    <xmv-button>Default</xmv-button>
                    <xmv-button type="primary">Primary</xmv-button>
                    <xmv-button type="success">Success</xmv-button>
                    <xmv-button type="info">Info</xmv-button>
                    <xmv-button type="warning">Warning</xmv-button>
                    <xmv-button type="danger">Danger</xmv-button>
                </xmv-col>
            </xmv-row>
            <xmv-row>
                <xmv-col>
                    <xmv-button plain>Plain</xmv-button>
                    <xmv-button type="primary" plain>Primary</xmv-button>
                    <xmv-button type="success" plain>Success</xmv-button>
                    <xmv-button type="info" plain>Info</xmv-button>
                    <xmv-button type="warning" plain>Warning</xmv-button>
                    <xmv-button type="danger" plain>Danger</xmv-button>
                </xmv-col>
            </xmv-row>
            <xmv-row>
                <xmv-col>
                    <xmv-button round>Round</xmv-button>
                    <xmv-button type="primary" round>Primary</xmv-button>
                    <xmv-button type="success" round>Success</xmv-button>
                    <xmv-button type="info" round>Info</xmv-button>
                    <xmv-button type="warning" round>Warning</xmv-button>
                    <xmv-button type="danger" round>Danger</xmv-button>
                </xmv-col>
            </xmv-row>
            <xmv-row>
                <xmv-col>
                    <xmv-button circle>
                        <xmv-icon name="search"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="primary" circle>
                        <xmv-icon name="edit"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="success" circle>
                        <xmv-icon name="check"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="info" circle>
                        <xmv-icon name="message"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="warning" circle>
                        <xmv-icon name="star"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="danger" circle>
                        <xmv-icon name="dlt"></xmv-icon>
                    </xmv-button>
                </xmv-col>
            </xmv-row>
    </xmv-code>

    <h2>禁用状态</h2>
    <p>你可以使用 <code>disabled</code> 属性来定义按钮是否被禁用。</p>
    <p text="sm">
        <p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值。</p>
    </p>
    <xmv-code :code="code_2">
        <xmv-row>
            <xmv-col>
                <xmv-button disabled>Default</xmv-button>
                <xmv-button type="primary" disabled>Primary</xmv-button>
                <xmv-button type="success" disabled>Success</xmv-button>
                <xmv-button type="info" disabled>Info</xmv-button>
                <xmv-button type="warning" disabled>Warning</xmv-button>
                <xmv-button type="danger" disabled>Danger</xmv-button>
            </xmv-col>
        </xmv-row>

        <xmv-row>
            <xmv-col>
                <xmv-button plain disabled>Default</xmv-button>
                <xmv-button plain type="primary" disabled>Primary</xmv-button>
                <xmv-button plain type="success" disabled>Success</xmv-button>
                <xmv-button plain type="info" disabled>Info</xmv-button>
                <xmv-button plain type="warning" disabled>Warning</xmv-button>
                <xmv-button plain type="danger" disabled>Danger</xmv-button>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>图标按钮</h2>
    <p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>
    <xmv-code :code="code_3">
        <xmv-row>
            <xmv-col>
                <xmv-button type="primary">
                    <xmv-icon name="edit"></xmv-icon>
                </xmv-button>
                <xmv-button type="primary">
                    <xmv-icon name="dlt"></xmv-icon>
                </xmv-button>
                <xmv-button type="primary" icon="search" iconPosition="left">Search</xmv-button>
                <xmv-button type="primary" icon="upload">Upload</xmv-button>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>按钮组</h2>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <p text="sm"><p>使用 <code>&lt;xmv-button-group&gt;</code> 对多个按钮分组。</p></p>
    <xmv-code :code="code_4">
        <xmv-row>
            <xmv-col :span="7">
                <xmv-button-group>
                    <xmv-button type="primary" icon="arrowLeft" iconPosition="left">上一页</xmv-button>
                    <xmv-button type="primary" icon="arrowRight">下一页</xmv-button>
                </xmv-button-group>
            </xmv-col>
            <xmv-col :span="10">
                <xmv-button-group>
                    <xmv-button type="primary">
                        <xmv-icon name="edit"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="primary">
                        <xmv-icon name="upload"></xmv-icon>
                    </xmv-button>
                    <xmv-button type="primary">
                        <xmv-icon name="dlt"></xmv-icon>
                    </xmv-button>
                </xmv-button-group>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>加载状态按钮</h2>
    <p>点击按钮来加载数据，并向用户反馈加载状态。</p>
    <xmv-code :code="code_5">
        <xmv-row>
            <xmv-col>
                <xmv-button loadingButton icon="loading" type="primary" 
                            :loading="btnLoading" @click="handleLoading">Loading</xmv-button>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>调整尺寸</h2>
    <p text="sm">
        <p>使用 <code>size</code> 属性额外配置尺寸，可使用 <code>large</code>和<code>small</code>两种值。</p>
    </p>
    <xmv-code :code="code_6">
        <xmv-row>
            <xmv-col>
                <xmv-button size="large">Large</xmv-button>
                <xmv-button>Default</xmv-button>
                <xmv-button size="small">Small</xmv-button>
                <xmv-button size="large" icon="search">Large</xmv-button>
                <xmv-button icon="search">Default</xmv-button>
                <xmv-button size="small" icon="search">Small</xmv-button>
            </xmv-col>
        </xmv-row>

        <xmv-row>
            <xmv-col>
                <xmv-button size="large" round>Large</xmv-button>
                <xmv-button round>Default</xmv-button>
                <xmv-button size="small" round>Small</xmv-button>
                <xmv-button size="large" icon="search" round>Large</xmv-button>
                <xmv-button icon="search" round>Default</xmv-button>
                <xmv-button size="small" icon="search" round>Small</xmv-button>
            </xmv-col>
        </xmv-row>

        <xmv-row>
            <xmv-col>
                <xmv-button circle size="large"><xmv-icon name="search"></xmv-icon></xmv-button>
                <xmv-button circle><xmv-icon name="search"></xmv-icon></xmv-button>
                <xmv-button circle size="small"><xmv-icon name="search"></xmv-icon></xmv-button>
            </xmv-col>
        </xmv-row>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
import xmvCode from '../code/index.vue'
export default defineComponent({
    name:"",
    components:{xmvCode},
    setup(props ,context) {
        let code_1 = 
                            `
                                // 第一行
                                <xmv-button>Default</xmv-button>
                                <xmv-button type="primary">Primary</xmv-button>
                                <xmv-button type="success">Success</xmv-button>
                                <xmv-button type="info">Info</xmv-button>
                                <xmv-button type="warning">Warning</xmv-button>
                                <xmv-button type="danger">Danger</xmv-button>
                            
                                // 第二行
                                <xmv-button plain>Plain</xmv-button>
                                <xmv-button type="primary" plain>Primary</xmv-button>
                                <xmv-button type="success" plain>Success</xmv-button>
                                <xmv-button type="info" plain>Info</xmv-button>
                                <xmv-button type="warning" plain>Warning</xmv-button>
                                <xmv-button type="danger" plain>Danger</xmv-button>
                            
                                // 第三行
                                <xmv-button round>Round</xmv-button>
                                <xmv-button type="primary" round>Primary</xmv-button>
                                <xmv-button type="success" round>Success</xmv-button>
                                <xmv-button type="info" round>Info</xmv-button>
                                <xmv-button type="warning" round>Warning</xmv-button>
                                <xmv-button type="danger" round>Danger</xmv-button>
                            
                                // 第四行
                                <xmv-button circle>
                                    <xmv-icon name="search"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="primary" circle>
                                    <xmv-icon name="edit"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="success" circle>
                                    <xmv-icon name="check"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="info" circle>
                                    <xmv-icon name="message"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="warning" circle>
                                    <xmv-icon name="star"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="danger" circle>
                                    <xmv-icon name="dlt"></xmv-icon>
                                </xmv-button>
                            `

        let code_2 = 
                            `
                                // 第一行
                                <xmv-button disabled>Default</xmv-button>
                                <xmv-button type="primary" disabled>Primary</xmv-button>
                                <xmv-button type="success" disabled>Success</xmv-button>
                                <xmv-button type="info" disabled>Info</xmv-button>
                                <xmv-button type="warning" disabled>Warning</xmv-button>
                                <xmv-button type="danger" disabled>Danger</xmv-button>
                            
                                // 第二行
                                <xmv-button plain disabled>Default</xmv-button>
                                <xmv-button plain type="primary" disabled>Primary</xmv-button>
                                <xmv-button plain type="success" disabled>Success</xmv-button>
                                <xmv-button plain type="info" disabled>Info</xmv-button>
                                <xmv-button plain type="warning" disabled>Warning</xmv-button>
                                <xmv-button plain type="danger" disabled>Danger</xmv-button>  
                            `

        let code_3 = 
                            `
                                <xmv-button type="primary">
                                    <xmv-icon name="edit"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="primary">
                                    <xmv-icon name="dlt"></xmv-icon>
                                </xmv-button>
                                <xmv-button type="primary" icon="search" iconPosition="left">Search</xmv-button>
                                <xmv-button type="primary" icon="upload">Upload</xmv-button>
                            `

        let code_4 = 
                            `
                                <xmv-button-group>
                                    <xmv-button type="primary" icon="arrowLeft" iconPosition="left">上一页</xmv-button>
                                    <xmv-button type="primary" icon="arrowRight">下一页</xmv-button>
                                </xmv-button-group>
                            
                                <xmv-button-group>
                                    <xmv-button type="primary">
                                        <xmv-icon name="edit"></xmv-icon>
                                    </xmv-button>
                                    <xmv-button type="primary">
                                        <xmv-icon name="upload"></xmv-icon>
                                    </xmv-button>
                                    <xmv-button type="primary">
                                        <xmv-icon name="dlt"></xmv-icon>
                                    </xmv-button>
                                </xmv-button-group>
                            `

        let code_5 = 
                            `
                                // loadingButton 是必填属性
                                <xmv-button loadingButton icon="loading" type="primary" 
                                        :loading="btnLoading" @click="handleLoading">Loading</xmv-button>

                                const btnLoading = ref(false)
                                const handleLoading = ()=>{
                                    btnLoading.value = !btnLoading.value
                                }
                            `
        let code_6 =        
                            `
                                // 第一行
                                <xmv-button size="large">Large</xmv-button>
                                <xmv-button>Default</xmv-button>
                                <xmv-button size="small">Small</xmv-button>
                                <xmv-button size="large" icon="search">Large</xmv-button>
                                <xmv-button icon="search">Default</xmv-button>
                                <xmv-button size="small" icon="search">Small</xmv-button>

                                // 第二行
                                <xmv-button size="large" round>Large</xmv-button>
                                <xmv-button round>Default</xmv-button>
                                <xmv-button size="small" round>Small</xmv-button>
                                <xmv-button size="large" icon="search" round>Large</xmv-button>
                                <xmv-button icon="search" round>Default</xmv-button>
                                <xmv-button size="small" icon="search" round>Small</xmv-button>

                                // 第三行
                                <xmv-button circle size="large"><xmv-icon name="search"></xmv-icon></xmv-button>
                                <xmv-button circle><xmv-icon name="search"></xmv-icon></xmv-button>
                                <xmv-button circle size="small"><xmv-icon name="search"></xmv-icon></xmv-button>
                            `
        const btnLoading = ref(false)

        const handleLoading = ()=>{
            btnLoading.value = !btnLoading.value
        }
        return {code_1 ,code_2 ,code_3 ,code_4 ,code_5 ,code_6 ,btnLoading ,handleLoading}
    }
})
</script>

<style lang="" scoped></style>
