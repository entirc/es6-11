import Vue from 'vue'
import Root from './Root.vue'
import VueRouter from 'vue-router'
import GeneratorMatching from './components/GeneratorMatching.vue'
import GeneratorControlFlow from './components/GeneratorControlFlow.vue'
import ObjectPropertyAssign from './components/ObjectPropertyAssignment.vue'
import ArrayElementFinding from './components/ArrayElementFinding.vue'
import StringRepeating from './components/StringRepeating.vue'
import StringSearching from './components/StringSearching.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: GeneratorMatching
    },
    {
        path: '/generator-control-flow',
        component: GeneratorControlFlow
    },
    {
        path: '/obj-prop-assign',
        component: ObjectPropertyAssign
    },
    {
        path: '/arr-el-find',
        component: ArrayElementFinding
    },
    {
        path: '/string-repeating',
        component: StringRepeating
    },
    {
        path: '/string-searching',
        component: StringSearching
    }
]

const router = new VueRouter({
    linkActiveClass: 'is-active',
    mode: 'history',
    routes // short for routes: routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(Root)
})