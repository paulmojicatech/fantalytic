import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';

@Component({
    selector: 'pmt-toolbar-sidenav',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmtToolbarSidenavComponent {
    @Input()
    navItems: Array<string> = [];
    @Input()
    title = '';

    @ViewChild('drawerContainer')
    drawerContainer?: MatDrawerContainer;

    isOpen = false;

    toggleDrawer(): void {
        this.isOpen ? this.drawerContainer?.close() : this.drawerContainer?.open();
        this.isOpen = !this.isOpen;
    }

}