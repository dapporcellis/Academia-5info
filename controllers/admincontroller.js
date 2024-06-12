import Usuario from "../models/Usuario.js"
import Exercicio from "../models/Exercicio.js"


export async function abre_tela_lst_alunos(req,res){
    const usuarios = await Usuario.find({})
    res.render('admin/lstalunos.ejs', {Usuarios: usuarios})
}

export async function abre_tela_add_exercicio(req,res){
    res.render('admin/addexercicio.ejs')
}

export async function abre_tela_lst_exercicio(req,res){
    const exercicios = await Exercicio.find({})
    res.render('admin/lstexercicio.ejs', {Exercicios: exercicios})
}

export async function add_exercicio(req,res){
    const exercicio = new Exercicio({
        exercicio: req.body.exercicio,
        equipamentos: req.body.equipamentos,
        foto: req.file.filename,
    })
    await exercicio.save()
    res.redirect('/admin/lstexercicio')
}

export async function del_exercicio(req,res){
    await Exercicio.findByIdAndDelete(req.params.id)
    res.redirect('/admin/lstexercicio')
}