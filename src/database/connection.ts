import mongoose from 'mongoose';
import {applicationConfig} from "../config";


export function connectDatabase() {
    mongoose.connect(applicationConfig.mongoAddress, {
        authSource: "admin",
        auth: {
            user: applicationConfig.mongoUsername,
            password: applicationConfig.mongoPassword,
        }
    })
        .then(() => console.log('连接成功')).catch(
        e => console.log(e),
    );
}
