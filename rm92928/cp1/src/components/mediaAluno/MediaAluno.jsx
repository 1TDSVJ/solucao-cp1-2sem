import React from "react";
import './MediaAluno.css';

export default function MediaAluno(props) {

    const { aluno, nota1, nota2, nota3 } = props;
    
    const calculo = () => {
        let media = (nota1 + nota2 + nota3) / 3;

        if (media <= 0) {
            return <span style={{color: 'red'}}>{media}</span>
        } else if (media > 0 && media < 6) {
            return <span style={{color: 'orange'}}>{media}</span>
        } else if (media >= 6) {
            return <span style={{color: 'green'}}>{media}</span>
        }
    }

    return (
        <div>
            <div className="rowMedia">
                <p className="col-25"><strong>Aluno</strong> : {aluno.nome}</p>
                <p className="col-25"><strong>RM</strong> : {aluno.rm}</p>
                <p className="col-25"><strong>Turma</strong> : {aluno.turma}</p>
                <h2>Nota : {calculo()}</h2>
            </div>
        </div>
    )
}