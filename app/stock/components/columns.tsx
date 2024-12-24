"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Stock } from "../data/schema";

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "交易所", // Contract Code
    header: ({ column }) => <DataTableColumnHeader column={column} title="交易所" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("交易所")}</div>,
    enableSorting: true,
    enableHiding: false,
    enablePinning: true,
  },
  {
    accessorKey: "合约代码", // Contract Code
    header: ({ column }) => <DataTableColumnHeader column={column} title="合约代码" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("合约代码")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "合约名称", // Contract Name
    header: ({ column }) => <DataTableColumnHeader column={column} title="合约名称" />,
    cell: ({ row }) => (
      <div className="max-w-[350px] flex-1 truncate font-medium">{row.getValue("合约名称")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "品种代码", // Variety Name
    header: ({ column }) => <DataTableColumnHeader column={column} title="品种代码" />,
    cell: ({ row }) => <div>{row.getValue("品种代码")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "品种名称", // Variety Name
    header: ({ column }) => <DataTableColumnHeader column={column} title="品种名称" />,
    cell: ({ row }) => <div>{row.getValue("品种名称")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "合约乘数", // Latest Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="合约乘数" />,
    cell: ({ row }) => <div>{row.getValue("合约乘数")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "最小跳动", // Latest Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="最小跳动" />,
    cell: ({ row }) => <div>{row.getValue("最小跳动")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "开仓费率（按金额）", // Latest Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="开仓费率（按金额）" />,
    cell: ({ row }) => <div>{row.getValue("开仓费率（按金额）")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "开仓费用（按手）", // Trading Volume
    header: ({ column }) => <DataTableColumnHeader column={column} title="开仓费用（按手）" />,
    cell: ({ row }) => <div>{row.getValue("开仓费用（按手）")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "平仓费率（按金额）", // Trading Volume
    header: ({ column }) => <DataTableColumnHeader column={column} title="平仓费率（按金额）" />,
    cell: ({ row }) => <div>{row.getValue("平仓费率（按金额）")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "平仓费用（按手）", // Trading Volume
    header: ({ column }) => <DataTableColumnHeader column={column} title="平仓费用（按手）" />,
    cell: ({ row }) => <div>{row.getValue("平仓费用（按手）")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "平今费率（按金额）", // Trading Volume
    header: ({ column }) => <DataTableColumnHeader column={column} title="平今费率（按金额）" />,
    cell: ({ row }) => <div>{row.getValue("平今费率（按金额）")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "上日结算价", // Previous Settlement Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="上日结算价" />,
    cell: ({ row }) => <div>{row.getValue("上日结算价")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "上日收盘价", // Previous Closing Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="上日收盘价" />,
    cell: ({ row }) => <div>{row.getValue("上日收盘价")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "最新价", // Previous Closing Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="最新价" />,
    cell: ({ row }) => <div>{row.getValue("最新价")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "成交量", // Previous Closing Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="成交量" />,
    cell: ({ row }) => <div>{row.getValue("成交量")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "持仓量", // Previous Closing Price
    header: ({ column }) => <DataTableColumnHeader column={column} title="持仓量" />,
    cell: ({ row }) => <div>{row.getValue("持仓量")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "1手开仓费用", // Opening Cost for 1 Lot
    header: ({ column }) => <DataTableColumnHeader column={column} title="1手开仓费用" />,
    cell: ({ row }) => <div>{row.getValue("1手开仓费用")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "1手平仓费用", // Closing Cost for 1 Lot
    header: ({ column }) => <DataTableColumnHeader column={column} title="1手平仓费用" />,
    cell: ({ row }) => <div>{row.getValue("1手平仓费用")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "2Tick平今收益率%", // Closing Cost for 1 Lot
    header: ({ column }) => <DataTableColumnHeader column={column} title="2Tick平今收益率%" />,
    cell: ({ row }) => <div>{row.getValue("2Tick平今收益率%")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "更新时间", // Closing Cost for 1 Lot
    header: ({ column }) => <DataTableColumnHeader column={column} title="更新时间" />,
    cell: ({ row }) => <div>{row.getValue("更新时间")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
