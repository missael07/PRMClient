import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { jwtDecode } from 'jwt-decode';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

interface JWTResponse {
  role: string;
  exp: number;
}
// Esta función verifica si el token JWT es válido y no ha expirado
function isTokenValid(token: any) {
  if (!token) return false;
  
  try {
    const decoded = <JWTResponse>jwtDecode(token);
    const currentTime = Date.now() / 1000;
    
    return decoded?.exp > currentTime;
  } catch (e) {
    return false;
  }
}

// Esta función obtiene el rol del usuario desde el token JWT
function getUserRole(token: any) {
  try {
    const decoded = <JWTResponse>jwtDecode(token);
    localStorage.setItem('role', decoded?.role)
    return decoded?.role;
  } catch (e) {
    return null;
  }
}


export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

 // Agrega el guard de navegación
 Router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isTokenValid(token)) {
      const userRole = getUserRole(token);
      console.log(userRole);
      if (to.matched.some(record => record.meta.roles)) {
        const roles = to.meta.roles;
        if (roles.includes(userRole)) {
          next();
        } else {
          console.log(userRole) 
          next({ name: 'Unauthorized' }); // Redirige a una página de "Acceso Denegado"
        }
      } else {
        next();
      }
    } else {
      next({ name: 'Sign-In' });
    }
  }  else if (to.name === 'Sign-In' && isTokenValid(token)) {    
    next({ name: '' }); // Redirige a la página de inicio si ya está autenticado
  } 
  else {
    next();
  } 
});


  return Router;
});
