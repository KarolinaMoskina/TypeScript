import { appendLoadingToList, appendItemsToList, appendNotFoundToList } from './document';
import { getList } from './api';
import { APP_DATA } from './constants';


const search = document.querySelector<HTMLInputElement>('#search');
const list = document.querySelector<HTMLUListElement>('#list');

const download = async (list: HTMLUListElement, filter?: string) => {
  appendLoadingToList(list);
  APP_DATA.list = await getList(filter);
  APP_DATA.list?.length ? appendItemsToList(list) : appendNotFoundToList(list);
};

const handleDownload = (_event: Event) => {
  download(list!);
};



const handleSearch = () => {
  if (search) {
    const target = search as HTMLInputElement;
    appendLoadingToList(list!);
    APP_DATA.setDebounce(() => download(list!, target.value));
  }
};

const handleDelete = (_event: Event) => {
  APP_DATA.cleanDebounce();
  window.removeEventListener('load', handleDownload);
  search!.removeEventListener('input', handleSearch);
  window.removeEventListener('beforeunload', handleDelete);
};

window.addEventListener('load', handleDownload);
search!.addEventListener('input', handleSearch);
window.addEventListener('beforeunload', handleDelete);