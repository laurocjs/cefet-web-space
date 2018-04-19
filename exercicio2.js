// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let imagem = document.querySelector('#slide');
let botaoAnterior = document.querySelector('#anterior');
let botaoProximo = document.querySelector('#proximo');

botaoAnterior.addEventListener('click', () => {
  let posicao = todasAsImagens.indexOf(imagem.getAttribute('src').split('/').pop()) - 1;
  if (posicao < 0) {
    posicao = todasAsImagens.length - 1;
  }
  let enderecoDaImagem = servidorDasImagens + todasAsImagens[posicao];
  imagem.setAttribute('src', enderecoDaImagem);
});

botaoProximo.addEventListener('click', () => {
  let posicao = todasAsImagens.indexOf(imagem.getAttribute('src').split('/').pop()) + 1;
  if (posicao >= todasAsImagens.length) {
    posicao = 0;
  }
  let enderecoDaImagem = servidorDasImagens + todasAsImagens[posicao];
  imagem.setAttribute('src', enderecoDaImagem);
});
