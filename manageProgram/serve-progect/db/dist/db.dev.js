"use strict";

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017'; //连接数据库地址

var dbName = '后台管理系统';

var connect = function connect() {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, {
      useUnifiedTopology: true
    }, function (err, client) {
      err ? reject(err) : resolve(client);
      console.log('successfully');
    });
  });
}; //查找


var find = function find(col, query) {
  return new Promise(function _callee(resolve, reject) {
    var db, collection;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find(query ? query : {}).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

var finds = function finds(col, query, query1, query2, query3) {
  return new Promise(function _callee2(resolve, reject) {
    var db, collection;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context2.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.find({
              "$or": [query ? query : {}, query1 ? query1 : {}, query2 ? query2 : {}, query3 ? query3 : {}]
            }).toArray(function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}; //插入


var insert = function insert(col, query) {
  return new Promise(function _callee3(resolve, reject) {
    var db, collection;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context3.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.insertMany(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}; //删除


var deletes = function deletes(col, query) {
  return new Promise(function _callee4(resolve, reject) {
    var db, collection;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context4.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.deleteOne(query, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
}; //更新


var update = function update(col, query1, query2) {
  return new Promise(function _callee5(resolve, reject) {
    var db, collection;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(connect());

          case 2:
            client = _context5.sent;
            db = client.db(dbName);
            collection = db.collection(col);
            collection.updateOne(query1, query2, function (err, docs) {
              err ? reject(err) : resolve(docs);
            });
            client.close();

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
};

module.exports = {
  find: find,
  insert: insert,
  deletes: deletes,
  update: update,
  finds: finds
};