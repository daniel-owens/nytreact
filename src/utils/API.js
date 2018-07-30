import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY   = "4443ce03788a4bdd8ff6441e0908d9a8";
const queryFix = "&q=";

const API = {
  // Retrieves all articles from the db
  getArticles: function() {
    return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(article) {
    return axios.post(process.env.REACT_APP_API_HOST + "/api/articles", { article });
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    console.log('in API delete article ')
    return axios.delete(process.env.REACT_APP_API_HOST + `/api/articles/${id}`);
  },
  // Toggles an article's favorite property in the db
  favoriteArticle: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(process.env.REACT_APP_API_HOST + `/api/articles/${_id}`, { favorited });
  },
  search: function(query) {
  	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
    return axios.get(BASEURL + APIKEY + queryFix + query);
  }
};

export default API;

