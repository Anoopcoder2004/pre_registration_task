import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'preregistration_task';

  fileName: string = '';
  
  inputGroups: number[] =[];
  
  handleFile(event: Event){
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length>0){
      const file = input.files[0];
      this.fileName = file.name;

    }
  }
  onAddClick(){
    this.inputGroups.push(this.inputGroups.length);
  }
}
