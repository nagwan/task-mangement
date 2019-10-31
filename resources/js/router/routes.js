import Register from "../components/auth/register";
import Index from "../components/projects";
import Show from "../components/projects/show";
import Store from "../components/projects/store";
import Login from "../components/auth/login";
import ResetPassword from "../components/auth/reset-password";
import ForgetPassword from "../components/auth/forget-password";
import Update from "../components/projects/update";
import User from "../components/user";


export default [
    {
        path: '/projects',
        exact: true,
        component: Index,
        private: true
    },
    {
        path: '/projects/:id',
        component: Show,
        private: true
    },
    {
        path: '/new-project',
        component: Store,
        private: true
    },
    {
        path: '/edit-project/:id',
        component: Update,
        private: true
    },
    {
        path: '/me/:id',
        component: User,
        private: true
    },
    {
        path: '/registration',
        component: Register,
        auth: true
    },
    {
        path: '/login',
        component: Login,
        auth: true
    },
    {
        path: '/reset-password',
        component: ResetPassword,
        auth: true
    },
    {
        path: '/forget-password',
        component: ForgetPassword,
        auth: true
    },
]