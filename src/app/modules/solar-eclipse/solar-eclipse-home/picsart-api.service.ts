import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsartApiService {
  private apiUrl = 'https://api.picsart.io/tools/1.0/removebg';
  private apiKey = '1S1YbTpq8XsMbGAAGpJHsfrB83gSxqrA';

  constructor(private http: HttpClient) { }

  removeBackground(imageUrl: string): Observable<any> {
    const formData = new FormData();
    formData.append('image_url', imageUrl);
    formData.append('output_type', 'cutout');
    formData.append('format', 'PNG');
    formData.append('bg_color', '#110CF6');

    const headers = new HttpHeaders({
      'x-picsart-api-key': this.apiKey
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
