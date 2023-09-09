import {createRouter ,createWebHashHistory} from 'vue-router'


import indexVue from 'page/index.vue'
import buttonVue from 'comp/button/index.vue'
import layoutVue from 'comp/layout/index.vue'
import iconVue from 'comp/icon/index.vue'
import scrollbarVue from 'comp/scrollbar/index.vue'
import spaceVue from 'comp/space/index.vue'
import checkboxVue from 'comp/checkbox/index.vue'
import colorPickerVue from 'comp/colorPicker/index.vue'
import datePickerVue from 'comp/datePicker/index.vue'
import inputVue from 'comp/input/index.vue'
import inputNumberVue from 'comp/inputNumber/index.vue'
import radioVue from 'comp/radio/index.vue'
import selectVue from 'comp/select/index.vue'
import sliderVue from 'comp/slider/index.vue'
import switchVue from 'comp/switch/index.vue'
import timePickerVue from 'comp/timePicker/index.vue'
import uploadVue from 'comp/upload/index.vue'
import cardVue from 'comp/card/index.vue'
import badgeVue from 'comp/badge/index.vue'
import carouselVue from 'comp/carousel/index.vue'
import collapseVue from 'comp/collapse/index.vue'
import descriptionsVue from 'comp/descriptions/index.vue'
import emptyVue from 'comp/empty/index.vue'
import imageVue from 'comp/image/index.vue'
import paginationVue from 'comp/pagination/index.vue'

const routes = [
    { path : '/',component : indexVue },
    { path : '/button',component : buttonVue },
    { path : '/layout',component : layoutVue },
    { path : '/icon',component : iconVue },
    { path : '/scrollbar',component : scrollbarVue },
    { path : '/space',component : spaceVue },
    { path : '/checkbox',component : checkboxVue },
    { path : '/colorPicker',component : colorPickerVue },
    { path : '/datePicker',component : datePickerVue },
    { path : '/input',component : inputVue },
    { path : '/inputNumber',component : inputNumberVue },
    { path : '/radio',component : radioVue },
    { path : '/select',component : selectVue },
    { path : '/slider',component : sliderVue },
    { path : '/switch',component : switchVue },
    { path : '/timePicker',component : timePickerVue },
    { path : '/upload',component : uploadVue },
    { path : '/card',component : cardVue },
    { path : '/carousel',component : carouselVue },
    { path : '/collapse',component : collapseVue },
    { path : '/badge',component : badgeVue },
    { path : '/descriptions',component : descriptionsVue },
    { path : '/empty',component : emptyVue },
    { path : '/image',component : imageVue },
    { path : '/pagination',component : paginationVue }
]

const router= createRouter({
    history : createWebHashHistory(),
    routes : routes
})

export default router