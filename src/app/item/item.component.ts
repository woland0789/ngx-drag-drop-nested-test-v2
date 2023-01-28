import { Component, Input } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { Item } from '../Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {

  @Input() items: Item[] = [];

  onDrop(event: DndDropEvent) {
    this.items.splice(event.index, 0, event.data);
  }
}
