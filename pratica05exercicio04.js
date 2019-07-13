function somar () {
	
	var n1 = document.getElementById ("primeiroNumero").value;
	var vet = [];
	
	if (n1 % 2 == 0) {
		do {
			var adicionar = vet.unshift(n1);
			n1 -= 2;
		}	while (n1 >= 0);
	}	else {
			n1 -= 1;
			do {
				var adicionar = vet.unshift(n1);
				n1 -= 2;
			} while (n1 >= 0);
		}

	for (i = 0; i < vet.length; i++) {
		document.getElementById("soma").innerHTML += vet[i] + ', ';		
	}
	
	
}