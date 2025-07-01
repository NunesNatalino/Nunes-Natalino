// Script para adicionar cursos ao carrinho
const cursos = [
  {
    nome: 'Curso de Desenvolvimento Masculino',
    preco: 197.00
  },
  {
    nome: 'Curso de Marketing Digital',
    preco: 149.00
  },
  {
    nome: 'Curso de Gestão Empresarial',
    preco: 179.00
  }
];

function adicionarAoCarrinho(idx) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(cursos[idx]);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Curso adicionado ao carrinho!');
}

function renderizarCursos() {
  const lista = document.getElementById('lista-cursos');
  if (!lista) return;
  lista.innerHTML = '';
  cursos.forEach((curso, idx) => {
    lista.innerHTML += `<li><strong>${curso.nome}</strong> - R$ ${curso.preco.toFixed(2)} <button onclick='adicionarAoCarrinho(${idx})'>Adicionar ao carrinho</button></li>`;
  });
}

window.renderizarCursos = renderizarCursos;
window.adicionarAoCarrinho = adicionarAoCarrinho;
