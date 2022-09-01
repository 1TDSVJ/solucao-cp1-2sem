import React, { useState } from "react";
import MediaAluno from "./componentes/MediaAluno";

export default function App() {
  const [aluno, setAluno] = useState({
    nome: "Joaquim",
    rm: 99999,
    turma: "1TDSZ",
  });

  const nota1 = 10;
  const nota2 = 10;
  const nota3 = 10;

  return (
    <>
      <h1>CP1 de RWD 1º SEMESTRE</h1>
      <MediaAluno aluno={aluno} nota1={nota1} nota2={nota2} nota3={nota3} />
    </>
  );
}
