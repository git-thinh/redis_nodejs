const redis = require("redis");
const client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

let setSize = 20;

//client.sadd(1, "member1");
//client.sadd(2, "member2");

//while (setSize > 0) {
//    client.hmset("ids", setSize, setSize % 2 == 0);
//    setSize -= 1;
//}

//client.hmset("key", "foo", "bar", "hello", "world");

//client.hgetall("ids", function (err, value) {
//    console.log(value);
//});

client.hkeys('ids', function (err, keys_) {
    console.log(keys_);

    //client.quit();
});
client.keys('*', function (err, keys_) {
    console.log(keys_);

    //client.quit();
});