import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDrawerContainer, MatDrawerMode } from '@angular/material/sidenav';
import { MatDrawerState } from './models/sidenav.interface';

@Component({
    selector: 'pmt-toolbar-sidenav',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmtToolbarSidenavComponent {
    @Input()
    navItems!: Array<string>;
    @Input()
    title!: string;
    @Input()
    drawerState: MatDrawerState = MatDrawerState.CLOSED;

    @ViewChild('drawerContainer')
    drawerContainer?: MatDrawerContainer;

    @Output()
    itemClicked = new EventEmitter<string>();

    isOpen = false;

    toggleDrawer(): void {
        this.isOpen ? this.drawerContainer?.close() : this.drawerContainer?.open();
        this.isOpen = !this.isOpen;
    }

}