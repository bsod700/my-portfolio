import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BlobService } from '@core/index';

@Component({
  selector: 'app-dynamic-image',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-image.component.html',
  styleUrl: './dynamic-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicImageComponent implements OnChanges {
  @Input() src!: string;
  public imageUrl!: SafeUrl;

  private blobService: BlobService = inject(BlobService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)

  ngOnChanges(): void {
    if (this.src) {
      this.updateImageUrl();
    }
  }

  private updateImageUrl(): void {
    this.blobService.fetchBlob(this.src).then(blob => {
      const objectURL = URL.createObjectURL(blob);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.cdr.markForCheck();
    });
  }
}
