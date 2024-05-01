const redis = require('redis');

const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
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