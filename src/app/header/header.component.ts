import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  @Output() selectedPath = new EventEmitter<string>();

  onSelect(event: Event, path: string) {
    event.preventDefault();
    this.selectedPath.emit(path);
  }
}
