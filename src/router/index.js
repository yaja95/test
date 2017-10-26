import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/Home'
import GPA from '@/components/GPA'
import time from '@/components/time'
import calendar from '@/components/calendar'
import slides from '@/components/slides'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: home
        },
        {
            path: '/GPA',
            name: 'GPA',
            component: GPA
        },
        {
            path: '/time',
            name: 'time',
            component: time
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: calendar
        },
        {
            path: '/slides',
            name: 'Slideshow',
            component: slides
        },
        {
            path: '/hello',
            name: 'Slideshow',
            component: Hello
        }
    ]
})