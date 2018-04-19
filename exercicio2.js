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

let trocaImagem = (valor) => {
  debugger;
  let posicao = todasAsImagens.indexOf(imagem.getAttribute('src').split('/').pop()) + valor;
  posicao = (posicao + todasAsImagens.length) % todasAsImagens.length;
  let enderecoDaImagem = servidorDasImagens + todasAsImagens[posicao];
  imagem.setAttribute('src', enderecoDaImagem);
};

botaoAnterior.addEventListener('click', () => trocaImagem(-1));
botaoProximo.addEventListener('click', () => trocaImagem(1));
