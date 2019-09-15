require('dotenv').config();
import {applicationConfig} from "./config";
import restify from 'restify';
import restifyCorsMiddleware from 'restify-cors-middleware';
import {setRouter} from "./api/router";
import {connectDatabase} from "./database/connection";

connectDatabase();
const server = restify.createServer({
    name: 'bangumi-spider-api',
    version: '1.0.0',
});
const cors = restifyCorsMiddleware({
    origins: ["*"],
    allowHeaders: ['authorization'],
    exposeHeaders: ['authorization'],
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);
setRouter(server);
server.listen(applicationConfig.port, () => {
    console.log('%s listening at %s', server.name, server.url);
});