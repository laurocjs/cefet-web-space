// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let botoes = document.querySelectorAll('.botao-expandir-retrair');
let botaoClicado = (e) => {
  if (e.currentTarget.innerText === '+') {
    e.currentTarget.innerText = '-';
    e.currentTarget.parentElement.classList.add('expandido');
  }
  else {
    e.currentTarget.innerText = '+';
    e.currentTarget.parentElement.classList.remove('expandido');
  }
}

for (let botao of botoes) {
  botao.addEventListener('click', botaoClicado);
}
