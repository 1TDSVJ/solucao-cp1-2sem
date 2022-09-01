import React from 'react';

export default function MediaAluno(props){
    
    const nota1 = props.nota1Props
    const nota2 = props.nota2Props
    const nota3 = props.nota3Props
    
    const calculo = () =>{
        let media = ((nota1+nota2+nota3 ) / 3)

        if (media <= 0 ){
            return <span style={{color: 'red', fontSize:'2rem'}}>{media}</span>
        } else if (media > 0 && media < 6){
            return <span style={{color: 'orange', fontSize:'2rem'}}></span>
        } else if(media >=6){
            return <span style={{color: 'green', fontSize:'2rem'}}></span>
        }

    }
    return(
        <div>
            <h2>MEDIA ALUNO</h2>
            <p><strong>Aluno</strong> :{props.alunoProps.nome}</p>
            <p><strong>RM</strong>: {props.alunoProps.rm}</p>
            <p><strong>TURMA</strong>: {props.alunoProps.turma}</p>
            <h2>Media: {calculo()}</h2>
        </div>
    )
}