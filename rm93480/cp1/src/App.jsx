import React, { useState } from "react";
import MediaAluno from "./components/mediaAluno/MediaAluno";

export default function App() {

    const [aluno, setAluno] = useState({
        'nome': 'Jerinelson',
        'rm': '99999',
        'turma': '1TDZ'
    });

    const nota1 = 7;
    const nota2 = 9;
    const nota3 = 5;

    return (
        <div>
            <h1>CP1 - 2°Semestre</h1>
            <MediaAluno aluno = {aluno} nota1={nota1} nota2={nota2} nota3={nota3} />
        </div>
    )
}