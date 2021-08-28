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
        const currentFileLength = event?.target?.files?.length ?? null;
        if (!!currentFileLength) {
            const fileToAdd = event.target.files[currentFileLength - 1];
            const doesExist = this.isSelectedFilePresent(fileToAdd.name);
            if (!doesExist) {
                this.files = [...this.files, fileToAdd];
            }
            
        }
    }

    handleFileDropped(file: File): void {
        const doesExist = this.isSelectedFilePresent(file.name);
        if (!doesExist) {
            this.files = [...this.files, file];
        }
        
    }

    isSelectedFilePresent(fileName: string): boolean {
        return this.files.findIndex(file => file.name === fileName) > -1;
    }
}