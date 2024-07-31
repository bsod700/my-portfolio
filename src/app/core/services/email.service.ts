import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = '/send-email';   // Adjust the URL based on your actual server URL
  http: HttpClient = inject(HttpClient);

  sendEmail(emailData: { to: string; subject: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}
