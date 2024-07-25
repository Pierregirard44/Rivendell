import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchValidator });
  }

  matchValidator(form: FormGroup): void {
    const email = form.get('email')?.value;
    const confirmEmail = form.get('confirmEmail')?.value;
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (email !== confirmEmail) {
      form.get('confirmEmail')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmEmail')?.setErrors(null);
    }

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
      // Navigate to login page with success message
      this.router.navigate(['/login'], { queryParams: { profileCreated: 'true' } });
    } else {
      if (this.profileForm.hasError('mismatch', ['confirmEmail'])) {
        alert('Emails do not match');
      } else if (this.profileForm.hasError('mismatch', ['confirmPassword'])) {
        alert('Passwords do not match');
      }
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
