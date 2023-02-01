import { Component, Input } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Los services se inyectan a los componentes através del constructor
  constructor(private loggingService : LoggingService, private accountService : AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status : string) => alert('New Status: ' + status)
    );
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
