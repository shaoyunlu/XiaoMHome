<template>
    <h1>Dropdown 下拉菜单</h1>
    <p>将动作或菜单折叠到下拉菜单中。</p>
    <h2>基础用法</h2>
    <p>悬停在下拉菜单上以展开更多操作。</p>
    <p text="sm">
        <p>通过组件 <code>slot</code> 来设置下拉触发的元素以及需要通过具名 <code>slot</code> 为 <code>dropdown</code> 来设置下拉菜单。
            默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。</p>
    </p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="6">
                <xmv-dropdown @item-click="handleItemClick">
                    <span class="xmv-dropdown-link">
                        Dropdown List
                        <xmv-icon class="xmv-icon--right" name="arrowDown"></xmv-icon>
                    </span>
                    <template #dropdown>
                        <xmv-dropdown-menu>
                            <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                            <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                            <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                        </xmv-dropdown-menu>
                    </template>
                </xmv-dropdown>
            </xmv-col>
        </xmv-row> 
    </xmv-code>

    <h2>触发对象</h2>
    <p>可使用按钮触发下拉菜单。</p>
    <p text="sm"><p>设置 <code>split-button</code> 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，
        设置为 <code>true</code> 即可。 如果你想要在第三和第四个选项之间添加一个分隔符，
        你只需要为第四个选项添加一个 <code>divider</code> 的 CSS class。</p>
    </p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="6">
                <xmv-dropdown @item-click="handleItemClick">
                    <xmv-button type="primary">
                        Dropdown List<xmv-icon class="xmv-icon--right" name="arrowDown"></xmv-icon>
                    </xmv-button>
                    <template #dropdown>
                        <xmv-dropdown-menu>
                            <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                            <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                            <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                        </xmv-dropdown-menu>
                    </template>
                </xmv-dropdown>
            </xmv-col>
            <xmv-col :span="6" :offset="1">
                <xmv-dropdown @item-click="handleItemClick" split-button>
                    Dropdown List
                    <template #dropdown>
                        <xmv-dropdown-menu>
                            <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                            <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                            <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                        </xmv-dropdown-menu>
                    </template>
                </xmv-dropdown>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>触发方式</h2>
    <p>可以配置点击激活或者悬停激活。</p>
    <p text="sm"><p>将 <code>trigger</code> 属性设置为 click 即可， 默认为 <code>hover</code>。</p></p>
    <xmv-code>
        <xmv-row>
            <xmv-col :span="6">
                <span class="demonstration">hover to trigger</span>
                <xmv-dropdown @item-click="handleItemClick">
                    <span class="xmv-dropdown-link">
                        Dropdown List
                        <xmv-icon class="xmv-icon--right" name="arrowDown"></xmv-icon>
                    </span>
                    <template #dropdown>
                        <xmv-dropdown-menu>
                            <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                            <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                            <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                        </xmv-dropdown-menu>
                    </template>
                </xmv-dropdown>
            </xmv-col>
            <xmv-col :span="6" :offset="1">
                <span class="demonstration">hover to trigger</span>
                <xmv-dropdown @item-click="handleItemClick" trigger="click">
                    <span class="xmv-dropdown-link">
                        Dropdown List
                        <xmv-icon class="xmv-icon--right" name="arrowDown"></xmv-icon>
                    </span>
                    <template #dropdown>
                        <xmv-dropdown-menu>
                            <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                            <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                            <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                            <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                        </xmv-dropdown-menu>
                    </template>
                </xmv-dropdown>
            </xmv-col>
        </xmv-row>
    </xmv-code>

    <h2>尺寸</h2>
    <p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
    <p text="sm">
        <p>使用 <code>size</code> 属性配置尺寸，可选的尺寸大小有: <code>large</code>, 
            <code>default</code> 或 <code>small</code></p>
    </p>
    <xmv-code>
        <xmv-dropdown @item-click="handleItemClick" split-button size="large">
            Large
            <template #dropdown>
                <xmv-dropdown-menu>
                    <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                    <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                    <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                </xmv-dropdown-menu>
            </template>
        </xmv-dropdown>
        <span></span>
        <xmv-dropdown @item-click="handleItemClick" split-button>
            Default
            <template #dropdown>
                <xmv-dropdown-menu>
                    <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                    <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                    <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                </xmv-dropdown-menu>
            </template>
        </xmv-dropdown>
        <span></span>
        <xmv-dropdown @item-click="handleItemClick" split-button size="small">
            Small
            <template #dropdown>
                <xmv-dropdown-menu>
                    <xmv-dropdown-item>Action 1</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 2</xmv-dropdown-item>
                    <xmv-dropdown-item>Action 3</xmv-dropdown-item>
                    <xmv-dropdown-item disabled>Action 4</xmv-dropdown-item>
                    <xmv-dropdown-item divided>Action 5</xmv-dropdown-item>
                </xmv-dropdown-menu>
            </template>
        </xmv-dropdown>
    </xmv-code>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const handleItemClick = ()=>{

        }
        return {handleItemClick}
    }
})
</script>

<style lang="less" scoped>
    .xmv-dropdown-link{
        cursor: pointer;
        color: var(--xmv-color-primary);
        display: flex;
        align-items: center;
    }

    .demonstration {
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
    }

    .xmv-dropdown+span {
        margin-left: 15px;
    }
</style>
