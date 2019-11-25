"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find,
    insert = _require.insert,
    deletes = _require.deletes,
    update = _require.update,
    finds = _require.finds; //账号登录


router.post('/login', function _callee(req, res, next) {
  var query, params, username, password, data, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据
          // console.log(params)

          username = params.username;
          password = String(params.password); // console.log(username, password);

          _context.next = 7;
          return regeneratorRuntime.awrap(find('user', {
            'username': username,
            'password': password
          }));

        case 7:
          data = _context.sent;
          // console.log(data.length);
          result = {};

          if (data.length) {
            result = {
              message: "登录成功",
              code: 0
            };
          } else {
            result = {
              message: "账号密码错误",
              code: 1
            };
          }

          res.json(result);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}); //请求商品信息表

router.get('/list', function _callee2(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context2.next = 3;
          return regeneratorRuntime.awrap(find('goodlist'));

        case 3:
          data = _context2.sent;
          //查询list表格
          res.json(data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //请求商品型号信息表

router.get('/goods', function _callee3(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context3.next = 3;
          return regeneratorRuntime.awrap(find('brand'));

        case 3:
          data = _context3.sent;
          //查询list表格
          res.json(data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //请求交易订单表

router.get('/order', function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context4.next = 3;
          return regeneratorRuntime.awrap(find('order'));

        case 3:
          data = _context4.sent;
          //查询list表格
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); //查询商品类型

router.post('/selectBrand', function _callee5(req, res, next) {
  var query, params, bid, data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          query = req.query;
          params = req.body; //请求体中的数据

          bid = Number(params.bid); // console.log(bid)

          _context5.next = 6;
          return regeneratorRuntime.awrap(find('brand', {
            'bid': bid
          }));

        case 6:
          data = _context5.sent;
          //查询list表格
          res.json(data);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //查询多个字段

router.post('/order1', function _callee6(req, res, next) {
  var query, params, key, data;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          query = req.query;
          params = req.body; //请求体中的数据
          // console.log(params)

          for (key in params) {
            if (params[key] === '') {
              delete params[key];
            }
          }

          _context6.next = 6;
          return regeneratorRuntime.awrap(find('order', params));

        case 6:
          data = _context6.sent;
          res.json(data); //查询list表格
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

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //查询一个字段
//查询商品类型

router.post('/selectBrand', function _callee7(req, res, next) {
  var query, params, bid, data;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          query = req.query;
          params = req.body; //请求体中的数据

          bid = Number(params.bid); // console.log(bid)

          _context7.next = 6;
          return regeneratorRuntime.awrap(find('brand', {
            'bid': bid
          }));

        case 6:
          data = _context7.sent;
          //查询list表格
          res.json(data);

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //查询一个字段

router.post('/goods1', function _callee8(req, res, next) {
  var query, params, data;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          query = req.query;
          params = req.body; //请求体中的数据
          // var title = params.seachs

          _context8.next = 5;
          return regeneratorRuntime.awrap(find('brand', params));

        case 5:
          data = _context8.sent;
          res.json(data);

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
}); //删除商品

router.post('/dels', function _callee9(req, res, next) {
  var query, params, gid, data, result;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据

          gid = params.gid - 0; // console.log(gid);

          _context9.next = 6;
          return regeneratorRuntime.awrap(deletes('goodlist', {
            'gid': gid
          }));

        case 6:
          data = _context9.sent;
          result = {};

          if (data) {
            result = '删除成功呢';
          } else {
            result = '删除失败';
          }

          res.send(result);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  });
}); //删除商品类型

router.post('/delgood', function _callee10(req, res, next) {
  var query, params, bid, data, result;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据

          bid = params.bid - 0; // console.log(bid);

          _context10.next = 6;
          return regeneratorRuntime.awrap(deletes('brand', {
            'bid': bid
          }));

        case 6:
          data = _context10.sent;
          result = {};

          if (data) {
            result = '删除成功呢';
          } else {
            result = '删除失败';
          }

          res.send(result);

        case 10:
        case "end":
          return _context10.stop();
      }
    }
  });
}); //删除订单记录

router.post('/delorder', function _callee11(req, res, next) {
  var query, params, id, data, result;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据
          // console.log(params)

          id = params.id - 0; // console.log(id);

          _context11.next = 6;
          return regeneratorRuntime.awrap(deletes('order', {
            'id': id
          }));

        case 6:
          data = _context11.sent;
          result = {};

          if (data) {
            result = '删除订单成功呢';
          } else {
            result = '删除订单失败';
          }

          res.send(result);

        case 10:
        case "end":
          return _context11.stop();
      }
    }
  });
}); //添加商品

router.post('/adds', function _callee12(req, res, next) {
  var query, params, key, title, gid, result, data1, data, data2;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据
          // console.log(params)

          key = params.key * 1;
          title = params.title;
          gid = params.gid * 1; // console.log(gid);

          result = {};
          _context12.next = 9;
          return regeneratorRuntime.awrap(find('goodlist', {
            'gid': gid,
            'key': key,
            'title': title
          }));

        case 9:
          data1 = _context12.sent;

          if (!(data1.length > 0)) {
            _context12.next = 17;
            break;
          }

          _context12.next = 13;
          return regeneratorRuntime.awrap(update('goodlist', {
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
              '上架': true
            }
          }));

        case 13:
          data = _context12.sent;

          if (data) {
            result = {
              inf: '修改商品成功',
              code: 0
            };
          }

          _context12.next = 21;
          break;

        case 17:
          _context12.next = 19;
          return regeneratorRuntime.awrap(insert('goodlist', [{
            'gid': gid,
            'key': key,
            'title': params.title,
            'kucun': params.kucun,
            'price': params.price,
            'sales': params.sales,
            '推荐': true,
            '新品': true,
            '上架': true
          }]));

        case 19:
          data2 = _context12.sent;

          if (data2) {
            result = {
              inf: '添加商品成功',
              code: 1
            };
          }

        case 21:
          res.send(result);

        case 22:
        case "end":
          return _context12.stop();
      }
    }
  });
}); //修改类型

router.post('/commit', function _callee13(req, res, next) {
  var query, params, bid, data;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*'); //允许跨域
          //获取url中的请求参数

          query = req.query;
          params = req.body; //请求体中的数据

          console.log(params);
          bid = params.bid * 1;
          console.log(bid); //查到就修改

          _context13.next = 8;
          return regeneratorRuntime.awrap(update('brand', {
            'bid': bid
          }, {
            $set: {
              'title': params.title,
              'upcase': params.upcase,
              'story': params.story,
              'rank': params.rank,
              'product': params.product,
              'isshow': params.isshow
            }
          }));

        case 8:
          data = _context13.sent;

          if (data) {
            result = {
              inf: '修改商品成功',
              code: 0
            };
          } else {
            result = {
              inf: '修改商品失败',
              code: 1
            };
          }

          res.send(result);

        case 11:
        case "end":
          return _context13.stop();
      }
    }
  });
});
module.exports = router;