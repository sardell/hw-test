import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Repository } from '../search/repository';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  private subscription: Subscription;
  public details: Object;
  public issues: Object;
  public showIssues: boolean = false;

  constructor(private detailsService: DetailsService,
              private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.detailsService.getDetails(id).subscribe(
      data => this.details = data
    );
    this.detailsService.getIssues(id).subscribe(
      data => this.issues = data
    );
  }

  toggleIssues() {
    this.showIssues === true ? this.showIssues = false : this.showIssues = true;
  }

}
