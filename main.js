import Router from './modules/router';
import AuthView from './views/auth/auth';
import ChatView from './views/chat/chat';

let router = new Router();

window.addEventListener('DOMContentLoaded', () => {
    let authView = new AuthView(document.querySelector('.js-auth-view'));
    let chatView = new ChatView(document.querySelector('.js-chat-view'));

    router.register('auth', authView);
    router.register('chat', chatView);

    router.start();
});