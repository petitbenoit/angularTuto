import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { GithubSearchComponent } from './search/github-search/github-search.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { LinkedinFormComponent } from './forms/linkedin-form/linkedin-form.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'detail/:pid',
    component: ProductDetailComponent
  },
  {
    path: 'search',
    component: GithubSearchComponent
  },
  {
    path: 'forms',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'template', pathMatch: 'full' },
      { path: 'template', component: TemplateDrivenComponent },
      { path: 'model', component: ModelDrivenComponent },
      { path: 'linkedin', component: LinkedinFormComponent },
      { 
        path: 'reports', 
        loadChildren : () => import('./reporting/reporting.module').then((m) => m.ReportingModule) // lazy loaded - loaded on demand
      },
    ],
  },
  // 404 ROUTE - (**) wild card used to specify any routes
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
