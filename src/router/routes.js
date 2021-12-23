
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/', redirect: '/course' },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/course', component: () => import('pages/Course.vue') }
    ]
  },
  { path: '/home', component: () => import('pages/Home.vue') },
  { path: '/login', component: () => import('pages/Login.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
