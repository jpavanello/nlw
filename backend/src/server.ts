import express from 'express';
import upload from './config/upload';
import './database/connection';
import path from 'path';
import 'express-async-errors';
import errorHandler from './errors/handler';
import cors from 'cors';

import routes from './routers';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));

app.use(errorHandler);
// Rota = Conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros



app.listen(3333);