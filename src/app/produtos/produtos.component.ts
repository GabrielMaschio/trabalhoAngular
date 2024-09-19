import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ItensComponent } from "./itens/itens.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NavbarComponent, ItensComponent, FooterComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent {

}
