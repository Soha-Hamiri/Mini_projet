import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product';;

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(produits:Product[]|undefined, searchText : string): Product[]|undefined {
  if(!produits || !searchText)
  return produits
  return produits.filter(produit => 
    produit.nom?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }

}
