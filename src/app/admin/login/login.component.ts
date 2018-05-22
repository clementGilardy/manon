import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Login } from "app/admin/login/login";
import * as _ from 'lodash';
import { TokenService } from "common/services/token.service";
import { LocalStorageService } from "common/services/localStorage.service";
import * as moment from 'moment';

@Component({
	           selector   : 'app-login',
	           templateUrl: 'login.component.html',
	           styleUrls  : ['login.component.scss']
           })
export class LoginComponent implements OnInit {
	@Output() log: EventEmitter<boolean>;
	public form: FormGroup;
	public login: Login;
	public loginProp: Array<Object>;
	public logs = {
		login   : {
			label: 'login',
			value: "",
			type : "text"
		},
		password: {
			label: 'password',
			value: "",
			type : "password"
		}
	};

	constructor(private tokenService: TokenService, private localStorage: LocalStorageService) {
		this.log       = new EventEmitter<boolean>();
		this.login     = new Login();
		this.loginProp = new Array<Object>();
	}

	ngOnInit() {
		const formDataObj = {};
		for (const prop of Object.keys(this.login)) {
			if (!_.includes(this.loginProp, prop)) {
				formDataObj[prop] = new FormControl(this.login[prop]);
				this.loginProp.push({
					                    key  : prop,
					                    label: this.logs[prop].label,
					                    type : this.logs[prop].type
				                    });
			}
		}

		this.form = new FormGroup(formDataObj);
	}

	connect() {
		this.tokenService
		    .authenticate(this.form.value)
		    .subscribe((result: any) => {
			    this.log.emit(true);
			    this.localStorage.add('token', result.token);
			    this.localStorage.add('expire_at', moment().add(24,'hours'));
		    });
	}
}
