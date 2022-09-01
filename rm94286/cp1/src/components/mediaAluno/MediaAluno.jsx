import React from "react";

export default function MediaAluno(props) {
  const media = (nota1, nota2, nota3) => {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
  };

  const corMedia = (media) => {
    media = media.toFixed(1);
    if (media === 0) {
      return <span style={{ color: "#ff0000" }}>{media}</span>;
    } else if (media > 0 && media < 6) {
      return <span style={{ color: "#ff8000" }}>{media}</span>;
    } else {
      return <span style={{ color: "#00ff33" }}>{media}</span>;
    }
  };
  return (
    <div>
      <p>
        <strong>Nome</strong>: {props.aluno.nome}
      </p>
      <p>
        <strong>Rm</strong>: {props.aluno.rm}
      </p>
      <p>
        <strong>Turma</strong>: {props.aluno.turma}
      </p>
      <p>
        <strong>Media</strong>:
        {corMedia(media(props.nota1, props.nota2, props.nota3))}
      </p>
    </div>
  );
}
