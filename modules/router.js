/**
 * 1) Определить текущий, на который пользователь
 * 2) Уметь отслеживать измениня
 * 3) При изменении показывать view, которое соовтетсвует адерсу
 */

export default class Router {

    constructor() {
        this.routes = {};
    }

    // Определить текущий, на который пользователь
    start() {
        console.log('start', this.routes);

        window.addEventListener('hashchange', () => {
            this.show(location.hash.replace('#', ''));
            //console.log("hash "+location.hash);
        });

        this.show(location.hash.replace('#', ''));
    }

    show(hash) {
        console.log('on view', hash);

        if (this.current) {
            this.current.hide();
        }

        this.current = this.routes[hash];
        this.current.show();
    }

    /**
     * Регистрация маршрута
     * @param {string} name
     * @param {Object} view
     */
    register(name, view) {
        this.routes[name] = view;
    }


}