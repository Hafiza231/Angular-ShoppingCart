import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControlName, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
retUrl:string="home";
 loginForm: FormGroup;
  constructor( private fb:FormBuilder ,private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.loginForm=this.fb.group({
  username:['',Validators.required],
  password:['',[Validators.required,Validators.minLength(8)]]

})
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }
  get logindata()
  {
    return this.loginForm.controls;
  }
  onFormSubmit(loginForm) {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    console.log(username,password)
    sessionStorage.setItem('user',username);
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
        console.log( 'return to '+ this.retUrl);
        if (this.retUrl!=null) {
             this.router.navigate( [this.retUrl]);
        } else {
             this.router.navigate( ['home']);
        }
    });
    if(this.authService.isUserLoggedIn())
     {console.log("welcome");
        this.router.navigate(['product']);
     }
     
 }
 


}
