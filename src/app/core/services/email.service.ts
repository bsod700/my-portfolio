import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { formValueConfig } from '@shared/index';
import { environment } from 'environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private apiUrl = "/send-email"

  private apiUrl = environment.sendEmailUrl
  http: HttpClient = inject(HttpClient);

  sendEmail(emailData: formValueConfig): Observable<any> {
    return this.http.post(this.apiUrl, emailData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
