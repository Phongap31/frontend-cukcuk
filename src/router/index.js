import { createRouter, createWebHashHistory } from 'vue-router'
import ListEmployee from '../views/category/employees/ListEmployee';

const routes = [{
    path: '/category/list',
    component: ListEmployee,
    name: 'ListEmployee'
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router