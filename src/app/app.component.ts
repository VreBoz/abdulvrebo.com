import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  images = ['wall1.jpg', 'wall2.jpg', 'wall3.jpg', 'wall4.jpg'];
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }


  updateImage() {
    setInterval(() => {
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      },10);
    
  }, 8000);
}





}
