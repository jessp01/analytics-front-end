import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ReportDataConfig, ReportDataSection, ReportDataBaseConfig } from 'shared/services/storage-data-base.config';
import { ReportHelper } from 'shared/services';
import { EChartOption } from 'echarts';
import { getColorPalette } from 'shared/utils/colors';

@Injectable()
export class ImpressionsDataConfig extends ReportDataBaseConfig {
  constructor(_translate: TranslateService) {
    super(_translate);
  }

  public getConfig(): ReportDataConfig {
    return {
      [ReportDataSection.totals]: {
        fields: {
          'count_loads': {
            format: value => ReportHelper.numberOrNA(value)
          },
          'count_plays': {
            format: value => ReportHelper.numberOrNA(value)
          },
          'count_plays_25': {
            format: value => ReportHelper.numberOrNA(value)
          },
          'count_plays_50': {
            format: value => ReportHelper.numberOrNA(value)
          },
          'count_plays_75': {
            format: value => ReportHelper.numberOrNA(value)
          },
          'count_plays_100': {
            format: value => ReportHelper.numberOrNA(value)
          }
        }
      }
    };
  }

  public getChartConfig(tooltipFormatter): EChartOption {
    return {
      tooltip: {
        backgroundColor: '#ffffff',
        borderColor: '#dadada',
        borderWidth: 1,
        padding: 10,
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        textStyle: {
          color: '#999999',
          fontFamily: 'Lato'
        },
        formatter: tooltipFormatter,
        trigger: 'item'
      },
      color: getColorPalette(),
      calculable: true,
      series: [
        {
          name: 'Player Impressions',
          type: 'funnel',
          left: '65%',
          top: 10,
          bottom: 10,
          width: '30%',
          height: 340,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 0,
          label: {
            show: true,
            verticalAlign: 'top',
            position: 'inside',
            formatter: '{c}%',
            fontFamily: 'Lato',
            fontSize: 15,
            fontWeight: 'bold',
            textShadowColor: 'rgba(29,70,148,0.90)',
            textShadowBlur: 5,
            textBorderWidth: 0,
            color: '#ffffff'
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            borderWidth: 0
          },
          data: []
        }
      ]
    };
  }
}
