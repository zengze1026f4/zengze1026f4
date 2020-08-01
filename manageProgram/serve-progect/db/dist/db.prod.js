"use strict";var MongoClient=require("mongodb").MongoClient,url="mongodb://localhost:27017",dbName="后台管理系统",connect=function(){return new Promise(function(t,r){MongoClient.connect(url,{useUnifiedTopology:!0},function(e,n){e?r(e):t(n),console.log("successfully")})})},find=function(c,o){return new Promise(function(t,r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(connect());case 2:client=e.sent,n=client.db(dbName),n.collection(c).find(o||{}).toArray(function(e,n){e?r(e):t(n)}),client.close();case 7:case"end":return e.stop()}})})},finds=function(c,o,i,s,u){return new Promise(function(t,r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(connect());case 2:client=e.sent,n=client.db(dbName),n.collection(c).find({$or:[o||{},i||{},s||{},u||{}]}).toArray(function(e,n){e?r(e):t(n)}),client.close();case 7:case"end":return e.stop()}})})},insert=function(c,o){return new Promise(function(t,r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(connect());case 2:client=e.sent,n=client.db(dbName),n.collection(c).insertMany(o,function(e,n){e?r(e):t(n)}),client.close();case 7:case"end":return e.stop()}})})},deletes=function(c,o){return new Promise(function(t,r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(connect());case 2:client=e.sent,n=client.db(dbName),n.collection(c).deleteOne(o,function(e,n){e?r(e):t(n)}),client.close();case 7:case"end":return e.stop()}})})},update=function(c,o,i){return new Promise(function(t,r){var n;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(connect());case 2:client=e.sent,n=client.db(dbName),n.collection(c).updateOne(o,i,function(e,n){e?r(e):t(n)}),client.close();case 7:case"end":return e.stop()}})})};module.exports={find:find,insert:insert,deletes:deletes,update:update,finds:finds};