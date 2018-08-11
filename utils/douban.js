const fetch = require('./fetch')
const API = 'https://douban.uieee.com/v2/movie'

function fetchApi(type, params) {
    return fetch(API, type, params)
}

function find(type, pages = 1, count = 20, search = '') {
    const params = {
        start: (pages - 1) * count,
        count: count,
        city: getApp().data.currentCity
    }
    return fetchApi(type, search ? Object.assign(params, {
        q: search
    }) : params).then(res => res.data)
}

function searchOne(id) {
    return fetchApi('subject/' + id).then(res => res.data)
}

module.exports = {
    find,
    searchOne
}


