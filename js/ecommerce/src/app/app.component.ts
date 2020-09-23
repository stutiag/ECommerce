import {Component} from '@angular/core';
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import { AuthenticationService } from './ecommerce/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [EcommerceService,AuthenticationService]
})
export class AppComponent {
constructor(){}
}
