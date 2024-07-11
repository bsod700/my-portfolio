import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  public fetchBlob(url: string): Promise<Blob> {
    return fetch(url).then(response => response.blob());
  }
}
