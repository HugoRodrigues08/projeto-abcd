// Endereço da API json-server para VAGAS
let url = "http://localhost:3000/vagas"

// Elemento a ser preenchido
const selectVagas = document.querySelector("#vaga") 

/* Ajax (técnica de acesso a dados de API) */

// 1) Acessamos a URL da API em que estão os dados
fetch(url)

//2) e então (then) colete a resposta do servidor no fomato json
.then( resposta => resposta.json() ).

// 3) Capture os dados da resposta, e faça oque quiser com eles
then ( dados => {
  console.log(dados);

  //Definindo um optino vazio antes de exibir as vagas
  selectVagas.innerHTML = "<option></option>";

  for( let vaga of  dados){
    let opcao = document.createElement (`option`);
    opcao.textContent = vaga.titulo;
    opcao.valuem = vaga.id;
    selectVagas.appendChild(opcao);
  }
});

