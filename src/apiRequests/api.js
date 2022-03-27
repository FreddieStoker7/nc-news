import axios from 'axios'

const myApi = axios.create({
    baseURL:  'https://freddie-nc-news.herokuapp.com/api',
  });

  export const fetchAllArticles = (topic) => {
    return myApi.get('/articles', {params: {topic:topic}, }).then((response) => {
        return response.data.articles;
    })
}

export const fetchAllTopics = () => {
    return myApi.get(`/topics`).then((response) => {
        return response.data.topics;
    })
}

export const fetchIndividualArticle = (article_id) => {
    return myApi.get(`/articles/${article_id}`).then((response) => {
        return response.data.article;
    })
}

export const changeVotes = (article_id, votes) => {
    return myApi.patch(`/articles/${article_id}`, {inc_votes: votes}).then(({response}) => {
        return response.data.updatedArticle;
    })
}

export const fetchArticleComments = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`).then(({response}) => {
        console.log(response)
        return response.data.articleComments;
    })
}
