import "./js/router.js";

const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}



Router.handle();

window.onpopstate = () => handle()
window.route = () => Router.route()