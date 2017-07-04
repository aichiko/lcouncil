function ccRequestWithURL(url, parameters, success, fail){
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: url,
    data: parameters,
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      // success
      wx.hideLoading()
      if (res.data.status == 0) {
        if (success) {
          console.log("parameters", parameters)
          console.log("success", res.data)
          typeof success == "function" && success(res.data.data)
        }
      } else {
        if (fail) {
          console.log("parameters", parameters)
          console.log("failInfo", res.data)
          typeof fail == "function" && fail(res.data)
        }
      }
    }, 
    fail: function (error) {
      // fail
      wx.hideLoading()
      console.log("parameters", parameters)
      console.log("error", error)
      if (fail) {
        typeof fail == "function" && fail(error)
      }
    }
  })
}

function ccRequest(path, parameters, success, fail) {

  // wx.showLoading()
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: app.globalData.host + path,
    data: parameters,
    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }, // 设置请求的 header
    success: function (res) {
      // success
      wx.hideLoading()
      if (res.data.status == 0) {
        if (success) {
          console.log("parameters", parameters)
          console.log("success", res.data.data)
          typeof success == "function" && success(res.data.data)
        }
      } else {
        if (fail) {
          console.log("parameters", parameters)
          console.log("failInfo", res.data)
          typeof fail == "function" && fail(res.data)
        }
      }
    },
    fail: function (error) {
      // fail
      wx.hideLoading()
      console.log("parameters", parameters)
      console.log("error", error)
      if (fail) {
        typeof fail == "function" && fail(error)
      }
    }
  })
}

module.exports = {
  ccRequest: ccRequest,
  ccRequestWithURL: ccRequestWithURL
}