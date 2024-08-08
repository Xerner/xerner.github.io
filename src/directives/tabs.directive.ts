import { Directive, Input } from '@angular/core';
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
  @Input() appTabs = "";
  get firstActiveTab() {
    return this.appTabs;
  }
  activeTab: ITabInfo | null = null;
  tabs: ITabInfo[] = [];

  addContent(tabContent: TabContentDirective) {
    var tab = this.tabs.find(tab => tab.name == tabContent.name)
    if (tab === undefined) {
      tab = { name: tabContent.name, content: new Set(), tabs: new Set() };
      this.tabs.push(tab)
    }
    if (this.activeTab !== null && this.activeTab!.name !== tabContent.name) {
      tabContent.hide();
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
    tab.hide();
    tab_.tabs.add(tab);
    if (tab_.name == this.firstActiveTab) {
      this.setActiveTab(tab.name)
    }
  }

  remove(tab: TabDirective) {
    var index = this.tabs.findIndex(tab => tab.name == tab.name);
    if (index < 0) {
      return;
    }
    this.tabs.splice(index, 1);
  }

  isActive(name: string) {
    var tab = this.tabs.find(tab => tab.name == name)
    return tab !== undefined && this.activeTab == tab;
  }

  setActiveTab(tabName: string) {
    var newTab = this.tabs.find(tab => tab.name == tabName)
    if (newTab === undefined) {
      return;
    }
    this.activeTab?.tabs.forEach(tab => tab.hide());
    this.activeTab?.content.forEach(content => content.hide());
    newTab.tabs.forEach(tab => tab.show());
    newTab.content.forEach(content => content.show());
    this.activeTab = newTab;
  }
}
