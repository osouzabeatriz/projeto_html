function CalculaIdade() {
	var nome = document.getElementById("idnome").value;
	var data = document.getElementById("iddata").value;
	var lista = data.split("/");
	var ano = parseInt(lista[2]);
	var mes = parseInt(lista[1]);
	var dia = parseInt(lista[0]);
	var idade = 2019 - ano;
	if(mes >= 3 && dia >= 30) {
		idade = idade - 1;
	}
	alert(nome + ", você tem " + idade + " anos, zé =)");
}