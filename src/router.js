import VueRouter from "vue-router";

// import components
import Courses from './components/Courses'
import About from './components/About'

// define routes 
const routes = [
    { path: '/kurse', component: Courses },
    { path: '/kontakt', component: About }
]

const router = new VueRouter({
    routes
})

export default router