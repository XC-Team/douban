const fetch = require('./fetch')
const API = 'http://api.map.baidu.com/'

function fetchApi(type, params) {
    return fetch(API, type, params);
}

function getCityName(latitude = 39.90403, longitude = 116.407526) {
    let params = {
        location: `${latitude},${longitude}`,
        out: 'json',
        ak: 'eGNzH9bkpUT2M5fGBy6PNGHKhlmqQFj3'
    }
    return fetchApi('geocode/v2', params)
        .then(res => res.data.result.addressComponent.city);
}

module.exports = {
    getCityName
};
