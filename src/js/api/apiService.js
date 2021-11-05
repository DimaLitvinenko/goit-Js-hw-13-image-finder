import { BASE_URL } from '../references/baseUrl'
import { API_KEY } from '../references/apiKey'

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }
  async fetchPhotos() {
    const response = await fetch(
      `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`
    );
    if (!response.ok) {
      throw response;
    }

    return response
      .json()
      .then(({ hits }) => {
        this.incrementPage();
        
        return hits; 
      })
      .catch(notice => {
        alert(`${notice}`)
      })
  }
  incrementPage() {
    this.page += 1; 
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};