import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-codearea',
  templateUrl: './codearea.component.html',
  styleUrls: ['./codearea.component.scss']
})
export class CodeareaComponent implements OnInit {

  constructor() { }
  title= 'select wyw_Sname,wyw_Cname,wyw_Score\n' +
    'from WYW_Students,WYW_Courses,WYW_Reports\n' +
    'where WYW_Students.wyw_Sno=\'S52\' \n' +
    'and WYW_Reports.wyw_Sno=WYW_Students.wyw_Sno \n' +
    'and WYW_Reports.wyw_Cno=WYW_Courses.wyw_Cnoselect wyw_Sname,wyw_Cname,wyw_Score\n' +
    'from WYW_Students,WYW_Courses,WYW_Reports\n' +
    'where WYW_Students.wyw_Sno=\'S52\' \n' +
    'and WYW_Reports.wyw_Sno=WYW_Students.wyw_Sno \n' +
    'and WYW_Reports.wyw_Cno=WYW_Courses.wyw_Cno';

  ngOnInit() {


  }
  copyCode()  {
    const oInput = document.createElement('input');
    oInput.value = this.title;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert('复制成功');
  }

}
