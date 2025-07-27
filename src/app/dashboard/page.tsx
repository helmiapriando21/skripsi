"use client";

import BarChart from "@/components/BarChart";
import DataCard from "@/components/DataCard";
import LineChart from "@/components/LineChart";
import React from "react";

const Dashboard = () => {
  // Sample data for cards
  const financialData = {
    income: 12500000,
    expenses: 8500000,
    total: 4000000,
  };

  // Sample data for line chart (financial flow)
  const financialFlowData = [
    { date: "2023-01-01", value: 1000000 },
    { date: "2023-01-02", value: 1500000 },
    { date: "2023-01-03", value: 2000000 },
    { date: "2023-01-04", value: 1800000 },
    { date: "2023-01-05", value: 2200000 },
    { date: "2023-01-06", value: 2500000 },
    { date: "2023-01-07", value: 3000000 },
  ];

  // Sample data for bar chart (assets)
  const assetData = [
    { category: "Cash", karpet: 5000000, ac: 3000000 },
    { category: "Investments", karpet: 8000000, ac: 6000000 },
    { category: "Property", karpet: 15000000, ac: 12000000 },
    { category: "Equipment", karpet: 3000000, ac: 2500000 },
  ];

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-around gap-6">
      {/* Data Cards Row */}
      <div className="flex flex-col md:flex-row justify-center gap-12 mb-8 mt-8">
        <DataCard
          label="Total Pemasukan"
          value={formatCurrency(financialData.income)}
          className="bg-green-50 border-green-200"
          labelClassName="text-green-800"
          valueClassName="text-green-600"
        />

        <DataCard
          label="Total Pengeluaran"
          value={formatCurrency(financialData.expenses)}
          className="bg-red-50 border-red-200"
          labelClassName="text-red-800"
          valueClassName="text-red-600"
        />

        <DataCard
          label="Saldo Total"
          value={formatCurrency(financialData.total)}
          className="bg-blue-50 border-blue-200"
          labelClassName="text-blue-800"
          valueClassName="text-blue-600 text-4xl"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <LineChart
          title="Aliran Keuangan 7 Hari Terakhir"
          data={financialFlowData}
          className="h-[450px]"
        />

        <BarChart
          title="Perbandingan Aset (Tahun Ini vs Tahun Lalu)"
          data={assetData}
          className="h-[450px]"
          colors={["#6366F1", "#A5B4FC", "#34D399"]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
