import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

  id:number | undefined ;
  produit : Product = new Product;
  data: any;
  constructor(private route: ActivatedRoute,private dataService :DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.geProductById(this.id).subscribe(
      res => {
        this.data = res;
        this.produit = this.data;
      }
    )
  }

}
