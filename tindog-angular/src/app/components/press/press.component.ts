import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  pressImgs:string[] =['../../../assets/TechCrunch.png', '../../../assets/tnw.png', '../../../assets/bizinsider.png', '../../../assets/mashable.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
