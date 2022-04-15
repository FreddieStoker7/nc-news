import axios from 'axios'

const myApi = axios.create({
    baseURL:  'https://freddie-nc-news.herokuapp.com/api',
  });

  export const fetchAllArticles = (topic, sort_by, order) => {
    return myApi.get('/articles', {params: {topic:topic, sort_by:sort_by, order:order} }).then((response) => {
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
    return myApi.patch(`/articles/${article_id}`, {inc_votes: votes}).then((response) => {
        return response.data.updatedArticle;
    })
}

export const fetchArticleComments = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`).then((response) => {
        return response.data.articleComments;
    })
}

export const fetchAllUsers = () => {
    return myApi.get('/users').then((response) => {
        return response.data.users
    })
}

export const setNewComment = (article_id, newComment, username) => {
    return myApi.post(`/articles/${article_id.article_id}/comments`, {username: username, body: newComment.comment}).then((response) => {
        return response.data.comment
    })
}

export const deleteComment = (comment_id) => {
    console.log(comment_id)
    return myApi.delete(`/comments/${comment_id}`).then(() => {
        return "comment has been deleted"
    })
}