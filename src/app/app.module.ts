import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RegisterComponent } from './register/register.component';
import { ControlMessagesComponent } from './validation/control-messages.component';
import { PageComponent, DialogOverviewExampleDialog } from './page/page.component';
import { UserService } from './UserService';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatTableModule, MatPaginatorModule,
  MatInputModule, MatProgressSpinnerModule, MatSortModule, MatCheckboxModule, MatDialogModule
} from '@angular/material';
import { PageEditComponent } from './page-edit/page-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { AuthGuard2 } from './auth/auth2.guard';
import { LocalizeRouterModule,LocalizeParser, ManualParserLoader, LocalizeRouterSettings } from 'localize-router';
import { LocalizeRouterHttpLoader } from 'localize-router-http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SayHiComponent } from './say-hi/say-hi.component';
import {MatMenuModule} from '@angular/material/menu';
// import { Observable } from 'rxjs';
import{ Location } from '@angular/common';
import { WebpageComponent } from './webpage/webpage.component';
// import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {GallaryService} from './gallary.service';
import {GallaryDirective} from './gallary.directive';
import { PagerService } from './_services/pager.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { EmbedVideo } from 'ngx-embed-video';
import { FacebookModule } from 'ngx-facebook';
import {CarouselModule} from 'primeng/carousel';
const routes: Routes = [
  
  { path: 'login', component: LoginAppComponent, canActivate: [AuthGuard2] },
  { path: 'register', component: RegisterComponent },
  { path: 'webpage',component: WebpageComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'page', component: PageComponent, canActivate: [AuthGuard], /*canDeactivate: [ConfirmationGuard]*/ },
  { path: 'pageedit', component: PageEditComponent },
  { path: 'detailproduct', component: DetailproductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};
@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    DataBindingComponent,
    RegisterComponent,
    ControlMessagesComponent,
    PageComponent,
    PageEditComponent, 
    DialogOverviewExampleDialog, 
    SayHiComponent, 
    WebpageComponent, 
    ProductdetailsComponent,
    GallaryDirective,
    DetailproductComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    JwSocialButtonsModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    // LocalizeRouterModule.forRoot(routes)
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    }),
    NgbModule,
    EmbedVideo.forRoot(),
    FacebookModule.forRoot(),
    CarouselModule,
    // FlexLayoutModule
  ],
  entryComponents: [PageComponent, DialogOverviewExampleDialog],
  providers: [UserService, AuthGuard, ConfirmationGuard, AuthGuard2,GallaryService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
