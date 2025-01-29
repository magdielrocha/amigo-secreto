let amigos = [];

// Adiciona nomes ao array
function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nomes = input.value.trim();

  if (nomes === '') {
    alert('Digite um nome válido');
    input.focus();
  } else {
    amigos.push(nomes);
    limpaCampo();
    atualizarLista();
  }
}

// Limpa o campo do input
function limpaCampo() { 
  let campo = document.querySelector('input');
  campo.value = '';
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let amigo of amigos) {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

// Sorteia um nome da lista
function sortearAmigo() {
  let resultado = document.getElementById('resultado');
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de realizar o sorteio.');
    return;
  }
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indiceSorteado];
  resultado.innerHTML = `${nomeSorteado}`;
}


