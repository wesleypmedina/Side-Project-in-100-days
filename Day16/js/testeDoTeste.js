	function resultado(txt){
	var armazenador = 0;
	let array = [];
	for (var i = 0 in txt) {
		if (txt[i] == 'a' || txt[i] == 'b' || txt[i] == 'c') {
			armazenador = 2;
			array.push(armazenador);
		}
		if (txt[i] == 'd' || txt[i] == 'e' || txt[i] == 'f') {
			armazenador = 3;
			array.push(armazenador);
		}
		if (txt[i] == 'g' || txt[i] == 'h' || txt[i] == 'i') {
			armazenador = 4;
			array.push(armazenador);
		}
		if (txt[i] == 'j' || txt[i] == 'k' || txt[i] == 'l') {
			armazenador = 5;
			array.push(armazenador);
		}
		if (txt[i] == 'm' || txt[i] == 'n' || txt[i] == 'o') {
			armazenador = 6;
			array.push(armazenador);
		}
		if (txt[i] == 'p' || txt[i] == 'q' || txt[i] == 'r' || txt[i] == 's') {
			armazenador = 7;
			array.push(armazenador);
		}
		if (txt[i] == 't' || txt[i] == 'u' || txt[i] == 'v') {
			armazenador = 8;
			array.push(armazenador);
		}
		if (txt[i] == 'w' || txt[i] == 'x' || txt[i] == 'y') {
			armazenador = 9;
			array.push(armazenador);
		} else if (txt[i] == " ") {
			armazenador = "-";
			array.push(armazenador);
		}

	}
	const ver = array.join("").toString();
		listagem(ver,txt);
	}

	function listagem(valor,txt){
		const lista = document.querySelector('.lista');
		const nome = document.createElement('li');
		nome.textContent = txt;
		const numero = document.createElement('li');
		numero.textContent = valor;
		lista.appendChild(nome);
		lista.appendChild(numero);
	}