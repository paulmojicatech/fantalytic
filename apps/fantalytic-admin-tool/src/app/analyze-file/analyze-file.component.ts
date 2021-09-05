import { Component, ViewChild } from "@angular/core";
import { PmtFilePickerComponent } from "@fantalytic/shared/file-picker";
import { AppUtilService } from "../services/app-util.service";
import { ErrorMessageDispatcherService } from "../services/error-message-dispatcher.service";

@Component({
    templateUrl: './analyze-file.component.html',
    styleUrls: ['./analyze-file.component.scss']
})

export class AnalyzeFileComponent{
    @ViewChild('filePicker')
    filePicker!: PmtFilePickerComponent;

    constructor(private _errorMsgDispatcherSvc: ErrorMessageDispatcherService){}

    analyzeFiles(): void {
        // make sure files are .json
        const nonJsonFiles = this.filePicker.files.filter(file => {
            const fileExtIndex = file.name.lastIndexOf('.');
            const fileExt = file.name.substring(fileExtIndex + 1);
            return fileExt.toLowerCase() !== 'json';
        });
        if (!!nonJsonFiles?.length) {
            this._errorMsgDispatcherSvc.dispatchErrorMsg('File type not allowed.  Only JSON files can be analyzed');
        }
    }
}