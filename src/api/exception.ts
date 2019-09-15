import {Response} from "restify";

interface ApiException {
    reason: string
}

export function makeApiException(code: number, err: ApiException, res: Response) {
    res.status(code);
    res.send(err)
}