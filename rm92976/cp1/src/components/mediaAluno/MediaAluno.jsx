import React from 'react';
import './MediaAluno.css'

export default function MediaAluno(props){

    let variavel = 0

    function exemploEscopo(){
       variavel = (1+1)
    }

    exemploEscopo()
    
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
           <div className='rowMedia'>
            <p className='col-25'><strong>Aluno</strong> :{props.alunoProps.nome}</p>
            <p className='col-25'><strong>RM</strong>: {props.alunoProps.rm}</p>
            <p className='col-25'><strong>TURMA</strong>: {props.alunoProps.turma}</p>
            <h2>Media: {calculo()}</h2>
        </div>
        </div>
    )
}