import Signin from "../components/Signin";
import Signup from "../components/Signup";
import About from "../pages/About";
import Homepage from "../pages/Homepage";

export const nav = [{
    name:'Home',
    pathname: '/',
    component: <Homepage/>
},
{
    name:'About',
    pathname: '/about',
    component: <About/>
},
{
    name:'Signin',
    pathname: '/signin',
    component: <Signin/>
},
{
    name:'Signup',
    pathname: '/signup',
    component: <Signup/>
},
]