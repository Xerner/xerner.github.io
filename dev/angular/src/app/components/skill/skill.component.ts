import { Component, computed, input } from '@angular/core';

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  standalone: true,
  host: { class: "letter-page" }
})
export class SkillComponent{
  name = input.required<string>()
  level = input.required<SkillLevel>()
  protected levelArr = computed(() => {
    var arr = Array(this.level as unknown).fill(0)
    var level = this.level() as unknown as number
    arr.forEach((_, i) => {
      if (i < level) {
        arr[i] = 1
      }
    })
    return arr;
  })
}
