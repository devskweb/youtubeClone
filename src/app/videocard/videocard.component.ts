import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.css']
})
export class VideocardComponent implements OnInit {
@Input()title="";
@Input()views="";
@Input()timestamp="";
@Input()channelImage="";
@Input()channel="";
@Input()image="";
  constructor() { }

  ngOnInit(): void {
  }

}
