import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { CarrinhoService } from '../services/carrinho.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  itens: Produto[] = [];
  total: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
    this.itens = this.carrinhoService.listarProdutos();
    this.total = this.carrinhoService.calcularTotal();
  }

  removerProduto(index: string) {
    this.carrinhoService.removerProduto(parseFloat(index));
    this.itens = this.carrinhoService.listarProdutos();
    this.total = this.carrinhoService.calcularTotal();
  }

  calcularDesconto(valor: string, desconto: string): string {
    const valorNumber = parseFloat(valor);
    const descontoNumber = parseFloat(desconto);
    return (valorNumber - (valorNumber * (descontoNumber / 100))).toFixed(2);
  }

  calcularValorTotal(): string {
    return this.total.toFixed(2);
  }

  calcularValorTotalDesconto(): string {
    return this.carrinhoService.calcularTotalDesconto(this.itens).toFixed(2);
  }

  calcularValorTotalCompra(): string {
    const valorTotal = parseFloat(this.calcularValorTotal());
    const descontoTotal = parseFloat(this.calcularValorTotalDesconto());
    return (valorTotal - descontoTotal).toFixed(2);
  }

  finalizarCompra() {
    if(this.itens.length === 0) {
      Swal.fire({
        text: "Carrinho vazio!",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Fechar'
      });
    } else {
      Swal.fire({
        text: "Compra finalizada com sucesso!",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Fechar'
      });
    }

    this.carrinhoService.limparCarrinho();
    this.itens = this.carrinhoService.listarProdutos();
    this.total = this.carrinhoService.calcularTotal();
  }
}