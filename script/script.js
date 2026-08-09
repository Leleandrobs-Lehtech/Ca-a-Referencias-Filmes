var filme = "";
var nemo = 'Procurando nemo';
var maskara = 'O maskara';
var planeta = 'Planeta dos macacos';
var senhor = 'Senhor dos aneis';
var caribe = 'Piratas do caribe';			
var ordinario = 'Extraordinario';			
var vorazes = 'Jogos vorazes';			
var preto = 'Mib homens de preto';
var manji = 'Jumanji';
var tix = 'Matrix';	

var nemo2 = 'procurando nemo';
var maskara2 = 'o maskara';
var planeta2 = 'planeta dos macacos';
var senhor2 = 'senhor dos aneis';
var caribe2 = 'piratas do caribe';			
var ordinario2 = 'extraordinario';			
var vorazes2 = 'jogos vorazes';			
var preto2 = 'mib homens de preto';
var manji2 = 'jumanji';
var tix2 = 'matrix';	

var nemo3 = 'Procurando Nemo';
var maskara3 = 'O Maskara';
var planeta3 = 'Planeta dos Macacos';
var senhor3 = 'Senhor dos Aneis';
var caribe3 = 'Piratas do Caribe';			
var ordinario3 = 'Extraordinario';			
var vorazes3 = 'Jogos Vorazes';			
var preto3 = 'Mib Homens de Preto';
var manji3 = 'Jumanji';
var tix3 = 'Matrix';			

function soma(){

    var pontos = parseInt(document.getElementById('Placar').value);

    document.getElementById('Placar').value = pontos + 1;

    // Quando encontrar os 10 filmes
    if (pontos == 9){

    let total = pontos + 1;

    document.getElementById('msgf').innerHTML =
        'Parabéns! Você encontrou ' + total + ' filmes!';

    document.getElementById('pontof').style.display = 'flex';

    document.getElementById('muda').href =
        'https://leleandrobs-lehtech.github.io/Ca-a-Referencias-Filmes/10pt.html';
}
}

function resposta() {
	filme = document.getElementById("resp").value.trim().toLowerCase();
	document.getElementById("resp").value = "";

	if (
		filme != nemo && filme != maskara && filme != planeta &&
		filme != senhor && filme != caribe &&
		filme != ordinario && filme != vorazes && filme != preto &&
		filme != manji && filme != tix &&

		filme != nemo2 && filme != maskara2 && filme != planeta2 &&
		filme != senhor2 && filme != caribe2 &&
		filme != ordinario2 && filme != vorazes2 && filme != preto2 &&
		filme != manji2 && filme != tix2 &&

		filme != nemo3 && filme != maskara3 && filme != planeta3 &&
		filme != senhor3 && filme != caribe3 &&
		filme != ordinario3 && filme != vorazes3 && filme != preto3 &&
		filme != manji3 && filme != tix3
	){
		document.getElementById('alert').style.display = 'flex';

	}else if (filme == nemo || filme == nemo2 || filme == nemo3){
		document.getElementById('nemo').style.display = 'block';
		soma();
		nemo = nemo2 = nemo3 = '0';

	}else if (filme == maskara || filme == maskara2 || filme == maskara3){
		document.getElementById('mascara').style.display = 'block';
		soma();
		maskara = maskara2 = maskara3 = '0';

	}else if (filme == planeta || filme == planeta2 || filme == planeta3){
		document.getElementById('macaco').style.display = 'block';
		soma();
		planeta = planeta2 = planeta3 = '0';

	}else if (filme == senhor || filme == senhor2 || filme == senhor3){
		document.getElementById('anel').style.display = 'block';
		soma();
		senhor = senhor2 = senhor3 = '0';

	}else if (filme == caribe || filme == caribe2 || filme == caribe3){
		document.getElementById('pirata').style.display = 'block';
		soma();
		caribe = caribe2 = caribe3 = '0';

	}else if (filme == ordinario || filme == ordinario2 || filme == ordinario3){
		document.getElementById('extra').style.display = 'block';
		soma();
		ordinario = ordinario2 = ordinario3 = '0';

	}else if (filme == vorazes || filme == vorazes2 || filme == vorazes3){
		document.getElementById('jogos').style.display = 'block';
		soma();
		vorazes = vorazes2 = vorazes3 = '0';

	}else if (filme == preto || filme == preto2 || filme == preto3){
		document.getElementById('mib').style.display = 'block';
		soma();
		preto = preto2 = preto3 = '0';

	}else if (filme == manji || filme == manji2 || filme == manji3){
		document.getElementById('jumanji').style.display = 'block';
		soma();
		manji = manji2 = manji3 = '0';

	}else if (filme == tix || filme == tix2 || filme == tix3){
		document.getElementById('matrix').style.display = 'block';
		soma();
		tix = tix2 = tix3 = '0';
	}
}

function fechar(){
	document.getElementById('alert').style.display = 'none';
}

function fechar2(){
	document.getElementById('instrucao').style.display = 'none';
}

function mostrar(){
	document.getElementById('instrucao').style.display = 'block';
}

// 🔥 NOVO FINAL COM CONFIRMAÇÃO
function descricao(){

    // Pega a quantidade de acertos
    var pontos = parseInt(document.getElementById('Placar').value);

    // Esconde os controles do jogo
    document.getElementById('vai').style.display = 'none';
    document.getElementById('Placar').style.display = 'none';
    document.getElementById('resp').style.display = 'none';

    // Mostra a tela final
    document.getElementById('pontof').style.display = 'flex';

    // Mensagem
    if (pontos == 1){
        document.getElementById('msgf').innerHTML =
        'Você encontrou 1 filme!';
    }
    else {
        document.getElementById('msgf').innerHTML =
        'Você encontrou ' + pontos + ' filmes!';
    }

    // Define a página de compartilhamento
    document.getElementById('muda').href =
        'https://leleandrobs-lehtech.github.io/Ca-a-Referencias-Filmes/' 
        + pontos + 'pt.html';
}

// 🔥 BOTÃO NÃO
function fecharFim(){

    document.getElementById('pontof').style.display = 'none';

    document.getElementById('vai').style.display = '';
    document.getElementById('Placar').style.display = '';
    document.getElementById('resp').style.display = '';
    document.getElementById('mdesc').style.display = '';
}

// 🔥 BOTÃO SIM
function reiniciar(){

    location.reload();
}

function compartilhar(){

    var pontos = parseInt(document.getElementById('Placar').value);

    var url = window.location.href;

    var facebook =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(url);

    window.open(
        facebook,
        "facebook-share",
        "width=600,height=500"
    );
}

function sairDoJogo(){

    window.location.href = "COLOQUE_AQUI_O_LINK_DO_SEU_GOOGLE_SITES";
}
