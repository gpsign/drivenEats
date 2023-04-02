let carrinho = 0;
const conteudo = document.querySelector(".conteudo");
const header = document.querySelector(".header");
const concluir = document.querySelector(".concluir");
const finalizarSobrepor = document.querySelector(".finalizarSobrepor");
const finalizar = document.querySelector(".finalizarSobrepor .finalizar");
const usuarioSobrepor = document.querySelector(".usuarioSobrepor");
const infoUsuario = document.querySelector(".finalizarSobrepor .infoUsuario");
const nomeUsuario = document.querySelector(".infoUsuario .nomeUsuario");
const enderecoUsuario = document.querySelector(".infoUsuario .enderecoUsuario");

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

function calcular(prato, bebida, sobremesa) {
  prato = prato.replace(",", ".");
  bebida = bebida.replace(",", ".");
  sobremesa = sobremesa.replace(",", ".");
  let total = Number(prato) + Number(bebida) + Number(sobremesa);
  return total.toFixed(2);
}

function dialogPedido() {
  /*Blur da tela e mostrar a caixa*/
  conteudo.classList.add("blur");
  header.classList.add("blur");
  concluir.classList.add("blur");
  finalizarSobrepor.classList.remove("esconder");

  /*Aplica nome e preco do prato na lista de compras*/
  let pratoNome = document.querySelector(".prato .selecionado .nome").innerHTML;
  let pratoPreco = document.querySelector(
    ".prato .selecionado .preco"
  ).innerHTML;
  let info = document.querySelector(".pedido .prato");
  let infoNome = info.children[0];
  let infoPreco = info.children[1];

  infoNome.innerHTML = pratoNome;
  infoPreco.innerHTML = pratoPreco;

  /*Aplica nome e preco da bebida na lista de compras*/
  let bebidaNome = document.querySelector(
    ".bebida .selecionado .nome"
  ).innerHTML;
  let bebidaPreco = document.querySelector(
    ".bebida .selecionado .preco"
  ).innerHTML;

  info = document.querySelector(".pedido .bebida");
  infoNome = info.children[0];
  infoPreco = info.children[1];

  infoNome.innerHTML = bebidaNome;
  infoPreco.innerHTML = bebidaPreco;

  /*Aplica nome e preco da sobremesa na lista de compras*/
  let sobremesaNome = document.querySelector(
    ".sobremesa .selecionado .nome"
  ).innerHTML;
  let sobremesaPreco = document.querySelector(
    ".sobremesa .selecionado .preco"
  ).innerHTML;

  info = document.querySelector(".pedido .sobremesa");
  infoNome = info.children[0];
  infoPreco = info.children[1];

  infoNome.innerHTML = sobremesaNome;
  infoPreco.innerHTML = sobremesaPreco;

  let total = document.querySelector(".informacoesPedido .total");
  total.children[1].innerHTML =
    "R$ " + calcular(pratoPreco, bebidaPreco, sobremesaPreco).replace(".", ",");
}

function dialogUsuario(){
  finalizarSobrepor.classList.add("esconder");
  usuarioSobrepor.classList.remove("esconder");
}

function cancelarPedido() {
  conteudo.classList.remove("blur");
  header.classList.remove("blur");
  concluir.classList.remove("blur");
  finalizarSobrepor.classList.add("esconder");
}

function cancelarDados(){
  finalizarSobrepor.classList.remove("esconder");
  usuarioSobrepor.classList.add("esconder");
}