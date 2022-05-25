// Exemplos gerais de JQuery
const titulo = //document.querySelector vira $ 
$ (`h1`);
console.log(titulo);

/* textContent e innerHTML */
titulo.text(`Relação de Candidatos`);

/* Script para carregar a lista de candidatos da API */

let urlCandidatos = `http://localhost:3000/candidatos`
const botao = $(`#carregar`)
const lista = $(`#lista`)

//on é equivalente ao addEventlicener
botao.on(`click`, function (){
  console.log(`ok!`);
  $.ajax({
    url: urlCandidatos, 
    dataType: `Json`,
    method: `GET`, // leiturade dados
  
  success: function(resposta){
  
    // then
     console.log(resposta);
     lista.html("")
    /* Loop $.each
    Para cada resposta vinda da API, acesse o inice (valor numerico e o conteudo*/

    $.each(resposta, function(indice, conteudo){
      console.log(indice);
      console.log(conteudo);

      lista.append(
          `<li class="list-group-item">
          ${conteudo.nome}
          </li>`
      ) 
      })}})})