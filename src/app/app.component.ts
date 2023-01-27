import { Component, VERSION } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5'];

  onDragover(event: DragEvent) {
    console.log('dragover', event);
  }

  onDrop(event: DndDropEvent) {
    console.log('dropped', JSON.stringify(event, null, 2));
  }
}
