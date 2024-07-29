import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  document: Document= inject(DOCUMENT)

  setInnerHtml(idValuePairs: { [key: string]: string }): void {
    Object.entries(idValuePairs).forEach(([id, html]) => {
      const htmlSet = this.setHtmlAction(id, html);
      if (!htmlSet) {
        setTimeout(() => {
          this.setHtmlAction(id, html);
        }, 0);
      }
    });
  }

  private setHtmlAction(id: string, html: string): boolean {
    const el = this.getElementById(id)[0];
    if (el) {
      el.innerHTML = html;
      return true;
    }
    return false;
  }

  getElementById(id: string | string[]): HTMLElement | HTMLElement[] | any {
    if (!Array.isArray(id)) { id = [id]; }
    return id.map(elId => this.document.getElementById(elId));
  }
}
