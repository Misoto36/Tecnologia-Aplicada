import { Component } from '@angular/core';
import { InfoHtmlComponent } from '../info-html/info-html.component';
import { InfoCssComponent } from '../info-css/info-css.component';
import { InfoJavascriptComponent } from '../info-javascript/info-javascript.component';

@Component({
  selector: 'app-frontend-page',
  standalone: true,
  imports: [InfoHtmlComponent,InfoCssComponent,InfoJavascriptComponent],
  templateUrl: './frontend-page.component.html',
  styleUrl: './frontend-page.component.css'
})
export class FrontendPageComponent {

}
