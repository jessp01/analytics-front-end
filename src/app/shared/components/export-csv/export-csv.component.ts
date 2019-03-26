import { Component, Input, OnDestroy } from '@angular/core';
import { BrowserService, ReportService } from 'shared/services';
import { DateChangeEvent } from 'shared/components/date-filter/date-filter.service';
import { KalturaPager, KalturaReportType } from 'kaltura-ngx-client';
import { ReportDataSection } from 'shared/services/storage-data-base.config';
import { TreeNode } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

export interface ExportConfigService {
  getConfig(): ExportItem[];
}

export interface ExportItem {
  label: string;
  reportType: KalturaReportType;
  sections: ReportDataSection[];
}

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss'],
})
export class ExportCsvComponent implements OnDestroy {
  @Input() name = 'default';
  @Input() dateFilter: DateChangeEvent;
  @Input() pager: KalturaPager;
  @Input() entryId: string;
  
  @Input() set reports(value: ExportItem[]) {
    if (Array.isArray(value)) {
      this._value = this._getNodes(value);
    }
  }
  
  public _opened = false;
  
  public _value: TreeNode[] = [];
  
  public _selected: TreeNode[] = [];
  
  constructor(private _reportService: ReportService,
              private _translate: TranslateService,
              private _browserService: BrowserService) {
  }
  
  ngOnDestroy(): void {
  }
  
  private _getNodes(reports: ExportItem[]): TreeNode[] {
    return [{
      label: this._translate.instant('app.common.all'),
      expanded: true,
      children: reports.map(report => ({
        label: report.label,
        data: report,
      })),
    }];
  }
  
  public _export(): void {
    const selection = this._selected
      .filter(({ parent }) => !!parent)
      .map(({ data }) => data);
    console.warn(selection);
  }
}
