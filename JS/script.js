function selecionar(comida) {
  /*Verifica em qual lista foi selecionado*/
  let lista = "." + comida.parentElement.classList.item(1);
  let anterior = document.querySelector(lista + " .selecionado");
  if (anterior != null && anterior != comida)
    anterior.classList.remove("selecionado");
  comida.classList.toggle("selecionado");
}
