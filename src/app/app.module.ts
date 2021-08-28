import { UserModule } from './user/user.module';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import { HttpLoaderInterceptor } from './loader/http-loader.interceptor';
import { LoaderModule } from './loader/loader.module';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { EmployeesListComponent } from './containers/employees-list/employees-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { ShadowEffectDirective } from './directives/shadow-effect.directive';
import { ColumnDirective } from './directives/column.directive';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ZipCodeDirective } from './forms/zip-code.directive';
import { ShowErrorsComponent } from './forms/show-errors/show-errors.component';
import { LinkedinFormComponent } from './forms/linkedin-form/linkedin-form.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    // component, directive, pipe
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    EmployeesListComponent,
    CurrencyComponent,
    ConversionPipe,
    ImgFallbackDirective,
    ShadowEffectDirective,
    ColumnDirective,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ZipCodeDirective,
    ShowErrorsComponent,
    LinkedinFormComponent
  ],
  imports: [
    // modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    HttpClientModule,
    SearchModule,
    AppRoutingModule,
    LoaderModule,
    UserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    // services : singleton pattern (data sharing) - singleton (one instance) -> 
    { // similar to directives
      provide: HTTP_INTERCEPTORS, // interface
      useClass: HttpLoaderInterceptor, // implementation for the interface
      multi: true // we can have multiple implementations of this interface
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true
    },
  ],
  bootstrap: [
    // startup component 
    AppComponent
  ]
})
export class AppModule { }
