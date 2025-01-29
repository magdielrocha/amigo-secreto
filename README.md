<h1 align="center">🎁 Sorteio de Amigo Secreto</h1>
<p align="center">
  <img src="https://github.com/user-attachments/assets/9a66550e-1bc8-4c46-af10-fcbe3e576eff" alt="Amigo Secreto">
</p>


# 🪛 Objetivo do projeto

Este projeto foi desenvolvido para aprimorar habilidades em lógica de programação do Curso de Lógica de Programação do ONE, implementando a funcionalidade de um sorteio de Amigo Secreto em uma página web.

## 🚀 Funcionalidades

- **Adicionar amigos**: Insere nomes na lista de participantes do sorteio.
- **Listar amigos**: Exibe os nomes adicionados na tela.
- **Sortear um amigo**: Escolhe aleatoriamente um nome da lista.
- **Prevenção de erros**: Impede a adição de nomes vazios e o sorteio sem participantes.

## 📜 Código Principal

```javascript
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
```

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização básica.
- **JavaScript**: Implementação da lógica do sorteio.

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-GREEN" alt="Static Badge">
</p>

## 📌 Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/magdielrocha/amigo-secreto.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Adicione os nomes na lista.
4. Clique em **Sortear Amigo** para selecionar um nome aleatório.

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo como desejar.

---

Feito com ❤️ por [Magdiel Rocha](https://github.com/magdielrocha)




