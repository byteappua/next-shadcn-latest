"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const tableContainer = React.useRef<HTMLDivElement>(null);
  const [tableContainerHeight, setTableContainerHeight] = React.useState(50);
  const [tableContainerWidth, setTableContainerWidth] = React.useState(50);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  React.useEffect(() => {
    if (tableContainer.current) {
      setTableContainerHeight(tableContainer.current.offsetHeight);
      setTableContainerWidth(tableContainer.current.offsetWidth);
    }
  }, []);
  return (
    <>
      <div className="flex-1 flex flex-col w-full">
        <DataTableToolbar table={table} />
        <div className="flex-1 rounded-md border" ref={tableContainer}>
          <div
            style={
              {
                height: `${tableContainerHeight}px`,
              } as React.CSSProperties
            }
          >
            <Table parentDiv="h-full" className="table-fixed ">
              <TableHeader
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          colSpan={header.colSpan}
                          style={{
                            position: header.column.getIsPinned() ? "sticky" : "static",
                            left:
                              header.column.getIsPinned() === "left"
                                ? header.column.getPinnedIndex() * 100 + "px"
                                : "auto",
                            right:
                              header.column.getIsPinned() === "right"
                                ? header.column.getPinnedIndex() * 100 + "px"
                                : "auto",
                            backgroundColor: header.column.getIsPinned() ? "#f0f0f0" : "white",
                            width: header.column.getSize(),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          style={{
                            position: cell.column.getIsPinned() ? "sticky" : "static",
                            left:
                              cell.column.getIsPinned() === "left"
                                ? cell.column.getPinnedIndex() * 100 + "px"
                                : "auto",
                            right:
                              cell.column.getIsPinned() === "right"
                                ? cell.column.getPinnedIndex() * 100 + "px"
                                : "auto",
                            backgroundColor: cell.column.getIsPinned() ? "#f0f0f0" : "white",
                            width: cell.column.getSize(),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <DataTablePagination table={table} />
      </div>
    </>
  );
}
