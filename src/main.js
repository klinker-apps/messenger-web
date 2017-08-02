// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './lib/material.min.js'

Vue.config.productionTip = false


Vue.directive('mdl', {
    bind (el) {
        componentHandler.upgradeElements(el)
    }
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
