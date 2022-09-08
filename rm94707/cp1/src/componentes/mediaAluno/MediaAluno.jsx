import React from "react";
import './MediaAluno.scss'

export default function MediaAluno(props) {

    const nota1 = props.nota1Props
    const nota2 = props.nota2Props
    const nota3 = props.nota3Props

    const calculo = () => {
        let media = ((nota1 + nota2 + nota3) / 3)

        if (media <= 0) {
            return <span style={{ color: 'red', fontSize: '2rem' }}>{media}</span>
        } else if (media > 0 && media < 6) {
            return <span style={{ color: 'orange', fontSize: '2rem' }}>{media}</span>
        } else if (media >= 6) {
            return <span style={{ color: 'green', fontSize: '2rem' }}>{media}</span>
        }

    }

    return (
        <div>
            <div className="rowMedia">
                <p className="col-25"><strong>Aluno</strong> : {props.alunoProps.nome}</p>
                <p className="col-25"><strong>RM</strong>: {props.alunoProps.rm}</p>
                <p className="col-25"><strong>Turma</strong>: {props.alunoProps.turma}</p>
                <h2>Nota : {calculo()}</h2>
            </div>
        </div>
    )
}


// 4 – No componente MediaAluno deve ser realizada através de uma função a média das
// notas recebidas. De acordo com o resultado deve ser impresso o seguinte: ( 3 Pontos)
// a) Se a média for igual a zero a nota deve ser apresentada com a cor vermelha.
// b) Se a média for maior que zero e menor que 6 a nota deve ser apresentada com a cor
// laranja.
// c) Se a média for igual ou maio que 6 a nota deve ser apresentada com a cor verde.

// 3 – Crie um componente chamado MediaAluno. ( 3 Pontos)
// Esse componente deve receber através de props do componente App.jsx os seguintes
// dados:
// a) O objeto aluno.
// b) As três notas já com valores preenchidos de 0 a 10.