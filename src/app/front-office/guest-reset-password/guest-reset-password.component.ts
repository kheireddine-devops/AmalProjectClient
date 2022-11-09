import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../core/services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-guest-reset-password',
  templateUrl: './guest-reset-password.component.html',
  styleUrls: ['./guest-reset-password.component.css']
})
export class GuestResetPasswordComponent implements OnInit {

  emailForm: string = "";
  validSend: boolean = false;
  emailFormGroup: FormGroup;
  constructor(private _accountService: AccountService,
              private _fb: FormBuilder) {
    this.emailFormGroup = this._fb.group({
      email: ["",[Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onResetPassword() {
    this._accountService.resetPassword(this.emailForm).subscribe(value => {
      this.validSend = true;
    },error => {

    });
  }
}
