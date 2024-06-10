import express from 'express';
const router = express.Router();


import passport from '../config/passport.js';

import {
    abre_tela_aluno,
} from '../controllers/alunocontroller.js';

import multer from 'multer';
import autenticacaoaluno from '../config/autenticacaoaluno.js';
const foto = multer({
    dest: './public/fotos'
})

router.get('/', abre_tela_aluno)

export default router;