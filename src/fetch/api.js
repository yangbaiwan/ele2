import serve from './serve'

// 获取位置信息
export function getLocaInfo(params) {
    return serve({
        method: 'get',
        url: '/v1/cities',
        params
    })
}

// // 获取热门地址
// export function getHotLoca(params) {
//     return serve({
//         method: 'get',
//         url: ''
//     })
// }