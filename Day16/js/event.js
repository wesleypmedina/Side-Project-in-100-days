

const btn = document.querySelector('.btn');
btn.addEventListener('click',criarSec);

function criarSec(){
	const table = document.querySelector('.tabela');
	table.style.opacity = "0";
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
		clickBtn(reset,confirm);
}
function clickBtn(a,b){
	a.addEventListener('click',resetar);
	b.addEventListener('click',confirmar)
}
function resetar(){
	const table = document.querySelector('.tabela');
	table.style.opacity = "1";
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
function confirmar(){
	const valor = document.querySelector('input');
	console.log(valor);
	return valor;
}