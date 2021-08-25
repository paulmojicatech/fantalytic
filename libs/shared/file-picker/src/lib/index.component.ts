import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
    selector: 'pmt-file-picker',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmtFilePickerComponent {
    @Input()
    label!: string;

    files: Array<File> = [];

    @ViewChild('fileInput')
    fileInput!: ElementRef<HTMLInputElement>;

    browseForFile(): void {
        this.fileInput.nativeElement.click();
    }

    handleFileInputChange(event: any): void {
        this.files = [...this.files, event.target.files[0]];
    }
}