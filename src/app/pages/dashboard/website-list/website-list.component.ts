import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.scss']
})
export class WebsiteListComponent implements OnInit {
  public keyword:string;
  public historyList:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  doAdd() {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);
      this.keyword = ''; }
    else alert('站点已存在!');

  }
  doDelete(key)
  {
    this.historyList.splice(key,1)

  }
}
