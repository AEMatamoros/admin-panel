import {ChartType} from 'chart.js'

export interface iChart {
    
    dataChart: any,
    optionChart?: any 
}

export interface iChartGeneral{
    type: ChartType,
    data: any,
    options?: any,
    title: string
}

