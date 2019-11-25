var express = require('express');
var router = express.Router();
const { find, insert, deletes, update, finds } = require('../db/db');
//账号登录
router.post('/login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  // console.log(params)
  var username = params.username;
  var password = String(params.password);
  // console.log(username, password);
  let data = await find('user', { 'username': username, 'password': password });
  // console.log(data.length);
  var result = {};
  if (data.length) {
    result = { message: "登录成功", code: 0 }
  } else {
    result = { message: "账号密码错误", code: 1 }
  }
  res.json(result);
});
//请求商品信息表
router.get('/list', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goodlist')//查询list表格
  res.json(data);
});
//请求商品型号信息表
router.get('/goods', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('brand')//查询list表格
  res.json(data);
});
//请求交易订单表
router.get('/order', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('order')//查询list表格
  res.json(data);
});
//查询商品类型
router.post('/selectBrand', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var query = req.query
  var params = req.body   //请求体中的数据
  var bid = Number(params.bid);
  // console.log(bid)
  let data = await find('brand', {
    'bid': bid
  })//查询list表格
  res.json(data);
});
//查询多个字段
router.post('/order1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var query = req.query
  var params = req.body   //请求体中的数据
  // console.log(params)
  for (var key in params) {
    if (params[key] === '') {
      delete params[key]
    }
  }
  var data = await find('order', params)
  res.json(data);
  //查询list表格
  // if (params.ording && params.time && params.status && params.sbperson) {
  //   var data = await find('order', {
  //     '提交时间': params.time,
  //     '订单编号': params.ording,
  //     '订单状态': params.status,
  //     '用户账号': params.sbperson
  //   })//查询list表格
  // } else {
  //   var data = await finds('order',
  //     {
  //       '提交时间': params.time,
  //     },
  //     {
  //       '订单编号': params.ording
  //     },
  //     {
  //       '订单状态': params.status
  //     },
  //     {
  //       '用户账号': params.sbperson
  //     }
  //   )//查询list表格
  // }
  // console.log(data)

});
//查询一个字段
//查询商品类型
router.post('/selectBrand', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var query = req.query
  var params = req.body   //请求体中的数据
  var bid = Number(params.bid);
  // console.log(bid)
  let data = await find('brand', {
    'bid': bid
  })//查询list表格
  res.json(data);
});
//查询一个字段
router.post('/goods1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var query = req.query
  var params = req.body   //请求体中的数据
  // var title = params.seachs
  var data = await find('brand', params)
  res.json(data);

});
//删除商品
router.post('/dels', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  var gid = params.gid - 0;
  // console.log(gid);
  let data = await deletes('goodlist', { 'gid': gid })
  var result = {};
  if (data) {
    result = '删除成功呢'
  } else {
    result = '删除失败'
  }
  res.send(result);
});
//删除商品类型
router.post('/delgood', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  var bid = params.bid - 0;
  // console.log(bid);
  let data = await deletes('brand', { 'bid': bid })
  var result = {};
  if (data) {
    result = '删除成功呢'
  } else {
    result = '删除失败'
  }
  res.send(result);
});
//删除订单记录
router.post('/delorder', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  // console.log(params)
  var id = params.id - 0;
  // console.log(id);
  let data = await deletes('order', { 'id': id })
  var result = {};
  if (data) {
    result = '删除订单成功呢'
  } else {
    result = '删除订单失败'
  }
  res.send(result);
});
//添加商品
router.post('/adds', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  // console.log(params)
  var key = params.key * 1;
  var title = params.title;
  var gid = params.gid * 1;
  // console.log(gid);
  var result = {};
  let data1 = await find('goodlist', { 'gid': gid, 'key': key, 'title': title });
  // console.log(data1.length)
  if (data1.length > 0) {
    //查到就修改
    let data = await update('goodlist', {
      'gid': gid,
      'key': key
    }, {
      $set: {
        'gid': gid,
        'key': key,
        'title': params.title,
        'kucun': params.kucun,
        'price': params.price,
        'sales': params.sales,
        '推荐': true,
        '新品': true,
        '上架': true,
      }
    })
    if (data) {
      result = { inf: '修改商品成功', code: 0 }
    }
  } else {
    let data2 = await insert('goodlist', [{
      'gid': gid,
      'key': key,
      'title': params.title,
      'kucun': params.kucun,
      'price': params.price,
      'sales': params.sales,
      '推荐': true,
      '新品': true,
      '上架': true,
    }])
    if (data2) {
      result = { inf: '添加商品成功', code: 1 }
    }
  }
  res.send(result);
});
//修改类型
router.post('/commit', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');   //允许跨域
  //获取url中的请求参数
  var query = req.query
  var params = req.body   //请求体中的数据
  console.log(params)
  var bid = params.bid * 1;
  console.log(bid)
  //查到就修改
  let data = await update('brand', {
    'bid': bid,
  }, {
    $set: {
      'title': params.title,
      'upcase': params.upcase,
      'story': params.story,
      'rank': params.rank,
      'product': params.product,
      'isshow': params.isshow,
    }
  })
  if (data) {
    result = { inf: '修改商品成功', code: 0 }
  } else {

    result = { inf: '修改商品失败', code: 1 }
  }

  res.send(result);
});



module.exports = router;
