import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'ngx-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.scss'],
})
export class WebsiteListComponent implements OnInit {
  public keyword: string;
  public historyList: any[] = [];
  public keyItem: any = '统计代码将呈现……';
  constructor(public http: HttpClient) {
  }

  ngOnInit() {
   /* const api01 = 'http://a.itying.com/api/productlist';
    this.http.get(api01).subscribe((response: any ) => {
      this.historyList = response.result ;
    });*/ // 等待端口。。。
  }
  doLogin(item) {
  this.keyItem = item; // 根据后端提供的数据 到时候显示的可能没有title
  const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
  const api = 'http://127.0.0.1:3000/dologin'; // api到时候要改
  this.http.post(api, {item}, httpOptions).subscribe((response) => {
    alert(response);
  });

  }

  doAdd() {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword);
      this.keyword = '';
    } else alert('站点已存在!');

  }

  doDelete(key) {
    this.historyList.splice(key, 1);
  }
}
