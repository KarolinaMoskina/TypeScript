export const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const FILTER = 'title_like';
export const LOADING = 'Loading...';
export const NOT_FOUND = 'Post are not defined';
export const INTERVAL = 500;
export const APP_DATA = {
    list: [],
    timeout: null,
    setDebounce: function (fn) {
        this.cleanDebounce();
        this.timeout = setTimeout(() => {
            fn();
            this.cleanDebounce();
        }, INTERVAL);
    },
    cleanDebounce: function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    },
};
