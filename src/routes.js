import React from 'react'
const HomeRoutes = {
    path:'/',
    component:React.lazy(()=>import('./app/views/Home/Home')),
    exact:true,
    name:'Home'
}

const DetailRoutes = {
    path:'/details/:id',
    component:React.lazy(()=>import('./app/views/Details/Details')),
    name:'Details',
    exact:true,


}

const routes = [
    HomeRoutes,
    DetailRoutes,
]
export default routes