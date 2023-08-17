<template>
    <div class="app">
        <header class="navbar has-sidebar">
            <div class="navbar-wrapper">
                <div class="header-container">
                    <div class="logo-container">
                        <a href="/#" data-v-74f3ae96="">
                            <img class="logo" src="/xmv-logo.svg" alt="Element Plus Logo" data-v-74f3ae96="">
                        </a>
                    </div>
                    <div class="content"></div>
                </div>
            </div>
        </header>
        <xmh-left></xmh-left>
        <main class="page-content has-sidebar">
            <div class="doc-content-wrapper">
                <div class="doc-content-container">
                    <div class="doc-content" style="position:relative;">
                        <div>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import xmhLeft from 'page/left.vue'
export default defineComponent({
    name:"",
    components:{xmhLeft},
    setup(props ,context) {
        return {}
    }
})
</script>

<style lang="" scoped></style>
