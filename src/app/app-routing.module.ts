import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoginComponent} from './components/login/login.component';
import {ArticlesComponent} from "./components/hackathon/articles/articles.component";
import {RedirectComponent} from "./layouts/redirect/redirect.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: RedirectComponent},
            {path: 'login', component: LoginComponent},
            {
                path: '', component: AdminLayoutComponent,
                children: [
                    {path: 'articles', component: ArticlesComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
