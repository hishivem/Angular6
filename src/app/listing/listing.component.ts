import { Component, OnInit, Input } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { Commentary } from './commentary.model';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listing: Array<Commentary>;
  dataLength: number;
  dataShow: boolean = false;
  @Input() searchText: string;

  constructor(public listingService: ListingService) { }

  ngOnInit() {
    this.getListData();
  }

  displayCounter(searchText){
    console.log(searchText);
  }

  getListData(){
    this.listingService.getListData().subscribe(data => {
      this.listing = data.json();
      this.dataLength = this.listing.length;
      console.log(this.listing);
      for (let data of this.listing){
        console.log(data.id);
      }
    })
  }

  showRestData(){
    this.dataShow = true;
  }

}
