import Router from './modules/router';
import AuthView from './views/auth/auth';
import ChatView from './views/chat/chat';
import LogoutView from "./views/logout/logout";
import AboutView from "./views/about/about";
import DefaultView from "./views/default/default";
import Members from "./models/members";

import Menu from "./blocks/menu/menu";

let router = new Router();

window.addEventListener('DOMContentLoaded', () => {
    let authView = new AuthView(document.querySelector('.js-auth-view'));
    let chatView = new ChatView(document.querySelector('.js-chat-view'));
    let logoutView = new LogoutView(document.querySelector('.js-logout-view'));
    let aboutView = new AboutView(document.querySelector('.js-about-view'));
    let members = new Members(document.querySelector('.js-members'));
    let defaultView = new DefaultView(document.querySelector('.js-default-view'));


    let menu = new Menu(document.querySelector(".js-menu"),{menu:[
    	{href:"#auth",name:"Войти"},
    	{href:"#chat",name:"Чат"},
    	{href:"#about",name:"О чате"},
    	{href:"#logout",name:"Выйти"}
    ]});

    menu.render();

    members.start();

    router.register('auth', authView);
    router.register('chat', chatView);
    router.register('about', aboutView);
    router.register('logout', logoutView);
    router.register('default', defaultView);

    router.start();
});