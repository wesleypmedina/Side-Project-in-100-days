

const btn = document.querySelector('.btn');
const confirm = document.querySelector('.verificar');
const reset = document.querySelector('.reset');
btn.addEventListener('click',criarSec);
function criarSec(){
	const table = document.querySelector('.tabela');
	table.style.opacity = "0";
	const lista = document.querySelector('.lista');
	lista.style.opacity = '1';
	const inserir = document.querySelector('input');
	inserir.style.opacity = '1';
	const txt = document.querySelector('.exp');
	txt.textContent = "Digite algum texto:";
	const confirm = document.querySelector('.verificar');
	confirm.style.opacity = '1';
	const reset = document.querySelector('.reset');
	reset.style.opacity = "1";
	const start = document.querySelector('.btn');
	start.style.opacity = '0';
}

	reset.addEventListener('click',resetar);
	confirm.addEventListener('click',verificar);

function resetar(){
	const table = document.querySelector('.tabela');
	table.style.opacity = "1";
	const lista = document.querySelector('.lista');
	lista.style.opacity = '0';
	const inserir = document.querySelector('input');
	inserir.style.opacity = '0';
	const txt = document.querySelector('.exp');
	txt.textContent = "Exemplo:";
	const confirm = document.querySelector('.verificar');
	confirm.style.opacity = '0';
	const reset = document.querySelector('.reset');
	reset.style.opacity = "0";
	const start = document.querySelector('.btn');
	start.style.opacity = '1';
}
function verificar(){
	const valor = document.querySelector('input').value;
	resultado(valor);
}

