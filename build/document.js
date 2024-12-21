import { APP_DATA, LOADING, NOT_FOUND } from './constants.js';
const clearList = (list) => {
    if (list == null)
        return;
    list.innerHTML = '';
};
const appendItemToList = (list, title, className) => {
    if (list == null)
        return;
    clearList(list);
    const list_Node = document.createElement('li');
    list_Node.textContent = title;
    list_Node.classList.add(className);
    list.append(list_Node);
};
export const appendLoadingToList = (list) => appendItemToList(list, LOADING, 'loading');
export const appendNotFoundToList = (list) => appendItemToList(list, NOT_FOUND, 'not_found');
export const appendItemsToList = (list) => {
    if (list == null)
        return;
    clearList(list);
    APP_DATA.list.forEach((item) => {
        const list_Node = document.createElement('li');
        const title_Node = document.createElement('h2');
        const paragraph_Node = document.createElement('p');
        title_Node.textContent = item?.title ?? 'Title';
        paragraph_Node.textContent = item?.body ?? 'Description';
        list_Node.classList.add('post');
        list_Node.append(title_Node);
        list_Node.append(paragraph_Node);
        list.append(list_Node);
    });
};
