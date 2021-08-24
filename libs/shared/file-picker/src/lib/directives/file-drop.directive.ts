import { Directive, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[pmtFileDrop]'
})
export class PmtFileDropDirective {

    @Output()
    onFileDropped = new EventEmitter<File>();

    @HostListener('dragover', ['$event'])
    onDragOver(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }
    @HostListener('dragleave', ['event$'])
    onDragLeave(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }

    @HostListener('drop', ['$event'])
    ondrop(event: any): void {
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files[0]);
        }
    }
}