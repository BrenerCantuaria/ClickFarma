// utils/carrinho.ts
type ProdutoCarrinho = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: string;
  dosagem: string;
  marca: string;
};

const carrinho: ProdutoCarrinho[] = [];

export function adicionarAoCarrinho(produto: ProdutoCarrinho) {
  carrinho.push(produto);
}

export function obterCarrinho() {
  return carrinho;
}

export function limparCarrinho() {
  carrinho.length = 0;
}


export function removerDoCarrinho(id: string) {
  const index = carrinho.findIndex((item) => item.id === id);
  if (index !== -1) {
    carrinho.splice(index, 1);
  }
}
