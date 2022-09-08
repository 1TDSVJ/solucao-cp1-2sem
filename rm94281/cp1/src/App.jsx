import React, { useState } from 'react';
import MediaAluno from './components/mediaAluno/MediaAluno';

export default function App() {
  const [aluno, setAluno] = useState({
    nome: 'Joaquim',
    rm: 94281,
    turma: '1TDSVJ',
  });

  const notas = [8, 5, 9];
  return (
    <>
      <h1>CP1 de RWD 2° Semestre</h1>
      <div className='container'>
        <p>Apresentando com SASS</p>
      </div>
      <MediaAluno aluno={aluno} notas={notas} />
    </>
  );
}
