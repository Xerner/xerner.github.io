import { CommonModule, PercentPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ILanguages } from '../../../models/github-api/languages';
import { sum } from '../../../library/math';
import { ILanguage } from '../../../models/language';
import { DEFAULT_COLOR as DEFAULT_LANGUAGE_COLOR, languageColors } from '../../../settings/languageColors';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [
    CommonModule,
    PercentPipe,
  ],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
})
export class LanguagesComponent {
  languages = input.required<ILanguages | null>();
  mappedLanguages = computed(() => {
    var languages = this.languages();
    if (languages === null) {
      return [];
    }
    var maxValue = sum(Object.values(languages));
    var mappedLanguages: ILanguage[] = Object.keys(languages).map((language) => {
      var percentage = (languages![language] / maxValue);
      var colorString = languageColors[language] ?? DEFAULT_LANGUAGE_COLOR;
      return {
        name: language,
        percentage: percentage,
        color: colorString,
      }
    });
    return mappedLanguages;
  });

  getLanguageTooltip(language: ILanguage) {
    return `${language.name}: ${language.percentage.toPrecision(2)}%`;
  }

  getBackgroundColor(language: ILanguage) {
    return languageColors.hasOwnProperty(language.name) ? languageColors[language.name] : "#222222";
  }
}
