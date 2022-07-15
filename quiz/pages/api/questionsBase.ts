import AnswerModel from '../../model/answer'
import QuestionModel from '../../model/question'

const questions: QuestionModel[] = [

    new QuestionModel(100, 'Qual bicho transmite a doença de Chagas?' , [
        AnswerModel.wrong('Abelha'),
        AnswerModel.wrong('Barata'),
        AnswerModel.wrong('Pulga'),
        AnswerModel.right('Barbeiro')
    ]) ,

    new QuestionModel(101, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?' , [
        AnswerModel.wrong('Caju'),
        AnswerModel.wrong('Côco'),
        AnswerModel.wrong('Chuchu'),
        AnswerModel.right('Abóbora')
    ]) ,

    new QuestionModel(102, 'Qual é o sobrenome que Leo usa?' , [
        AnswerModel.wrong('Benevides'),
        AnswerModel.wrong('Miranda'),
        AnswerModel.wrong('Lobo'),
        AnswerModel.right('Oliveira')
    ]) ,

    new QuestionModel(103, 'Qual é o nome do meu cachorro?' , [
        AnswerModel.wrong('Bela'),
        AnswerModel.wrong('Theo'),
        AnswerModel.wrong('Bento'),
        AnswerModel.right('Ninho')
    ]) ,


]
export default questions