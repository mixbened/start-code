import VueRouter from "vue-router";

// import components
import Courses from './components/Courses'
import About from './components/About'
import Faqs from './components/Faqs'
import Course from './components/Course'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import CIOD from './components/CIOD'
import Coaching from './components/Coaching'
import Blog from './components/Blog'
import Partner from './components/Partner'
import Contributions from './components/Contributions'
import Data from './components/Data'
import Impressum from './components/Impressum'
import Article from './components/Article'

// define routes
const routes = [
    { path: '/kurse', component: Courses },
    { path: '/kontakt', component: Contact },
    { path: '/über-uns', component: About },
    { path: '/faqs', component: Faqs },
    { path: '/kurs/:id', component: Course },
    { path: '/teams', component: Products },
    { path: '/ciod', component: CIOD },
    { path: '/coaching', component: Coaching },
    { path: '/blog', component: Blog },
    { path: '/article/:id', component: Article },
    { path: '/partner', component: Partner },
    { path: '/cont', component: Contributions },
    { path: '/data-privacy', component: Data },
    { path: '/impressum', component: Impressum },
    { path: '/', component: Home }
]

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
  // console.log('Router', to)
  next()
})

export default router
