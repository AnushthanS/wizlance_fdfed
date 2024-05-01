const redis = require('redis');

const client = redis.createClient({
    password: 'IOQWSOFSF3v1FXyiofsLtZUKBaiekfHw',
    socket: {
        host: 'redis-16965.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 16965
    }
});

client.connect().then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log('Error' , err);
})


client.on('error', (err) => {
    console.log('Error: ' + err);
}
);

module.exports = client;