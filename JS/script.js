let carrinho = 0;

function selecionar(comida) {
  /*Verifica em qual lista foi selecionado*/
  let lista = "." + comida.parentElement.classList.item(1);
  let anterior = document.querySelector(lista + " .selecionado");

  carrinho++;

  if (anterior != null) {
    if (anterior != comida) anterior.classList.remove("selecionado");

    if (anterior === comida) carrinho--;
    if (
      anterior.parentElement.classList.item(1) ==
      comida.parentElement.classList.item(1)
    ) {
      carrinho--;
    }
  }

  comida.classList.toggle("selecionado");
  liberarBotao();
}

function liberarBotao() {
  let botao = document.querySelector(".concluir button");
  if (carrinho != 3) botao.disabled = true;
  if (carrinho === 1)
    botao.innerHTML = "Selecione mais 2 itens<br />para fechar o pedido";
  else if (carrinho === 2)
    botao.innerHTML = "Selecione mais 1 item<br />para fechar o pedido";
  else if (carrinho === 3) {
    botao.innerHTML = "Fechar o pedido";
    botao.disabled = false;
  } else botao.innerHTML = "Selecione os 3 itens<br />para fechar o pedido";
}

function finalizar() {
  /*Blur da tela e mostrar a caixa*/
  let conteudo = document.querySelector(".conteudo");
  let header = document.querySelector(".header");
  let concluir = document.querySelector(".concluir");
  let finalizar = document.querySelector(".finalizarSobrepor");
  conteudo.classList.add("blur");
  header.classList.add("blur");
  concluir.classList.add("blur");
  finalizar.classList.remove("esconder");

  /*Aplica nome e preco do prato na lista de compras*/
  let pratoNome = document.querySelector(".prato .selecionado .nome");
  let pratoPreco = document.querySelector(".prato .selecionado .preco");
  let pratoFinal = document.querySelector(".pedido .prato");

  pratoFinal.children[0].innerHTML = pratoNome.innerHTML;
  pratoFinal.children[1].innerHTML = pratoPreco.innerHTML;

  /*Aplica nome e preco da bebida na lista de compras*/
  let bebidaNome = document.querySelector(".bebida .selecionado .nome");
  let bebidaPreco = document.querySelector(".bebida .selecionado .preco");
  let bebidaFinal = document.querySelector(".pedido .bebida");

  bebidaFinal.children[0].innerHTML = bebidaNome.innerHTML;
  bebidaFinal.children[1].innerHTML = bebidaPreco.innerHTML;

  /*Aplica nome e preco da sobremesa na lista de compras*/
  let sobremesaNome = document.querySelector(".sobremesa .selecionado .nome");
  let sobremesaPreco = document.querySelector(".sobremesa .selecionado .preco");
  let sobremesaFinal = document.querySelector(".pedido .sobremesa");

  sobremesaFinal.children[0].innerHTML = sobremesaNome.innerHTML;
  sobremesaFinal.children[1].innerHTML = sobremesaPreco.innerHTML;
}
