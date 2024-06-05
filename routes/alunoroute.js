import express from 'express';
const router = express.Router();

import passport from '../config/passport.js';

import {
    abre_tela_login,
    realiza_login,
    abre_tela_cadastro,
    realiza_cadastro
} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({
    dest: './public'
})

router.get('/', abre_tela_login)
router.post('/', realiza_login)

router.get('/cadastro', abre_tela_cadastro)
router.post('/cadastro', foto.single('foto'), realiza_cadastro)

export default router;