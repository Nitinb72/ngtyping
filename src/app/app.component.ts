import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomtext= faker.hacker.phrase();
  userInput= '';


  onInput(event: Event){
    this.userInput= (event.target as HTMLInputElement).value;
    console.log(this.userInput)
  }

  compare(randomtext: string, userInput: string){
    if(!userInput) return 'pending';

    // return randomLetter === userInput ? 'correct':'incorrect'

    if(randomtext === userInput){
      return 'correct';
    }else{
      return 'incorrect';
    }

  }
}
