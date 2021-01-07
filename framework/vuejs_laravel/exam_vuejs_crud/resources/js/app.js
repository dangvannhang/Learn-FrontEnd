const { default: VueAxios } = require('vue-axios');

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(axios, VueAxios);
import App from 'App.vue';

import HomeComponent from './components/HomeComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [{
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');