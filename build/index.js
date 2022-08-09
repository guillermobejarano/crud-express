"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import logger from 'morgan';
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
//app.use(logger('dev'));
app.use(body_parser_1.default.json());
routes_1.default.configure(app);
async function start() {
    // 4. Connect to MongoDB
    await (0, mongoose_1.connect)('mongodb://localhost');
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    });
}
start().catch(err => console.log(err));
;
