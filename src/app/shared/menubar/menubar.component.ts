import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html'
})

export class MenubarComponent
{
  visible: any;

  cerrar(): void
  {
    this.visible = false;
  }
}
