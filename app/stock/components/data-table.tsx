"use client";

import * as React from "react";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  ColumnPinningState,
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
import { CSSProperties, Suspense } from "react";
import { Stock } from "../data/schema";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [read, setRead] = React.useState<boolean>(true);
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: [],
    right: [],
  });
  const getCommonPinningStyles = (column: Column<TData>): CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn = isPinned === "left" && column.getIsLastColumn("left");
    const isFirstRightPinnedColumn = isPinned === "right" && column.getIsFirstColumn("right");

    return {
      boxShadow: isLastLeftPinnedColumn
        ? "-4px 0 4px -4px gray inset"
        : isFirstRightPinnedColumn
        ? "4px 0 4px -4px gray inset"
        : undefined,
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      opacity: isPinned ? 0.95 : 1,
      position: isPinned ? "sticky" : "relative",
      width: column.getSize(),
      zIndex: isPinned ? 1 : 0,
    };
  };
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      columnPinning,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    enableColumnPinning: true,
    onColumnPinningChange: setColumnPinning,
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

  return (
    <>
      {" "}
      <div className="flex-1 flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <DataTableToolbar table={table} />
          <div className="flex-1 rounded-md border max-w-full overflow-x-auto">
            <Table className="table-fixed">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const { column } = header;
                      return (
                        <TableHead
                          key={header.id}
                          colSpan={header.colSpan}
                          style={{ ...getCommonPinningStyles(column) }}
                        >
                          <div className="whitespace-nowrap">
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </div>
                          {!header.isPlaceholder && header.column.getCanPin() && (
                            <div className="flex gap-1 justify-between">
                              {header.column.getIsPinned() !== "left" ? (
                                <button
                                  className="border rounded px-2"
                                  onClick={() => {
                                    header.column.pin("left");
                                  }}
                                >
                                  {"<="}
                                </button>
                              ) : null}
                              {header.column.getIsPinned() ? (
                                <button
                                  className="border rounded px-2"
                                  onClick={() => {
                                    header.column.pin(false);
                                  }}
                                >
                                  X
                                </button>
                              ) : null}
                              {header.column.getIsPinned() !== "right" ? (
                                <button
                                  className="border rounded px-2"
                                  onClick={() => {
                                    header.column.pin("right");
                                  }}
                                >
                                  {"=>"}
                                </button>
                              ) : null}
                            </div>
                          )}
                          <div
                            {...{
                              onDoubleClick: () => header.column.resetSize(),
                              onMouseDown: header.getResizeHandler(),
                              onTouchStart: header.getResizeHandler(),
                              className: `resizer ${
                                header.column.getIsResizing() ? "isResizing" : ""
                              }`,
                            }}
                          />
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
                      {row.getVisibleCells().map((cell) => {
                        const { column } = cell;
                        return (
                          <TableCell key={cell.id} style={{ ...getCommonPinningStyles(column) }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        );
                      })}
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
          <DataTablePagination table={table} />
        </Suspense>
      </div>
    </>
  );
}
