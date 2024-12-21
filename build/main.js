import { appendLoadingToList, appendItemsToList, appendNotFoundToList } from './document.js';
import { getList } from './api.js';
import { APP_DATA } from './constants.js';

const search = document.querySelector('#search');
const list = document.querySelector('#list');
const download = async (list, filter) => {
    appendLoadingToList(list);
    APP_DATA.list = await getList(filter);
    APP_DATA.list?.length ? appendItemsToList(list) : appendNotFoundToList(list);
};
const handleDownload = (_event) => {
    download(list);
};

const handleSearch = () => {
    if (search) {
        const target = search;
        appendLoadingToList(list);
        APP_DATA.setDebounce(() => download(list, target.value));
    }
};
const handleDelete = (_event) => {
    APP_DATA.cleanDebounce();
    window.removeEventListener('load', handleDownload);
    search.removeEventListener('input', handleSearch);
    window.removeEventListener('beforeunload', handleDelete);
};
window.addEventListener('load', handleDownload);
search.addEventListener('input', handleSearch);
window.addEventListener('beforeunload', handleDelete);
