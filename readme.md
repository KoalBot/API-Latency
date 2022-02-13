### Based off of [Hyra's Atlassian Statuspage monitor](https://github.com/hyra-io/API-Latency)

# API Latency
This is a very simple monitoring script that will monitor the latency of your API server. It simply makes a request to a HTTP or HTTPS path every 30 seconds and reports the latency to [Instatus](https://instatus.com) via their API. This is used in a metric graph.

## Installation
There are a few prerequisites to run this project locally. You'll need:
* Node.js - this was built using Node.js v16.11
* All the dependencies in the package.json

Clone the repo to your system

To install the dependencies simply run `npm install`.

You'll then need to set up your environment variables. 

## Operation
Once you've installed the latency monitor, you'll need to run it. To run it, we'd recommend using a process manager like [pm2](https://pm2.io/). 

## Secrets
We store secrets in a `.env` file stored in the root directory of the project - you can't see this file because it's in our `.gitignore`.

Please see the format for this file below

```
API_KEY=
```

## License
This project is licensed under [MIT License](LICENSE)
