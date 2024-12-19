export interface AirQualityData {
  城市: string;
  区域: string;
  监测点: string;
  时间: string;
  AQI: number;
  空气质量等级: string;
  首要污染物: string;
  经度: number;
  纬度: number;
  PM10_IAQI: number;
  PM10_浓度: number;
  PM2_5_IAQI: number;
  PM2_5_浓度: number;
  一氧化碳_IAQI: number;
  一氧化碳_浓度: number;
  二氧化氮_IAQI: number;
  二氧化氮_浓度: number;
  二氧化硫_IAQI: number;
  二氧化硫_浓度: number;
  臭氧1小时_IAQI: number;
  臭氧1小时_浓度: number;
  臭氧8小时_IAQI: number;
  臭氧8小时_浓度: number;
}
