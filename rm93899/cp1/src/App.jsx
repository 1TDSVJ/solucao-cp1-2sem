import React from 'react'
import {useState} from 'react'
import MediaAluno from './components/mediaAluno/MediaAluno'

export default function App() {
  
  const [aluno, setAluno] = useState({
    nome: 'Joaquim',
    rm: '99999',
    turma: '1TDSZ'
  })

  const nota1 = 0
  const nota2 = 10
  const nota3 = 10
  
  return (
    <>
      <h1>CP1 de RWD 2º SEMESTRE</h1>
      <MediaAluno alunoProps={aluno} nota1Props={nota1} nota2Props={nota2} nota3Props={nota3} />
    </>
  )
}