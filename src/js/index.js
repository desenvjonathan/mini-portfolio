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
const tabs = document.querySelectorAll(".tab");


//forEach (para cada), ou seja, para cada item da lista abas
tabs.forEach(tab => {
  //- passo 2 - dar um jeito de identificar o clique no elemento da aba
  tab.addEventListener("click", function() {
    //ctrl + ; COMENTA A LINHA DE CÓDIGO
    //se a minha aba contém essa classe "selecionado", parar o código com o return sem valor
    if(tab.classList.contains("selected")){
      return;
    };

    selectTab(tab)

    showInfosTab(tab)
  });
});

function selectTab(tab) {
  //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
  const tabSelected = document.querySelector(".tab.selected");
  tabSelected.classList.remove("selected");

  //- passo 4 - marcar a aba clicada como selecionado
  tab.classList.add("selected");
}

function showInfosTab(tab) {
  //- passo 5 - esconder o conteúdo anterior
  const infoSelected = document.querySelector(".info.selected");
  infoSelected.classList.remove("selected");

  // - passo 6 - mostrar o conteúdo da aba selecionada
  //código para pegar o ID da aba selecionada
  const idElementInfosTab = `info-${tab.id}`;

  //adiciona o ID do elemento que eu quero mostrar ao clicar
  const infoToBeShown = document.getElementById(idElementInfosTab)
  infoToBeShown.classList.add("selected");
}