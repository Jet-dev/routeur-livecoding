import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  message : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = this.route.snapshot.data['message'];

  }

}
