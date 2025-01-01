// import { promises as fs } from "fs";
// import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";
import { data } from "./data/tasks";
export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  // const data = await fs.readFile(
  //   path.join(process.cwd(), "app//(protected)/examples/tasks/data/tasks.json")
  // );

  // const tasks = JSON.parse(data.toString());
  const tasks = data;

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
}
