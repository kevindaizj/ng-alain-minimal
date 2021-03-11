import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(public http: _HttpClient) {}

  ngOnInit(): void {}
}

@Component({
  selector: 'app-user-select',
  template: ` <div>Pretend to be a dropdown: {{ users | json }}</div> `,
})
export class MockUserSelectComponent implements OnInit {
  users: any;
  constructor(public http: _HttpClient) {}

  ngOnInit(): void {
    this.http.get('/user').subscribe((datas) => {
      this.users = datas;
    });
  }
}
