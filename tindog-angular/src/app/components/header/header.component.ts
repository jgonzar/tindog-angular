import { Component, OnInit } from '@angular/core';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faGooglePlay = faGooglePlay;
  faApple = faApple;
  constructor() { }

  ngOnInit(): void {
  }

}
