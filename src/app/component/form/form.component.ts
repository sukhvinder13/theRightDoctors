import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,Validators } from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'forms';
  userDetails: FormGroup;
  nationality:Array<any>=[
    "Greece","Argentina","Niger","Peru",
    "Bhutan","MOngolia","China","Russia",
    "United State","Indian","Somalia",
    "Madagascar","Portugal","Finland","Bolivia",
    "Bosnia and Herzegovina","Philippines","Finland",
    "Indonesia"
  ]
  constructor(){  
        }
  
  ngOnInit(){
    this.userDetails=new FormGroup({
      fname:new FormControl(
        null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)]
      ),
      lname:new FormControl(
        null,[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)]
      ),
      email:new FormControl(
        "",[Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)]
      ),
      password:new FormControl(
        "",[Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)]
      ),
      mobile:new FormControl(
        "",[Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)]
      ),
      gender:new FormControl(
        "",[Validators.required]
      ),
      nationality:new FormControl(
        "",[Validators.required]
      )
    })

  }
  register(){
  //   if (this.userDetails.invalid) {
  //     console.log("error");
  //     return;
  // }
    console.log(this.userDetails.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userDetails.value))
  }

}
