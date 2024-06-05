import express from 'express';
import path from 'path';
import passport from 'passport';
import session from 'express-session';

const app = express();

// o process.env.PORT é usado para o servidor online
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

import route from './routes/route.js'
app.use('/',route)

import adminroute from './routes/adminroute.js'
app.use('/admin',adminroute)

import alunoroute from './routes/alunoroute.js'
app.use('/aluno',alunoroute)

app.listen(port);