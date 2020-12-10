import httpService from './http-service.js'

export const shopService = {
    query
}

function query() {
    return httpService.get('stores')
}