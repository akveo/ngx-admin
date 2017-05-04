import { Component, ViewChild } from '@angular/core'
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';


@Component({
  selector: 'image-cropper',
  template: `
            <div class="widgets">
            <div class="row">
              <div class="col-md-12">
                <ba-card title="Image cropper" baCardClass="with-scroll">

                <div>
                 
                 <img-cropper [image]="data1" [settings]="cropperSettings1" (onCrop)="cropped($event)"></img-cropper>
                 <span class="result" *ngIf="data1.image" >
                    <img [src]="data1.image" 
                    [width]="croppedWidth" 
                    [height]="croppedHeight">
                    {{data1.image.length}}
                </span>
                

                </div>
                </ba-card>

               </div>
             </div>
             </div>

  `,
})
export class ImageCropper {
    name: string;
    data1: any;
    cropperSettings1: CropperSettings;
    croppedWidth: number;
    croppedHeight: number;
    
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
    
    constructor() {
      this.name = 'Angular2'
      this.cropperSettings1 = new CropperSettings();
      this.cropperSettings1.width = 200;
      this.cropperSettings1.height = 200;

      this.cropperSettings1.croppedWidth = 200;
      this.cropperSettings1.croppedHeight = 200;

      this.cropperSettings1.canvasWidth = 500;
      this.cropperSettings1.canvasHeight = 300;

      this.cropperSettings1.minWidth = 10;
      this.cropperSettings1.minHeight = 10;

      this.cropperSettings1.rounded = false;
      this.cropperSettings1.keepAspect = false;

      this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
      this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

      this.data1 = {};
  }
  
  cropped(bounds:Bounds) {
    this.croppedHeight = bounds.bottom-bounds.top;
    this.croppedWidth = bounds.right-bounds.left;
  }
  
  fileChangeListener($event) {
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function (loadEvent: any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
    }
}
