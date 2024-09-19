import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'produtos',
        component: ProdutosComponent,
    },
    {
        path: 'produtos/carrinho',
        component: CarrinhoComponent,
    }
];
