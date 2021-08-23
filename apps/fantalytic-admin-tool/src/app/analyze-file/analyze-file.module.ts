import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { SharedFilePickerModule } from '../../../../../libs/shared/file-picker/src/index';

import { AnalyzeFileComponent } from "./analyze-file.component";


const routes: Route[] = [
    {
        path: '',
        component: AnalyzeFileComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SharedFilePickerModule],
    declarations: [AnalyzeFileComponent]
})

export class AnalyzeFileModule{}