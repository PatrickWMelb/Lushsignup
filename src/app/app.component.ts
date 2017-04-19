import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { User } from './_model/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
	private _users: FirebaseListObservable<any[]>;
	private _user: User;

	_error: string = "";

	@ViewChild('userForm') userForm: ElementRef;

	constructor(
		private af: AngularFire
	){}

	ngOnInit()
	{
		this._users = this.af.database.list(`/User`);
	}

	SignUp(firstname: any, lastname: any, mobile: any, dob: any)
	{
		var name_regex = /^[a-zA-Z]+$/;
		if (!name_regex.test(firstname.value)) {
			this._error = "Please enter a valid firstname, only alphabets are allowed!"
			console.log("null firstname");
			return;
		}
		if (!name_regex.test(lastname.value)) {
			this._error = "Please enter a valid lastname, only alphabets are allowed!"
			console.log("null lastname");
			return;
		}
		if (dob.value == "") {
			this._error = "Please enter your date of birth!"
			return;
		}

		var mobile_regex = /^[0-9]{10}$/;
		if (!mobile_regex.test(mobile.value)) {
			this._error = "Please enter a valid 10 digits mobile number!"
			return;
		}

		this._user = {
			firstName: firstname.value,
			lastName: lastname.value,
			mobile: mobile.value,
			dateOfBirth: dob.value
		};
		//console.log(this._user);
		this._users.push(this._user)
		this.userForm.nativeElement.reset();
	}

}
