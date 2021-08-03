import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { MatSliderModule } from '@angular/material/slider';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TableComponent } from './plan/table/table.component';
import { ReservationDialogComponent } from './plan/table/reservation-dialog/reservation-dialog.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		ContactComponent,
		FooterComponent,
		HomepageComponent,
		MenuComponent,
		NavbarComponent,
		PlanComponent,
		TableComponent,
		ReservationDialogComponent
	],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,

    ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
