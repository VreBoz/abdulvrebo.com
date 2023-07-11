import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

  // Array der Bildnamen
  images = ['wall1.jpg', 'wall2.jpg', 'wall3.jpg', 'wall4.jpg'];
  // Array der Überschriften
  headlines = [
    'In the depths of the night',
    'they silently emerge, the brave shinobi warriors',
    'masters of the deadly art of combat',
    'With lightning-fast movements and sharp katanas'
  ];
  // Index des aktuell angezeigten Bildes und der Überschrift
  currentImage = 0;
  // Bool'sche Variable, die bestimmt, ob ein Bild angezeigt wird oder nicht
  showImage = true;

   // Angular Lebenszyklus-Hook, der aufgerufen wird, wenn die Komponente initialisiert wird
   ngOnInit() {
    // Aufruf der Funktion updateImage()
    this.updateImage();
  }

  // Funktion zum Aktualisieren des aktuell angezeigten Bildes und der Überschrift
  updateImage() {
    // Stellt ein Intervall ein, das alle 8000 Millisekunden (8 Sekunden) ausgeführt wird
    setInterval(() => {
      // Erhöht currentImage um eins
      this.currentImage++
      // Moduliert currentImage mit der Anzahl der Bilder, um sicherzustellen, dass der Index im gültigen Bereich bleibt
      this.currentImage = this.currentImage % this.images.length;
      // Setzt showImage auf false
      this.showImage = false;
      // Setzt nach einer Verzögerung von 10 Millisekunden showImage wieder auf true
      setTimeout(() => {
        this.showImage = true;
      },10);
    
  }, 8000);
}






}
