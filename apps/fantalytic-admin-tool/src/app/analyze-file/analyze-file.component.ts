import { Component, ViewChild } from "@angular/core";
import { PmtFilePickerComponent } from "@fantalytic/shared/file-picker";

@Component({
    templateUrl: './analyze-file.component.html',
    styleUrls: ['./analyze-file.component.scss']
})

export class AnalyzeFileComponent{
    @ViewChild('filePicker')
    filePicker!: PmtFilePickerComponent;

    analyzeFiles(): void {
        // make sure files are .json
        const nonJsonFiles = this.filePicker.files.filter(file => {
            const fileExtIndex = file.name.lastIndexOf('.');
            const fileExt = file.name.substring(fileExtIndex + 1);
            return fileExt.toLowerCase() !== 'json';
        });
        if (!!nonJsonFiles?.length) {
            alert('File type not allowed.  Only JSON files can be analyzed');
        }
    }
}