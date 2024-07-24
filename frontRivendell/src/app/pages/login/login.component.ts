import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  profileCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

    this.route.queryParams.subscribe(params => {
      if (params['profileCreated']) {
        this.profileCreated = true;
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Convert form values to JSON and log it
      console.log(JSON.stringify(this.loginForm.value));
      
      // Optionally, redirect to another page if needed
      // this.router.navigate(['/some-route']);
    }
  }
}
