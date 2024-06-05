import Usuario from '../models/Usuario.js'
import passport from '../config/passport.js';

export function abre_tela_login(req,res){
    res.render('login/login.ejs')
}

export function realiza_login(req,res){
    passport.authenticate('local', {
        successRedirect: '/usuario',
        failureRedirect: '/'
    })
}

export function abre_tela_cadastro(req,res){
    res.render('login/cadastro.ejs')
}

export async function realiza_cadastro(req,res){
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename,
        admin: true
    })

    console.log(usuario)

    await usuario.save()
    res.render('usuario')

}
