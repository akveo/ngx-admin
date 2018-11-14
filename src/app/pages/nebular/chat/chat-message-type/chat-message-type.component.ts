import { Component } from '@angular/core';

@Component({
  selector: 'ngx-chat-message-type',
  templateUrl: 'chat-message-type.component.html',
  styleUrls: ['chat-message-type.component.scss'],
})
export class ChatMessageTypeComponent {
  date = new Date();
}
