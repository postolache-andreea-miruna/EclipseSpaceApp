import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draw-time',
  templateUrl: './draw-time.component.html',
  styleUrls: ['./draw-time.component.scss']
})
export class DrawTimeComponent  implements OnInit, AfterViewInit {
    @ViewChild('coloringCanvas', { static: false })
    canvasRef!: ElementRef;
  
    
    private canvas!: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null = null;
    private isDrawing: boolean = false;
  
    ngOnInit() {
      // Get the canvas and its context
      this.canvas = this.canvasRef?.nativeElement;
      this.ctx = this.canvas?.getContext('2d');
  
      // Load and draw the image onto the canvas
      const image = new Image();
      image.src = 'assets/colorimage.jpg'; // Adjust the path to your image
      image.onload = () => {
        if (this.ctx) {
          this.ctx.drawImage(image, 0, 0); // Draw the image at (0, 0) on the canvas
        }
      };
    }
  
    ngAfterViewInit() {
      this.canvas = this.canvasRef?.nativeElement;
      this.ctx = this.canvas?.getContext('2d');
    
      this.canvas.addEventListener('mousedown', () => this.startDrawing());
      this.canvas.addEventListener('mousemove', (event) => this.onMouseMove(event));
      this.canvas.addEventListener('mouseup', () => this.stopDrawing());
      this.canvas.addEventListener('mouseleave', () => this.stopDrawing());
    }
    
    startDrawing() {
      this.isDrawing = true;
      this.ctx?.beginPath();
    }
    
    onMouseMove(event: MouseEvent) {
      if (!this.isDrawing) return;
    
      const x = event.offsetX;
      const y = event.offsetY;
      if(this.ctx != null){
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.lineWidth = 10; // Adjust the brush size as needed
      }
      // Set the color based on drawing or erasing mode
      if (this.isEraserMode) {
        if(this.ctx != null){
        this.ctx.globalCompositeOperation = 'destination-out'; // Set to eraser mode
        this.ctx.strokeStyle = 'rgba(0,0,0,0)'; // Use transparent color for erasing
      }
    } else {
        // Check the color of the pixel at the current point on the image canvas
        const imageColor = this.getImagePixelColor(x, y);
    
        // Set the drawing color only if the pixel color is not black (contour)
        if (imageColor !== 'rgb(0,0,0)') {
          if(this.ctx != null){
          this.ctx.globalCompositeOperation = 'source-over'; // Set to normal drawing mode
          this.ctx.strokeStyle = this.selectedColor; // Set to the selected drawing color
           } }
      }
    
      this.ctx?.lineTo(x, y);
      this.ctx?.stroke();
    }
    
    getImagePixelColor(x: number, y: number): string {
      if (this.ctx) {
        const imageData = this.ctx.getImageData(x, y, 1, 1);
        const pixelData = imageData.data;
        // Extract the pixel color data (R, G, B, A)
        return `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      }
      return 'rgb(0,0,0)'; // Default to black if the image context is not available
    }
    
    stopDrawing() {
      this.isDrawing = false;
      this.ctx?.closePath();
    }
    
  
    onMouseClick(event: MouseEvent) {
      const x = event.offsetX;
      const y = event.offsetY;
      const pixelColor = this.getPixelColor(x, y); // Implement this function to get the pixel color
    
      // Set the color for coloring
      if(this.ctx != null){
      this.ctx.fillStyle = 'red'; // Change 'red' to the desired color
      this.ctx.fillRect(x, y, 5, 5);
    }
    }
    
  selectedColor: string = 'black'; // Default color
  
  selectColor(color: string) {
    this.selectedColor = color;
  }
    // Implement a function to get the pixel color
    getPixelColor(x: number, y: number): string | null {
      if (this.ctx) {
        const imageData = this.ctx.getImageData(x, y, 1, 1);
        const pixelData = imageData.data;
        // Extract the pixel color data (R, G, B, A)
        const color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
        return color;
      }
      return null;
    }
    private isEraserMode: boolean = false; // Add this flag to track eraser mode
  
  
    toggleEraser() {
      this.isEraserMode = !this.isEraserMode; // Toggle the eraser mode flag
  
      if (this.isEraserMode) {
        this.canvas.style.cursor = 'url(eraser-cursor.png), auto'; // Replace 'eraser-cursor.png' with your cursor image
      } else {
        this.canvas.style.cursor = 'crosshair'; // Set to the drawing cursor
      }
    }
  }
  
