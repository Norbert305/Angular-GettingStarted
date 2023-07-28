import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";


@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;

  private _listFilter: string ='';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In setter:", value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName" : "PS5",
      "productCode" : "123JG67",
      "releaseDate" : "March 18, 2021",
      "description" : "Video Game Console",
      "price" : 500,
      "starRating" : 5,
      "imageUrl" : "data:image/webp;base64,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"
    },
    {
      "productId" : 5,
      "productName" : "Hammer",
      "productCode" : "TBX-0048",
      "releaseDate" : "May 21, 2021",
      "description" : "Curced claw steel hammer",
      "price" : 8.9,
      "starRating" : 4.8,
      "imageUrl" : "assets/images/hammer.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];
performFilter(filterBy: string) : IProduct[] {
  filterBy = filterBy.toLowerCase();
  return this.products.filter((product : IProduct)=>
  product.productName.toLowerCase().includes(filterBy));
}


  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
  }
}
