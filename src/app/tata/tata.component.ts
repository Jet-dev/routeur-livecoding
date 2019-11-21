import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-tata',
  templateUrl: './tata.component.html',
  styleUrls: ['./tata.component.scss']
})
export class TataComponent implements OnInit {

  private param;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.param = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (param) => this.param = param['id']
    )
  }



}
