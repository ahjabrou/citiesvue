import { createRouter, createWebHistory } from "vue-router";
import Accueil from '@/views/Accueil.vue';
import GrandBéréby from '@/views/Grandbereby.vue';
import Songon from '@/views/Songon.vue';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path:"/",
            name:"accueil",
            component: Accueil
    },
    {
        path:"/grandbereby",
        name:"grandbereby",
        component: GrandBéréby
},
{
    path:"/songon",
    name:"songon",
    component: Songon
},
]
})
export default router