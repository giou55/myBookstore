import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { TopbarComponent } from "../topbar/topbar.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [ModelModule, CommonModule, BrowserModule, FormsModule, RouterModule, BrowserAnimationsModule, FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule],
    declarations: [StoreComponent, CounterDirective, TopbarComponent, CartSummaryComponent,
        CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent,MatMenuModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule]
})
export class StoreModule { }
