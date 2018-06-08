export default {
  method: 'post',
  // 基础url前缀
  baseURL: 'your request url',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json',

  getBrandsByHot: function () {
    let params = {
      url: '/company/list',
      data: {
        cond: {},
        limit: 9,
        order_word: "attention_rate",
        order_direction: -1,
        page: 1
      }
    }
    api.post(params).then(response => {
      this.hot_brand = response.data
    }).catch({});
  }


}
