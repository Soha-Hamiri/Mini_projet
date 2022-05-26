import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SearchPipe } from './components/pipe/search.pipe';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component'; 
const appRoutes: Routes = [
  {
    path:'', component:ProductsComponent
  },
  {
    path:'edit/:id', component:ProductEditComponent
  },
  {
    path:'view/:id', component:DetailsProduitComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    ProductEditComponent,
    SearchPipe,
    DetailsProduitComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
