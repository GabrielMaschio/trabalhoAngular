import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService {
    private itensCarrinho: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.itensCarrinho.push(produto);
    }

    listarProdutos(): Produto[] {
        return this.itensCarrinho;
    }

    limparCarrinho(): void {
        this.itensCarrinho = [];
    }

    removerProduto(index: number): void {
        this.itensCarrinho.splice(index-1, 1);
    }

    calcularTotal(): number {
        return this.itensCarrinho.reduce((total, item) => total + parseFloat(item.valor), 0);
    }

    calcularTotalDesconto(itens: Produto[]): number {
        return itens.reduce((totalDesconto, produto) => {
            const valor = parseFloat(produto.valor.toString());
            const desconto = parseFloat(produto.desconto.toString());
            const valorDesconto = valor * (desconto / 100);
            return totalDesconto + valorDesconto;
        }, 0);
    }
}