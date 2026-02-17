import { Component } from '@angular/core';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [Comments],
  template: `
    <h1>How I feel about Angular</h1>

    <app-comments></app-comments>

    @defer (on viewport) {
      <app-comments></app-comments>
    } @placeholder {
      <p>Future comments</p>
    } @loading(minimum 2s) {
      <p>Loading comments...</p>
    }
  `
})
export class AppComponent {}
