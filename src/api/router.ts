import {Server} from 'restify';
import {getAnimate, getAnimates} from "./handlers/animate";
import {getBook, getBooks} from "./handlers/book";
import {getGame, getGames} from "./handlers/game";
import {getMusic, getMusics} from "./handlers/music";
import {getCharacter, getCharacters} from "./handlers/character";
import {getPerson, getPersons} from "./handlers/person";

export function setRouter(server: Server) {
    server.get("/animate", getAnimate);
    server.get("/animates", getAnimates);
    server.get("/books", getBooks);
    server.get("/book", getBook);
    server.get("/games", getGames);
    server.get("/game", getGame);
    server.get("/musics", getMusics);
    server.get("/music", getMusic);
    server.get("/characters", getCharacters);
    server.get("/character", getCharacter);
    server.get("/persons", getPersons);
    server.get("/person", getPerson);
}
