"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IndianRupee,
  Plus,
  Search,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Trash2,
  ArrowLeft,
} from "lucide-react";

type PaymentStatus = "Paid" | "Pending" | "Overdue";

type Payment = {
  id: number;
  tenant: string;
  property: string;
  amount: number;
  dueDate: string;
  status: PaymentStatus;
};

const initialPayments: Payment[] = [
  {
    id: 1,
    tenant: "Rahul Sharma",
    property: "Residence A-204",
    amount: 25000,
    dueDate: "2026-09-05",
    status: "Paid",
  },
  {
    id: 2,
    tenant: "Priya Verma",
    property: "Residence B-102",
    amount: 32000,
    dueDate: "2026-09-05",
    status: "Pending",
  },
  {
    id: 3,
    tenant: "Amit Kumar",
    property: "Residence C-301",
    amount: 24000,
    dueDate: "2026-09-01",
    status: "Overdue",
  },
];

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>(initialPayments);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    tenant: "",
    property: "",
    amount: "",
    dueDate: "",
  });

  const addPayment = () => {
    if (
      !form.tenant ||
      !form.property ||
      !form.amount ||
      !form.dueDate
    ) {
      alert("Please fill all fields");
      return;
    }

    const newPayment: Payment = {
      id: Date.now(),
      tenant: form.tenant,
      property: form.property,
      amount: Number(form.amount),
      dueDate: form.dueDate,
      status: "Pending",
    };

    setPayments((prev) => [...prev, newPayment]);

    setForm({
      tenant: "",
      property: "",
      amount: "",
      dueDate: "",
    });

    setShowForm(false);
  };

  const markAsPaid = (id: number) => {
    setPayments((prev) =>
      prev.map((payment) =>
        payment.id === id
          ? { ...payment, status: "Paid" }
          : payment
      )
    );
  };

  const deletePayment = (id: number) => {
    if (confirm("Delete this payment record?")) {
      setPayments((prev) =>
        prev.filter((payment) => payment.id !== id)
      );
    }
  };

  const filteredPayments = payments.filter(
    (payment) =>
      payment.tenant
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      payment.property
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalCollected = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const totalPending = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  const totalOverdue = payments
    .filter((payment) => payment.status === "Overdue")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <main className="min-h-screen bg-[#faf7f4] text-stone-800">

      {/* Header */}
      <header className="border-b border-[#eadfd7] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "#bc8664" }}
            >
              Residence Hub
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Rent & Payments
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Track rent payments and outstanding amounts.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg border border-[#eadfd7] px-4 py-2 text-sm font-medium hover:bg-[#f8f3ef]"
          >
            <ArrowLeft size={16} />
            Dashboard
          </Link>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">

          <StatCard
            title="Rent Collected"
            amount={totalCollected}
            icon={<CheckCircle2 size={21} />}
          />

          <StatCard
            title="Pending Rent"
            amount={totalPending}
            icon={<Clock3 size={21} />}
          />

          <StatCard
            title="Overdue Rent"
            amount={totalOverdue}
            icon={<AlertCircle size={21} />}
          />

        </div>

        {/* Toolbar */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div className="relative w-full sm:max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tenant or property..."
              className="w-full rounded-xl border border-[#eadfd7] bg-white py-3 pl-10 pr-4 outline-none focus:border-[#bc8664]"
            />

          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: "#bc8664" }}
          >
            <Plus size={18} />
            Add Payment
          </button>

        </div>

        {/* Add Payment Form */}
        {showForm && (
          <div className="mt-6 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">

            <h2 className="mb-5 text-lg font-bold">
              Add Rent Payment
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              <Input
                label="Tenant Name"
                value={form.tenant}
                onChange={(value) =>
                  setForm({ ...form, tenant: value })
                }
                placeholder="Enter tenant name"
              />

              <Input
                label="Property"
                value={form.property}
                onChange={(value) =>
                  setForm({ ...form, property: value })
                }
                placeholder="e.g. Residence A-204"
              />

              <Input
                label="Rent Amount"
                value={form.amount}
                onChange={(value) =>
                  setForm({ ...form, amount: value })
                }
                placeholder="Enter amount"
                type="number"
              />

              <Input
                label="Due Date"
                value={form.dueDate}
                onChange={(value) =>
                  setForm({ ...form, dueDate: value })
                }
                type="date"
              />

            </div>

            <div className="mt-5 flex gap-3">

              <button
                onClick={addPayment}
                className="rounded-xl px-5 py-3 font-semibold text-white"
                style={{ backgroundColor: "#bc8664" }}
              >
                Save Payment
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-[#eadfd7] px-5 py-3 font-semibold"
              >
                Cancel
              </button>

            </div>

          </div>
        )}

        {/* Payment Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#eadfd7] bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[750px]">

              <thead className="bg-[#f8f3ef]">

                <tr className="text-left text-sm text-stone-600">

                  <th className="px-6 py-4">Tenant</th>
                  <th className="px-6 py-4">Property</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Due Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredPayments.map((payment) => (

                  <tr
                    key={payment.id}
                    className="border-t border-[#eee3dc]"
                  >

                    <td className="px-6 py-4">
                      <p className="font-semibold">
                        {payment.tenant}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-stone-600">
                      {payment.property}
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      ₹{payment.amount.toLocaleString("en-IN")}
                    </td>

                    <td className="px-6 py-4 text-sm text-stone-600">
                      {payment.dueDate}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={payment.status} />
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-3">

                        {payment.status !== "Paid" && (
                          <button
                            onClick={() =>
                              markAsPaid(payment.id)
                            }
                            className="rounded-lg px-3 py-2 text-xs font-semibold text-white"
                            style={{
                              backgroundColor: "#bc8664",
                            }}
                          >
                            Mark Paid
                          </button>
                        )}

                        <button
                          onClick={() =>
                            deletePayment(payment.id)
                          }
                          className="text-stone-400 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredPayments.length === 0 && (
            <div className="py-14 text-center text-sm text-stone-500">
              No payment records found.
            </div>
          )}

        </div>

      </div>

    </main>
  );
}

/* ---------- Components ---------- */

function StatCard({
  title,
  amount,
  icon,
}: {
  title: string;
  amount: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm">

      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "#f8f0eb",
          color: "#bc8664",
        }}
      >
        {icon}
      </div>

      <p className="mt-4 text-sm text-stone-500">
        {title}
      </p>

      <p className="mt-1 text-2xl font-bold">
        ₹{amount.toLocaleString("en-IN")}
      </p>

    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: PaymentStatus;
}) {
  const styles = {
    Paid: "bg-[#edf7ef] text-[#4d8b63]",
    Pending: "bg-[#fff4d8] text-[#a56a13]",
    Overdue: "bg-[#fcecec] text-[#b45353]",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#eadfd7] px-4 py-3 outline-none focus:border-[#bc8664]"
      />

    </div>
  );
}