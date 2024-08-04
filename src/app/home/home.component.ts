import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

interface product{
    productImage : string;
    
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    image : string = "../../assets/image/avataaars.svg"
    // productList:product[]=[
    //     {productImage:"../../assets/image/avataaars.svg" }
    // ]
    

  }
    
