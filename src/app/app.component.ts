import { Component } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { Quote } from './create/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes= [];
  CreateQuote(quote){
  this.quotes.push(quote);
  // console.log(this.quotes);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }

  
}
