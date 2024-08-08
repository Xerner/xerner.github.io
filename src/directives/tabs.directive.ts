import { Directive } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabContentDirective } from './tab-content.directive';

export interface ITabInfo {
  name: string;
  tabs: Set<TabDirective>;
  content: Set<TabContentDirective>;
}

@Directive({
  selector: '[appTabs]',
  standalone: true,
})
export class TabsDirective {
  activeTab: ITabInfo | null = null;
  tabs: ITabInfo[] = [];

  addContent(tabContent: TabContentDirective) {
    var tab = this.tabs.find(tab => tab.name == tabContent.name)
    if (tab === undefined) {
      tab = { name: tabContent.name, content: new Set(), tabs: new Set() };
      this.tabs.push(tab)
    }
    tab.content.add(tabContent);
  }

  removeContent(tabContent: TabContentDirective) {
    var tab = this.tabs.find(tab => tab.name == tabContent.name);
    if (tab === undefined) {
      return;
    }
    tab.content.delete(tabContent);
  }

  add(tab: TabDirective) {
    var tab_ = this.tabs.find(tab_ => tab_.name == tab.name)
    if (tab_ === undefined) {
      tab_ = { name: tab.name, tabs: new Set(), content: new Set() };
      this.tabs.push(tab_)
    }
    if (this.tabs.length === 1) {
      this.setActiveTab(tab.name)
    }
    tab_.tabs.add(tab);
  }

  remove(tab: TabDirective) {
    var index = this.tabs.findIndex(tab => tab.name == tab.name);
    if (index < 0) {
      return;
    }
    this.tabs.splice(index, 1);
  }

  setActiveTab(tabName: string) {
    var newTab = this.tabs.find(tab => tab.name == tabName)
    if (newTab === undefined) {
      return;
    }
    this.activeTab?.tabs.forEach(tab => tab.hide());
    this.activeTab?.content.forEach(content => content.hide());
    this.activeTab = newTab;
    this.activeTab?.tabs.forEach(tab => tab.show());
    this.activeTab?.content.forEach(content => content.show());
  }
}
