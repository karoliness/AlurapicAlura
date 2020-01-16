import { Component, Input } from '@angular/core';
import { PhotosModule } from '../photos.module';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    @Input() description='';
    @Input() url='';
}