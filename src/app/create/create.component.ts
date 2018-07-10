import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // @Input() quote: string;
  // @Input() author: string;
  
  @Output() CreateQuote = new EventEmitter;
  
  quote = new Quote();
  
 
  constructor() { }
  success = false;
  ngOnInit() {
  }

  onSubmit() {
    this.CreateQuote.emit(this.quote);
    console.log(this.quote)
    this.quote = new Quote();
    this.success = true;
    console.log(this.CreateQuote);

  } 
}
