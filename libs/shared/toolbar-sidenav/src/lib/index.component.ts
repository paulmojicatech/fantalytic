import { Component, Input } from '@angular/core';

@Component({
    selector: 'pmt-toolbar-sidenav',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html'
})
export class PmtToolbarSidenavComponent{
    @Input()
    navItems: Array<string> = [];
}