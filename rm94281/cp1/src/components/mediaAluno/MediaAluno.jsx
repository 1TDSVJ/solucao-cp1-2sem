import React from 'react';
import './mediaAluno.scss';
export default function MediaAluno(props) {
  const media = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
  };
  const pintaMedia = (media) => {
    if (media <= 0) {
      return <span style={{ color: 'tomato' }}>{media}</span>;
    } else if (media > 0 && media < 6) {
      return <span style={{ color: 'orange' }}>{media}</span>;
    } else {
      return <span style={{ color: 'green' }}>{media}</span>;
    }
  };
  return (
    <div>
      <div className='rowMedia'>
        <p className='col-25'>Aluno: {props.aluno.nome}</p>
        <p className='col-25'>RM: {props.aluno.rm}</p>
        <p className='col-25'>Turma: {props.aluno.turma}</p>
        <h2>
          Média:
          {pintaMedia(
            media(props.notas[0], props.notas[1], props.notas[2]).toFixed(2)
          )}
          {/* {props.notas.reduce((media, nota, indice, notas) => {
          media += nota;
          if (indice == notas.length - 1) {
            return (media / notas.length).toFixed(2);
          }
          return media.toFixed(2);
        })} */}
        </h2>
      </div>
    </div>
  );
}
