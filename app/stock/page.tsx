import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  try {
    const response = await fetch(process.env.PYTHON_BACK + "/ak/futures_fees_info", {
      headers: { Accept: "application/json" },
    });

    console.log(response.url);
    const data = await response.json();
    console.log(response.url);
    return z.array(taskSchema).parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
}
