/*
  SEMPRE FAZER A ORGANIZAÇÃO DAS IDEIAS PARA FACILITAR A ESCRITA DO CÓDIGO
  //ctrl + ; COMENTA A LINHA DE CÓDIGO

  OBJETIVO - quando clicarmos na aba, temos que mostrar
  o conteúdo da aba que foi clicada pelo usuário, 
  e esconder o conteúdo na aba anterior

  - passo 1 - dar um jeito de pegar os elementos que
  representam as abas no HTML

  - passo 2 - dar um jeito de identificar o clique no
  elemento da aba

  - passo 3 - quando o usuário clicar, desmarcar a aba selecionada

  - passo 4 - marcar a aba clicada como selecionado

  - passo 5 - esconder o conteúdo anterior

  - passo 6 - mostrar o conteúdo da aba selecionada
*/

//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");


//forEach (para cada), ou seja, para cada item da lista abas
abas.forEach(aba => {
  //- passo 2 - dar um jeito de identificar o clique no elemento da aba
  aba.addEventListener("click", function() {
    //ctrl + ; COMENTA A LINHA DE CÓDIGO
    //se a minha aba contém essa classe "selecionado", parar o código com o return sem valor
    if(aba.classList.contains("selecionado")){
      return;
    };

    selecionarAba(aba)

    mostrarInformacoesDaAba(aba)
  });
});

function selecionarAba(aba) {
  //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  //- passo 4 - marcar a aba clicada como selecionado
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  //- passo 5 - esconder o conteúdo anterior
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  // - passo 6 - mostrar o conteúdo da aba selecionada
  //código para pegar o ID da aba selecionada
  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

  //adiciona o ID do elemento que eu quero mostrar ao clicar
  const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
  informacaoASerMostrada.classList.add("selecionado");
}