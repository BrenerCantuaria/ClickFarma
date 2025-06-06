type ProdutoCarrinho = {
  id: string;
  nome: string;
  preco: number;
  imagem: string;
  quantidade: number;
  dosagem: string;
  marca: string;
};

const carrinho: ProdutoCarrinho[] = [];

export function adicionarAoCarrinho(produto: Omit<ProdutoCarrinho, "quantidade">) {
  const existente = carrinho.find((item) => item.id === produto.id);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
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
