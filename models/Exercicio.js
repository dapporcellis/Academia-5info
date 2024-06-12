import conexao from '../config/conexao.js'

const Exercicio = conexao.Schema({
    exercicio: 'String',
    equipamentos:'String',
    foto: 'String',
})

export default conexao.model('Exercicio',Exercicio)