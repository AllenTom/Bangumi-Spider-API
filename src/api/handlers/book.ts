import {RequestHandlerType} from "restify";
import {makeApiException} from "../exception";
import {bookModel} from "../../database/models/book";

export const getBook: RequestHandlerType = (req, res, next) => {
    const {
        bangumi_id = 0
    } = req.query;
    if (bangumi_id == 0) {
        makeApiException(401, {reason: "bangumi id invalidate!"}, res);
        return next();
    }
    bookModel.findOne({"bangumi_id": bangumi_id}).exec((err, data) => {
        if (err){
            makeApiException(500,{reason:err.message},res);
            return next();
        }
        res.send(data);
    });
    return next();
};

export const getBooks: RequestHandlerType = (req, res, next) => {
    const {
        page = 1,
        page_size = 10
    } = req.query;
    bookModel.find({}).skip((page - 1) * page_size).limit(page_size).exec((err, data) => {
        if (err){
            makeApiException(500,{reason:err.message},res);
            return next();
        }
        res.send(data);
    });
    return next();
};