import React from 'react';
import './MediaAluno.css';

export default function mediaAluno(props) {
    
    const calculo = ()=>{
        let media = (props.nota1Props + props.nota2Props + props.nota3Props) / 3;
        
        if(media <= 0){
            return <span style={{color: 'red', fonrSize: "2rem"}}>{media}</span>
        } else if(media < 6 && media > 0){
            return <span style={{color: 'orange', fonrSize: "2rem"}}>{media}</span>
        } else if(media >= 6){
            return <span style={{color: 'green', fonrSize: "2rem"}}>{media}</span>
        }
    }
    
    return (
        <div className="rowMedia">
            <p classeName="col-25"><Strong>Nome : </Strong>{props.alunoProps.nome}</p>
            <p classeName="col-25"><Strong>rm : </Strong>{props.alunoProps.rm}</p>
            <p classeName="col-25"><Strong> turma :</Strong> {props.alunoProps.turma}</p>
            <h2 classeName="col-25">Nota: {calculo()}</h2>
        </div>
    )
}