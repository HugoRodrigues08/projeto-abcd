let urlCandidatos = "http://localhost:3000/candidatos"

// Selecionando os campos no HTML
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

formulario.addEventListener("submit", function(event){
  event.preventDefault();

  // Montando um objet com dados do formulario
  let dados = {
    nome: campoNome.value,
    data: campoData.value,
    telefone: campoTelefone.value,
    email: campoEmail.value,

      // Instrução abaixo permite pegar o título da vaga escolhida
  
    vaga: campoVaga.selectedOptions[0].textContent 
  };
  console.log(dados);

 /* Transmissão dos dados para a API (Técnica Ajax) */
 fetch(urlCandidatos, {
  // ENVIO DE DADOS
  method: "POST", 

  // Converter os dados em JSON
  body: JSON.stringify(dados), 

  // Cabeçalho da mensagem de dados
  headers: { // importante p/ back-end api
      'Content-type' : 'application/json'
  }
})
.then(resposta => resposta.json())
.then(dados => {
  console.log(dados);
  alert("Dados enviados com sucesso!")
});

});



/* Ativação da mascara para o telefone (usando JQuery) */
$(campoTelefone).mask("(00) 0000-0000");

// a mascar acimar sera (11) 2222-2222 (obs: 0 é igual um coringa para numeros)