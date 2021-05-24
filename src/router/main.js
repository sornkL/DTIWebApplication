const routes = [
  {
    path: '/hello',
    name: 'helloworld',
    component: () => import('../views/HelloWorld')
  },
  {
    path: '/',
    redirect: '/hello',
  }
];

export default routes;
