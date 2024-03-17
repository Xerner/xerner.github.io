import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { LetterPageComponent } from './components/page/letter-page.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { InfoEntryComponent } from './components/info-entry/info-entry.component';
import { DateTime } from 'luxon';
import { DomSanitizer } from '@angular/platform-browser';
import { SkillComponent } from './components/skill/skill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LetterPageComponent,
    HeaderComponent,
    InfoBlockComponent,
    InfoEntryComponent,
    MatIconModule,
    SkillComponent,
  ],
  templateUrl: './app.component.html',
  host: { class: "h-screen w-screen flex flex-col justify-center items-center" }
})
export class AppComponent {
  title = 'angular';
  DateTime = DateTime;

  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
  ) {
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
  }
}
