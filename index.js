const axios = require("axios").default;

const pageId = "ckqu7nm8617021395n6p5xvlvlk";
const metricId = "ckxo16fcc189614o8ond2p5splu";

const path = "https://edge.koal.us";

require("dotenv").config();

const checkApi = () => {
    const start = new Date().getTime();
    axios.get(path).then(response => {
        const latency = new Date().getTime() - start;

        axios.post(`https://api.instatus.com/v1/${pageId}/metrics/${metricId}`,
            {
                    timestamp: Math.floor(new Date()),
                    value: latency
            },
            {
                headers: {
                    Authorization: "Bearer " + process.env.API_KEY
                }
            }).then(result => {
                console.log('All went well with latency of ' + latency);
                setTimeout(() => {
                    checkApi();
                }, 30 * 1000)
            }).catch(err => {
                console.log(err);
            })
    }).catch(err => {
        console.log(err);
    })
}

checkApi();