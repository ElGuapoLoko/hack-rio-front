import {Component, OnDestroy, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {Subscription} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];
    @ViewChild('op') overlayPanel: OverlayPanel;

    constructor(public appMain: AdminLayoutComponent, private router: Router) {
    }

    logout(): void {
        this.router.navigate(['/start'])
    }

}
