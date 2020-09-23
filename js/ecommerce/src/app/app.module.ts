import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';
import {ProductsComponent} from './ecommerce/products/products.component';
import {ShoppingCartComponent} from './ecommerce/shopping-cart/shopping-cart.component';
import {OrdersComponent} from './ecommerce/orders/orders.component';
import {EcommerceService} from "./ecommerce/services/EcommerceService";

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './ecommerce/login/login.component';
import { LogoutComponent } from './ecommerce/logout/logout.component';
import { AuthenticationService } from './ecommerce/services/authentication.service';




@NgModule({
    declarations: [
        AppComponent,
        EcommerceComponent,
        ProductsComponent,
        ShoppingCartComponent,
        OrdersComponent,
        LoginComponent,
        LogoutComponent,
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [EcommerceService,AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
