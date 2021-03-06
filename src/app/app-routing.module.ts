import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const ROUTES: Routes = [
    {path:'user', loadChildren:'./user.module#UserModule'},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo:'welcome', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule{

}