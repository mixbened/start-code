import VueRouter from "vue-router";

// import components
import Courses from './components/Courses'
import About from './components/About'
import Faqs from './components/Faqs'

// define routes 
const routes = [
    { path: '/kurse', component: Courses },
    { path: '/kontakt', component: About },
    { path: '/faqs', component: Faqs }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router