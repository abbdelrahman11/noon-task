import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  catogories: any = [];
  catogorie: any = [];
  cat: any = [];
  Loading: boolean = false;
  cartProducts: any[] = [];

  baseurl: String = 'https://satatechnologygroup.net:3301/';
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.MainSliders();
    this.getcatogires();
    this.HomePage();
  }

  MainSliders() {
    this.Loading = true;
    this.service.GetMainSliders().subscribe(
      (res) => {
        this.catogories = [res[0]];

        this.Loading = false;
      },
      (error) => {
        console.log(error.message);
        this.Loading = false;
      }
    );
  }
  getcatogires() {
    this.Loading = true;
    this.service.getAllCatogories().subscribe(
      (res) => {
        this.Loading = false;
        this.catogorie = res;
      },
      (error) => {
        console.log(error.message);
        this.Loading = false;
      }
    );
  }

  HomePage() {
    this.Loading = true;

    this.service.GetHomePage().subscribe(
      (res) => {
        this.Loading = false;
        this.cat = res;
        console.log(this.cat);
      },
      (error) => {
        console.log(error.message);
        this.Loading = false;
      }
    );
  }
}
