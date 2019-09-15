import {RequestHandlerType} from "restify";
import {makeApiException} from "../exception";
import {characterModel} from "../../database/models/character";

export const getCharacter: RequestHandlerType = (req, res, next) => {
    const {
        bangumi_id = 0
    } = req.query;
    if (bangumi_id == 0) {
        makeApiException(401, {reason: "bangumi id invalidate!"}, res);
        return next();
    }
    characterModel.findOne({"bangumi_id": bangumi_id}).exec((err, data) => {
        if (err){
            makeApiException(500,{reason:err.message},res);
            return next();
        }
        res.send(data);
    });
    return next();
};

export const getCharacters: RequestHandlerType = (req, res, next) => {
    const {
        page = 1,
        page_size = 10
    } = req.query;
    characterModel.find({}).skip((page - 1) * page_size).limit(page_size).exec((err, data) => {
        if (err){
            makeApiException(500,{reason:err.message},res);
            return next();
        }
        res.send(data);
    });
    return next();
};