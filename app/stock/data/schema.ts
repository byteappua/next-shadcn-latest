import { z } from "zod";

// Define the new schema based on the provided structure
export const taskSchema = z.object({
  交易所: z.string(), // Exchange
  合约代码: z.string(), // Contract Code
  合约名称: z.string(), // Contract Name
  品种代码: z.string(), // Variety Code
  品种名称: z.string(), // Variety Name
  合约乘数: z.number(), // Contract Multiplier
  最小跳动: z.number(), // Minimum Tick
  "开仓费率（按金额）": z.number(), // Opening Rate (by Amount)
  "开仓费用（按手）": z.number(), // Opening Cost (per Lot)
  "平仓费率（按金额）": z.number(), // Closing Rate (by Amount)
  "平仓费用（按手）": z.number(), // Closing Cost (per Lot)
  "平今费率（按金额）": z.number(), // Closing Today Rate (by Amount)
  "平今费用（按手）": z.number(), // Closing Today Cost (per Lot)
  "做多保证金率（按金额）": z.number(), // Long Margin Rate (by Amount)
  "做多保证金（按手）": z.number(), // Long Margin (per Lot)
  "做空保证金率（按金额）": z.number(), // Short Margin Rate (by Amount)
  "做空保证金（按手）": z.number(), // Short Margin (per Lot)
  上日结算价: z.number(), // Previous Settlement Price
  上日收盘价: z.number(), // Previous Closing Price
  最新价: z.number(), // Latest Price
  成交量: z.number(), // Trading Volume
  持仓量: z.number(), // Open Interest
  "1手开仓费用": z.number(), // Opening Cost for 1 Lot
  "1手平仓费用": z.number(), // Closing Cost for 1 Lot
  "1手平今费用": z.number(), // Closing Today Cost for 1 Lot
  做多1手保证金: z.number(), // Long Margin for 1 Lot
  做空1手保证金: z.number(), // Short Margin for 1 Lot
  "1手市值": z.number(), // Market Value for 1 Lot
  "1Tick平仓盈亏": z.number(), // Profit and Loss for 1 Tick Closing
  "1Tick平仓净利": z.number(), // Net Profit for 1 Tick Closing
  "2Tick平仓净利": z.number(), // Net Profit for 2 Ticks Closing
  "1Tick平仓收益率%": z.number(), // Return Rate for 1 Tick Closing (%)
  "2Tick平仓收益率%": z.number(), // Return Rate for 2 Ticks Closing (%)
  "1Tick平今净利": z.number(), // Net Profit for 1 Tick Closing Today
  "2Tick平今净利": z.number(), // Net Profit for 2 Ticks Closing Today
  "1Tick平今收益率%": z.number(), // Return Rate for 1 Tick Closing Today (%)
  "2Tick平今收益率%": z.number(), // Return Rate for 2 Ticks Closing Today (%)
  更新时间: z.string(), // Update Time
});

// Define the type based on the new schema
export type Stock = z.infer<typeof taskSchema>;
