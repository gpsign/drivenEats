let carrinho = 0;
const conteudo = document.querySelector(".conteudo");
const header = document.querySelector(".header");
const concluir = document.querySelector(".concluir");
const finalizarSobrepor = document.querySelector(".finalizarSobrepor");
const finalizar = document.querySelector(".finalizarSobrepor .finalizar");
const total = document.querySelector(".informacoesPedido .total").children[1];

function selecionar(comida) {
  /*Verifica em qual lista foi selecionado*/
  let lista = "." + comida.parentElement.classList.item(1);
  let anterior = document.querySelector(lista + " .selecionado");
  carrinho++;
  comida.classList.toggle("selecionado");
  if(document.querySelector(lista + " .selecionado") == null)carrinho--;

  if (anterior != null) {
    anterior.classList.remove("selecionado");
    carrinho--;
  }

  console.log(carrinho);
  
  liberarBotao();
}

function liberarBotao() {
  let botao = document.querySelector(".concluir button");
  if (carrinho != 3) {
    botao.innerHTML = "Selecione os 3 itens <br />para fechar o pedido";
    botao.disabled = true;
  } else {
    botao.innerHTML = "Fechar pedido";
    botao.disabled = false;
  }
}

function calcular(prato, bebida, sobremesa) {
  prato = prato.replace(",", ".");
  bebida = bebida.replace(",", ".");
  sobremesa = sobremesa.replace(",", ".");
  let total = Number(prato) + Number(bebida) + Number(sobremesa);
  return total.toFixed(2);
}

function fundoBlur() {
  if (finalizarSobrepor.classList.contains("esconder")) {
    conteudo.classList.add("blur");
    header.classList.add("blur");
    concluir.classList.add("blur");
    finalizarSobrepor.classList.remove("esconder");
  } else {
    conteudo.classList.remove("blur");
    header.classList.remove("blur");
    concluir.classList.remove("blur");
    finalizarSobrepor.classList.add("esconder");
  }
}

function dialogPedido() {
  fundoBlur();

  /*Aplica nome e preco do prato na lista de compras*/
  let pratoNome = document.querySelector(".prato .selecionado .nome").innerHTML;
  let pratoPreco = document.querySelector(
    ".prato .selecionado .preco"
  ).innerHTML;
  let info = document.querySelector(".pedido .prato");

  info.children[0].innerHTML = pratoNome;
  info.children[1].innerHTML = pratoPreco;

  /*Aplica nome e preco da bebida na lista de compras*/
  let bebidaNome = document.querySelector(
    ".bebida .selecionado .nome"
  ).innerHTML;
  let bebidaPreco = document.querySelector(
    ".bebida .selecionado .preco"
  ).innerHTML;

  info = document.querySelector(".pedido .bebida");
  info.children[0].innerHTML = bebidaNome;
  info.children[1].innerHTML = bebidaPreco;

  /*Aplica nome e preco da sobremesa na lista de compras*/
  let sobremesaNome = document.querySelector(
    ".sobremesa .selecionado .nome"
  ).innerHTML;
  let sobremesaPreco = document.querySelector(
    ".sobremesa .selecionado .preco"
  ).innerHTML;

  info = document.querySelector(".pedido .sobremesa");
  info.children[0].innerHTML = sobremesaNome;
  info.children[1].innerHTML = sobremesaPreco;

  total.innerHTML =
    "R$ " + calcular(pratoPreco, bebidaPreco, sobremesaPreco).replace(".", ",");
}

function enviarPedido() {
  let prato =
    "\n- Prato: " +
    document.querySelector(".prato .selecionado .nome").innerHTML;
  let bebida =
    "\n- Bebida: " +
    document.querySelector(".bebida .selecionado .nome").innerHTML;
  let sobremesa =
    "\n- Sobremesa: " +
    document.querySelector(".sobremesa .selecionado .nome").innerHTML;

  let mensagem =
    "Olá, gostaria de fazer o pedido:" +
    prato +
    bebida +
    sobremesa +
    "\n" + "Total: " +
    total.innerHTML;
  mensagem +=
    "\n\n" + "Nome: " + prompt("Nome:") + "\n" + "Endereco: " + prompt("Endereço");

  window
    .open(
      "https://wa.me/5545998491326?text=" + encodeURIComponent(mensagem),
      "_blank"
    )
    .focus();
}