import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">100</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Users Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
