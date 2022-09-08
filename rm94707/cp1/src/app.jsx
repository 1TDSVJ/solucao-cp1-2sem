import React from "react"
import { useState } from "react"
import MediaAluno from "./componentes/mediaAluno/MediaAluno"

export default function App() {

    const [aluno, setAluno] = useState({
        nome: "Vinicius Reis",
        rm: 94707,
        turma: "1TDSVJ"
    })

    const nota1 = 7
    const nota2 = 6
    const nota3 = 8

    return (
        <>
            <h1>CP1 de RWD 1º SEMESTRE</h1>

            <div className="container">
                <p>Apresentando com SASS</p>
            </div>
            
            <MediaAluno alunoProps={aluno} nota1Props={nota1} nota2Props={nota2} nota3Props={nota3} />
        </>
    )
}


// 2 – No App.jsx crie a seguinte estrutura. ( 3 Pontos)
// a) Crie um fragmento.
// b) Um elemento h1 com o texto “CP1 de RWD 1º SEMESTRE”.
// c) Declare um useState de nome aluno que recebe um objeto do tipo aluno com os
// seguintes atributos:
// 1 – nome = Joaquim
// 2 – rm = 99999
// 3 – turma = 1TDSZ
// d) Três constantes declaradas como nota1, nota2 e nota3.