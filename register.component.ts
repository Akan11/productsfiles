import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/Models/consumer';
import { UserTypes } from 'src/app/Models/user-types';
import { ConsumerService } from 'src/app/Services/consumer.service';
import { customvalidationService } from 'src/app/Services/customvalidation.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  newConsumerJSON;
  constructor(private formBuilder: FormBuilder, private router: Router, private consumerService: ConsumerService, private customValidator:customvalidationService) { }
  today = new Date();
  limit:number;
  validity = new Date();
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: [],
      dateOfBirth: [],
      address: ['',Validators.required],
      userName: ['',[Validators.required],this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['',Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['',[Validators.required]],
      bank: ['',Validators.required],
      savingsAccountNumber: [''],
      ifscCode: [''],
      cardType: [''],
      cardLimit: [''],
      cardValidity: new Date(),
    },
    {
      validator:this.customValidator.MatchPassword('password','confirmPassword')
    }
    );
  }
  
  get registerFormControl(){
    return this.registerFormControl.controls;
  }

  

  onSubmit() {
   
    console.log("SUBMIT");
    if (this.addForm.invalid) {
      return;
    }
    if(this.addForm.value.cardType === "Gold")
    {
      this.today.setFullYear(this.today.getFullYear() + 5);
      this.limit = 50000;
    }
    else
    {
      this.today.setFullYear(this.today.getFullYear() + 10);
      this.limit=100000;
    }
    this.newConsumerJSON={
        "user":
        {
          "userType":
            {
              "userTypeId": 2,
              "userTypeName": "Consumer"
            },
          "userName": this.addForm.value.userName,
          "email": this.addForm.value.email,
          "password": this.addForm.value.password,
        },
        "fName": this.addForm.value.fName,
        "lName": this.addForm.value.lName,
        "phoneNo": this.addForm.value.phoneNo,
        "address": this.addForm.value.address,
        "cardNo": {
            "cardTypeName": this.addForm.value.cardType,
            "cardLimit": this.limit,
            "Validity": this.today
        },
        "savingAccNo": this.addForm.value.savingsAccountNumber,
        "ifscCode": this.addForm.value.ifscCode,
        "isValidated": "N",
        "balance": this.addForm.value.balance
      };

      console.log(this.newConsumerJSON);
      this.consumerService.createConsumer(this.newConsumerJSON).subscribe(data => {
        this.router.navigate(['']);
      });
  }
  
}
/*

*/
