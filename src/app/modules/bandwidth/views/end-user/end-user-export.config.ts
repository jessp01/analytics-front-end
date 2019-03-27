import { Injectable } from '@angular/core';
import { ExportConfigService, ExportItem } from 'shared/components/export-csv/export-csv.component';
import { KalturaReportType } from 'kaltura-ngx-client';
import { ReportDataSection } from 'shared/services/storage-data-base.config';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class EndUserExportConfig implements ExportConfigService {
  constructor(private _translate: TranslateService) {
  }

  public getConfig(): ExportItem[] {
    return [
      {
        label: this._translate.instant('app.bandwidth.exportLabels.endUser'),
        reportType: KalturaReportType.userUsage,
        sections: [ReportDataSection.totals, ReportDataSection.graph, ReportDataSection.table]
      },
    ];
  }
}
