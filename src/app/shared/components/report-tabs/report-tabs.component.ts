import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type Tab = {
  title: string;
  tooltip: string;
  value: string;
  selected: boolean;
  units: string;
  key: string;
  rawValue: number | string;
  trend?: string;
  sortOrder?: number;
  hidden?: boolean;
};

@Component({
  selector: 'app-report-tabs',
  templateUrl: './report-tabs.component.html',
  styleUrls: ['./report-tabs.component.scss']
})
export class ReportTabsComponent implements OnInit {

  @Output() tabChange: EventEmitter<Tab> = new EventEmitter();

  @Input() tabs: Tab[] = [];
  @Input() compareMode = false;
  @Input() showValue = true;

  constructor() {
  }

  ngOnInit() {
  }

  public tabClick(tab: Tab): void {
    this.tabs.forEach((t: Tab) => {
      t.selected = false;
    });
    tab.selected = true;
    this.tabChange.emit(tab);
  }


}
