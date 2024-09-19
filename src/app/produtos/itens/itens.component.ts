import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-itens',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css'],
  providers: [DecimalPipe]
})
export class ItensComponent implements OnInit {
  produtos: Produto[] = []; 

  constructor(
    private http: HttpClient,
    private decimalPipe: DecimalPipe,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.fetchData().subscribe(response => {
      this.produtos = response;
    });
  }

  fetchData(): Observable<Produto[]> {
    return this.http.get<Produto[]>('assets/json/dados_camisetas.json'); 
  }

  addToCarrinho(produto: Produto) {
    Swal.fire({
        text: `${produto.nome_produto} adicionada ao carrinho`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Fechar'
    });

    this.carrinhoService.adicionarProduto(produto);
  }

  calcularDesconto(valor: string, desconto: string): string {
    const valorNumber = parseFloat(valor);
    const descontoNumber = parseFloat(desconto);
    return this.decimalPipe.transform((valorNumber - (valorNumber * (descontoNumber / 100))), '1.2-2') ?? '';
  }
}
