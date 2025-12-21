const CONFIG = {
  escola: "ESCOLA TESTE FUNCIONANDO",
  emailProfessor: "teacher.vagnerrocha79@gmail.com"
};

let html = `<h3>${i+1}. (${q.habilidade})</h3><p>${q.q}</p>`;

if(q.imagem){
  html += `<img src="${q.imagem}" style="max-width:100%;margin:10px 0">`;
}

if(q.audio){
  html += `
    <audio controls style="margin:10px 0;width:100%">
      <source src="${q.audio}" type="audio/mpeg">
      Seu navegador não suporta áudio.
    </audio>
  `;
}


if(q.video){
  html += `
    <video controls style="max-width:100%;margin:10px 0">
      <source src="${q.video}" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>
  `;
}
