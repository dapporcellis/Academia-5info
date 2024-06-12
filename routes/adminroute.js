import express from 'express';
const router = express.Router();


import passport from '../config/passport.js';

import {
    abre_tela_lst_alunos,
    abre_tela_add_exercicio,
    abre_tela_lst_exercicio,
    add_exercicio,
    del_exercicio
} from '../controllers/admincontroller.js';

import multer from 'multer';
const foto = multer({
    dest: './public/fotos/admin'
})

router.get('/lstalunos', abre_tela_lst_alunos)

router.get('/addexercicio', abre_tela_add_exercicio)

router.post('/addexercicio', foto.single('foto'), add_exercicio)

router.get('/lstexercicio', abre_tela_lst_exercicio)

router.get('/delexercicio/:id', del_exercicio)

export default router;