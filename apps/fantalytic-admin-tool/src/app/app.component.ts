import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponentViewModel } from './models/app.component.interface';
import { AppViewmodelService } from './services/app-viewmodel.service';
import { ErrorMessageDispatcherService } from './services/error-message-dispatcher.service';

@Component({
  selector: 'fantalytic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppViewmodelService]
})
export class AppComponent implements OnInit {
  viewModel$!: Observable<AppComponentViewModel>;

  constructor(public viewModelSvc: AppViewmodelService){}

  ngOnInit(): void {
    this.viewModel$ = this.viewModelSvc.getViewModel();
  }

}
