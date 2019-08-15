import VueRouter from "vue-router";

// import components
import Courses from './components/Courses'
import About from './components/About'
import Faqs from './components/Faqs'
import Course from './components/Course'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'

// define routes 
const routes = [
    { path: '/kurse', component: Courses },
    { path: '/kontakt', component: Contact },
    { path: '/über-uns', component: About },
    { path: '/faqs', component: Faqs },
    { path: '/kurs/:id', component: Course },
    { path: '/teams', component: Products },
    { path: '/', component: Home }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router