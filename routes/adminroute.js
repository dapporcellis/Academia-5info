import express from 'express';
const router = express.Router();


import passport from '../config/passport.js';

import {
    abre_tela_admin,
} from '../controllers/admincontroller.js';

import multer from 'multer';
const foto = multer({
    dest: './public/fotos'
})

router.get('/', abre_tela_admin)

export default router;