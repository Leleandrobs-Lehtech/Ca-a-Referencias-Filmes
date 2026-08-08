	var filme = "";
			
	var nemo = "nemo" || ""procurando nemo"	;	

			

			function resposta() {
				 // Primeiro bloco 
				 

				filme = document.getElementById("resp") . value ;
				document.getElementById("resp") . value = "" ;
				if (filme == "nemo" ||  filme === "procurando nemo"){
				document.getElementById('nemo').style.display = 'block';

				
				
			}
			}	
			function fechar(){
				document.getElementById('alert').style.display = 'none';
			}function fechar2(){
				document.getElementById('instrucao').style.display = 'none';
			}function mostrar(){
				document.getElementById('instrucao').style.display = 'block';
			}function descricao(){
				
				document.getElementById('vai').style.display = 'none';
				document.getElementById('Placar').style.display = 'none';
				document.getElementById('resp').style.display = 'none';
				document.getElementById('pontof').style.display = 'block';
				var poit = parseInt(document.getElementById('Placar').value);
				 if (poit == "1"){
				 	document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/1pt.html';
				 	document.getElementById('msgf').innerHTML='Parabéns, você encontrou 1 filme !';
				}else if (poit == "2"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/2pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 2 filmes !';
				}else if (poit == "3"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/3pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 3 filmes !';
				}else if (poit == "4"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/4pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 4 filmes !';
				}else if (poit == "5"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/5pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 5 filmes !';
				}else if (poit == "6"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/6pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 6 filmes !';
				}else if (poit == "7"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/7pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 7 filmes !';
				}else if (poit == "8"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/8pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 8 filmes !';
				}else if (poit == "9"){
					document.getElementById('muda').href = 'https://www.facebook.com/sharer/sharer.php?u=http://referencias.rf.gd/9pt.html';
					document.getElementById('msgf').innerHTML='Parabéns, você encontrou 9 filmes !';
				}
			}