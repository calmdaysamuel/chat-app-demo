import { Component, OnInit } from '@angular/core';
import { Message } from 'src/data_models/message';
import { Router } from '@angular/router';
@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  chatRoomName: string = '';
  messages: Message[] = [
    {
      sender: '',
      date: '',
      content: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  sendMessage(): void {}

  onMessageRecieved(): void {}

  enterRoom(): void {}

  leaveRoom(): void {}

  toExplorePage(): void {
    this.router.navigateByUrl('');
  }
}
