import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  message: string;
  counter: number;
  private intervalId: any;

  constructor() {
    this.message = "String interpolation is useful";
    this.counter = 0; 


    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      this.stopCounter();
    }, 20000); 
  }

  stopCounter() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.stopCounter();
  }
}