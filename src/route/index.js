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
import tableVue from 'comp/table/index.vue'
import tagVue from 'comp/tag/index.vue'
import treeVue from 'comp/tree/index.vue'
import treeSelectVue from 'comp/treeSelect/index.vue'
import affixVue from 'comp/affix/index.vue'
import backtopVue from 'comp/backtop/index.vue'
import breadcrumbVue from 'comp/breadcrumb/index.vue'
import dropdownVue from 'comp/dropdown/index.vue'
import menuVue from 'comp/menu/index.vue'
import pageHeaderVue from 'comp/pageHeader/index.vue'
import tabsVue from 'comp/tabs/index.vue'
import alertVue from 'comp/alert/index.vue'
import dialogVue from 'comp/dialog/index.vue'
import drawerVue from 'comp/drawer/index.vue'
import loadingVue from 'comp/loading/index.vue'
import messageVue from 'comp/message/index.vue'
import messageBoxVue  from 'comp/messageBox/index.vue'
import notificationVue  from 'comp/notification/index.vue'
import popoverVue  from 'comp/popover/index.vue'
import tooltipVue  from 'comp/tooltip/index.vue'

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
    { path : '/pagination',component : paginationVue },
    { path : '/table',component : tableVue },
    { path : '/tag',component : tagVue },
    { path : '/tree',component : treeVue },
    { path : '/treeSelect',component : treeSelectVue },
    { path : '/affix',component : affixVue },
    { path : '/backtop',component : backtopVue },
    { path : '/breadcrumb',component : breadcrumbVue },
    { path : '/dropdown',component : dropdownVue },
    { path : '/menu',component : menuVue },
    { path : '/pageHeader',component : pageHeaderVue },
    { path : '/tabs',component : tabsVue },
    { path : '/alert',component : alertVue },
    { path : '/dialog',component : dialogVue },
    { path : '/drawer',component : drawerVue },
    { path : '/loading',component : loadingVue },
    { path : '/message',component : messageVue },
    { path : '/messageBox',component : messageBoxVue },
    { path : '/notification',component : notificationVue },
    { path : '/popover',component : popoverVue },
    { path : '/tooltip',component : tooltipVue }
]

const router= createRouter({
    history : createWebHashHistory(),
    routes : routes
})

export default router