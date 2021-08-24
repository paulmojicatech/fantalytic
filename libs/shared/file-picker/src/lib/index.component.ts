import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: 'pmt-file-picker',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PmtFilePickerComponent {
    @Input()
    label!: string;

    @ViewChild('fileInput')
    fileInput!: ElementRef<HTMLInputElement>;

    browseForFile(): void {
        this.fileInput.nativeElement.click();
    }

    handleFileDropped(event: File): void {
        console.log('event', event.name);
    }
}