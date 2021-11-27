import VueRouter from 'vue-router'

import Launcher from './scenes/Launcher.vue'
import Editor from './scenes/Editor.vue'

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'the_menu_item_active',
  linkExactActiveClass: 'the_menu_item_exact_active',
  scrollBehavior(_, _1, savePosition) {
    if (savePosition)
      return savePosition
    
    return { left: 0, top: 0 }
  },
  routes: [
    { path: '/', redirect: '/editor' },
    { path: '/launcher', name:'launcher', component: Launcher },
    { path: '/editor', name:'editor', component: Editor },
    { path: '/:not_found(.*)', component: Launcher },
  ],
})

router.beforeEach((_, _1, next) => {
  next()
})

export default router
