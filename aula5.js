var listaJogadores = [];
var jogador = {};
var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela(jogador) {
  var linhaJogador = document.querySelector(`tr[data-nome="${jogador.nome}"]`);

  if (!linhaJogador) {
    // Cria uma nova linha se não existir
    var novaLinha = document.createElement("tr");
    novaLinha.setAttribute("data-nome", jogador.nome);
    novaLinha.innerHTML = `
      <td>${jogador.nome}</td>
      <td>${jogador.vitoria}</td>
      <td>${jogador.empate}</td>
      <td>${jogador.derrota}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
      <td><button onClick="adicionarEmpate('${jogador.nome}')">Empate</button></td>
      <td><button onClick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
    `;
    elementoTabela.appendChild(novaLinha);
  } else {
    // Atualiza os valores na linha existente
    linhaJogador.innerHTML = `
      <td>${jogador.nome}</td>
      <td>${jogador.vitoria}</td>
      <td>${jogador.empate}</td>
      <td>${jogador.derrota}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
      <td><button onClick="adicionarEmpate('${jogador.nome}')">Empate</button></td>
      <td><button onClick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
    `;
  }
}

function insereJogador() {
  var promptJogador = prompt("Insira o nome do Jogador para incluir na tabela");
  if (promptJogador != null && promptJogador.trim() !== "") {
    var pos = listaJogadores.indexOf(promptJogador);
    if (pos !== -1) {
      alert("Nome já adicionado");
    } else {
      listaJogadores.push(promptJogador);
      jogador[promptJogador] = {
        nome: promptJogador,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
      };
      exibirNaTela(jogador[promptJogador]);
    }
  } else {
    alert("Insira um nome válido");
  }
}

function adicionarVitoria(nome) {
  var jogadorAtual = jogador[nome];
  jogadorAtual.vitoria++;
  jogadorAtual.pontos += 3;
  exibirNaTela(jogadorAtual);
}

function adicionarEmpate(nome) {
  var jogadorAtual = jogador[nome];
  jogadorAtual.empate++;
  jogadorAtual.pontos++;
  exibirNaTela(jogadorAtual);
}

function adicionarDerrota(nome) {
  var jogadorAtual = jogador[nome];
  jogadorAtual.derrota++;
  exibirNaTela(jogadorAtual);
}
