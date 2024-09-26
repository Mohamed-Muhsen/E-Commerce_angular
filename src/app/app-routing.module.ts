import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { AboutComponent } from './about/about.component'; 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-page/:name',component:ProductPageComponent},
  {path:'product-detail/:name/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  { path: 'blog', component: BlogComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
