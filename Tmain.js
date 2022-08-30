

var NomeDasPessoas = [];
    
function enviar()
{
    var NomeConvidado = document.getElementById("nome1").value;
	Código para adicionar o nome do convidado // NomeDasPessoas.push(NomeConvidado);

	console.log(NomeConvidado);
        
    console.log(NomeDasPessoas);
    var ComprimentoDoNome = NomeDasPessoas.length; 
    console.log(ComprimentoDoNome);
	document.getElementById("NomeEmExibiçao3").innerHTML=NomeDasPessoas.toString();
	
   }

function organizar()
{
	Código para colocar o nome das pessoas na ordem alfabética// NomeDasPessoas.sort(); 
	var i= NomeDasPessoas.join("<br>");
    console.log(NomeDasPessoas);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function mostrar()
{
    O método join() junta todos os elementos de um array em uma string  //var i= NomeDasPessoas.join("<br>");
	console.log(NomeDasPessoas);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sortButton").style.display="block";
	}

function ?() //Escreva o nome da função que está sendo chamada na linha 39 do código html
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<NomeDasPessoas.length; j++)
		{
			if(s==NomeDasPessoas[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
	console.log("Nome encontrado "+found+" vez(es)");
}
