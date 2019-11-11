const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';//连接数据库地址
const dbName = '19092';
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log('successfully');
        })
    })
}
//查找
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}

        ).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs)
        })
        client.close();
    })
}
//插入
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
//删除
const deletes = (col, query) => {
    return new Promise(async (resolve, reject) => {
        client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
//更新
const update = (col, query1, query2) => {
    return new Promise(async (resolve, reject) => {
        client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(query1, query2, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
module.exports = {
    find,
    insert,
    deletes,
    update
}