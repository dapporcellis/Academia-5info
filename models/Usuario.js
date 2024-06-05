import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
    nome: 'String',
    email:{
        type:'String',
        required: true
    },
    senha: 'String',
    foto: 'String',
    admin: 'Boolean',
})

export default conexao.model('Usuario',Usuario)