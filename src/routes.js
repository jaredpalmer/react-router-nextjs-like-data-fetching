import About from './screens/About';
import Home from './screens/Home';
import Users from './screens/Users';

// This is a static route configuration. It should include all of your top level
// routes, regardless of whether they are going to server render. In fact, you
// can totally point multiple routes to the same component! This is great for
// when you only need to server render a handful of routes and not your entire
// application!
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    exact: true,
  },
  {
    path: '/users',
    component: Users,
    name: 'Users',
  },
];

export default routes;
