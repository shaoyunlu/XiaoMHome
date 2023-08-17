import {createRouter ,createWebHashHistory} from 'vue-router'


import indexVue from 'page/index.vue'
import buttonVue from 'comp/button/index.vue'
import layoutVue from 'comp/layout/index.vue'
import iconVue from 'comp/icon/index.vue'
import scrollbarVue from 'comp/scrollbar/index.vue'
import spaceVue from 'comp/space/index.vue'
import checkboxVue from 'comp/checkbox/index.vue'
import colorPickerVue from 'comp/colorPicker/index.vue'

const routes = [
    { path : '/',component : indexVue },
    { path : '/button',component : buttonVue },
    { path : '/layout',component : layoutVue },
    { path : '/icon',component : iconVue },
    { path : '/scrollbar',component : scrollbarVue },
    { path : '/space',component : spaceVue },
    { path : '/checkbox',component : checkboxVue },
    { path : '/colorPicker',component : colorPickerVue }
]

const router= createRouter({
    history : createWebHashHistory(),
    routes : routes
})

export default router