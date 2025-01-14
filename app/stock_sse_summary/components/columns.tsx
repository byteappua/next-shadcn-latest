"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Stock } from "../data/schema";

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: "项目", // Contract Code
    header: ({ column }) => <DataTableColumnHeader column={column} title="项目" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("项目")}</div>,
    enableSorting: true,
    enableHiding: false,
    enablePinning: true,
    size: 90,
  },
  {
    accessorKey: "股票", // Contract Code
    header: ({ column }) => <DataTableColumnHeader column={column} title="股票" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("股票")}</div>,
    enableSorting: true,
    enableHiding: false,
    size: 90,
  },
  {
    accessorKey: "主板", // Contract Name
    header: ({ column }) => <DataTableColumnHeader column={column} title="主板" />,
    cell: ({ row }) => (
      <div className="max-w-[350px] flex-1 truncate font-medium">{row.getValue("主板")}</div>
    ),
    enableSorting: true,
    enableHiding: false,
    size: 90,
  },
  {
    accessorKey: "科创板", // Variety Name
    header: ({ column }) => (
      <DataTableColumnHeader column={column} className="text-center" title="科创板" />
    ),
    cell: ({ row }) => <div>{row.getValue("科创板")}</div>,
    enableSorting: true,
    enableHiding: false,
    size: 90,
  },

  {
    id: "actions",
    header: () => <div className="text-center">操作</div>,
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
    size: 90,
  },
];
