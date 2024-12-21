"use client";

import * as React from "react";
import { ColumnDef, flexRender } from "@tanstack/react-table";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Suspense } from "react";
import { Table } from "@tanstack/react-table";
interface DataTableBodyProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: Table<TData>;
  read: boolean;
}

export function DataTableBody<TData, TValue>({
  columns,
  table,
  read,
}: DataTableBodyProps<TData, TValue>) {
  if (!read) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            Loading...
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  return (
    <Suspense
      fallback={
        <TableBody>
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Loading...
            </TableCell>
          </TableRow>
        </TableBody>
      }
    >
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
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
    </Suspense>
  );
}
