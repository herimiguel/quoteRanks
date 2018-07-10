import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() deleteQuote= new EventEmitter();

  @Input() quotes;

  constructor() { }

  ngOnInit() {
  }
  voteUp(quote) {
    quote.rate++;
  }
  voteDown(quote) {
    quote.rate--;
  }
  voteDelete(quote) {
    this.deleteQuote.emit(quote);
  }


  

}