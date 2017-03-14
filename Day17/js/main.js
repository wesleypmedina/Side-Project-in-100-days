const tela = document.createElement('canvas');
const pincel = tela.getContext('2d');
tela.width = window.innerWidth - 10;
tela.height = 400;
document.body.appendChild(tela);

const canvas = document.querySelector('canvas');
