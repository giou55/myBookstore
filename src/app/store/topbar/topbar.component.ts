import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() sendSearchText = new EventEmitter<string>();

  doSearch(searchText: string){
    if (searchText.length > 3) {
      this.sendSearchText.emit(searchText);
    }
  }

}
