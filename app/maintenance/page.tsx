"use client";

import { useEffect, useState } from "react";
import {
  Wrench,
  Plus,
  Clock,
  CheckCircle2,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type Status = "Pending" | "In Progress" | "Completed";

type Request = {
  id: number;
  property: string;
  issue: string;
  priority: string;
  date: string;
  status: Status;
};

const initialRequests: Request[] = [
  {
    id: 1,
    property: "Residence A-204",
    issue: "AC not working",
    priority: "High",
    date: "2026-09-24",
    status: "Pending",
  },
  {
    id: 2,
    property: "Residence B-102",
    issue: "Water leakage",
    priority: "Medium",
    date: "2026-09-23",
    status: "In Progress",
  },
  {
    id: 3,
    property: "Residence C-301",
    issue: "Fan repair",
    priority: "Low",
    date: "2026-09-22",
    status: "Completed",
  },
];

export default function MaintenancePage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [property, setProperty] = useState("");
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    const saved = localStorage.getItem("maintenanceRequests");

    if (saved) {
      setRequests(JSON.parse(saved));
    } else {
      setRequests(initialRequests);
      localStorage.setItem(
        "maintenanceRequests",
        JSON.stringify(initialRequests)
      );
    }
  }, []);

  useEffect(() => {
    if (requests.length > 0) {
      localStorage.setItem(
        "maintenanceRequests",
        JSON.stringify(requests)
      );
    }
  }, [requests]);

  const addRequest = () => {
    if (!property || !issue.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const newRequest: Request = {
      id: Date.now(),
      property,
      issue,
      priority,
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
    };

    setRequests((prev) => [newRequest, ...prev]);

    setProperty("");
    setIssue("");
    setPriority("Medium");
    setShowForm(false);
  };

  const updateStatus = (id: number, status: Status) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );
  };

  const deleteRequest = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this request?"
    );

    if (!confirmed) return;

    setRequests((prev) =>
      prev.filter((request) => request.id !== id)
    );
  };

  const pending = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const inProgress = requests.filter(
    (item) => item.status === "In Progress"
  ).length;

  const completed = requests.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <main className="min-h-screen bg-[#faf7f4] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-[#bc8664]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#bc8664]">
              Residence Hub
            </p>

            <h1 className="mt-2 text-3xl font-bold text-stone-800 md:text-4xl">
              Maintenance Management
            </h1>

            <p className="mt-2 max-w-2xl text-stone-500">
              Create, manage and track maintenance requests
              across your properties.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#bc8664] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#a96f50] md:w-auto"
          >
            <Plus size={20} />

            {showForm ? "Close Form" : "New Request"}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          {/* Pending */}
          <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-stone-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-[#c58b3a]">
                  {pending}
                </p>
              </div>

              <div className="rounded-xl bg-[#fff6e7] p-3">
                <Clock
                  size={25}
                  className="text-[#c58b3a]"
                />
              </div>

            </div>
          </div>

          {/* In Progress */}
          <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-stone-500">
                  In Progress
                </p>

                <p className="mt-2 text-3xl font-bold text-[#6687a8]">
                  {inProgress}
                </p>
              </div>

              <div className="rounded-xl bg-[#eef4f8] p-3">
                <Wrench
                  size={25}
                  className="text-[#6687a8]"
                />
              </div>

            </div>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-stone-500">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-[#4d8b63]">
                  {completed}
                </p>
              </div>

              <div className="rounded-xl bg-[#edf7ef] p-3">
                <CheckCircle2
                  size={25}
                  className="text-[#4d8b63]"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Create Request Form */}
        {showForm && (
          <div className="mt-8 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">

            <div className="border-b border-[#eee4de] pb-5">
              <h2 className="text-xl font-bold text-stone-800">
                Create Maintenance Request
              </h2>

              <p className="mt-1 text-sm text-stone-500">
                Report an issue with your property.
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* Property */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Property
                </label>

                <select
                  value={property}
                  onChange={(e) =>
                    setProperty(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#dfd2c9] bg-white px-4 py-3 text-stone-700 outline-none transition focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                >
                  <option value="">
                    Select property
                  </option>

                  <option value="Residence A-204">
                    Residence A-204
                  </option>

                  <option value="Residence B-102">
                    Residence B-102
                  </option>

                  <option value="Residence C-301">
                    Residence C-301
                  </option>

                  <option value="Residence D-405">
                    Residence D-405
                  </option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Priority
                </label>

                <select
                  value={priority}
                  onChange={(e) =>
                    setPriority(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#dfd2c9] bg-white px-4 py-3 text-stone-700 outline-none transition focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                >
                  <option value="Low">
                    Low
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="High">
                    High
                  </option>
                </select>
              </div>

              {/* Issue */}
              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Issue Description
                </label>

                <textarea
                  value={issue}
                  onChange={(e) =>
                    setIssue(e.target.value)
                  }
                  placeholder="Describe the maintenance issue..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#dfd2c9] bg-white px-4 py-3 text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                />

              </div>

            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={addRequest}
                className="rounded-xl bg-[#bc8664] px-6 py-3 font-semibold text-white transition hover:bg-[#a96f50]"
              >
                Create Request
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-[#dfd2c9] px-6 py-3 font-semibold text-stone-600 transition hover:bg-[#faf7f4]"
              >
                Cancel
              </button>

            </div>

          </div>
        )}

        {/* Requests */}
        <div className="mt-8 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">

          <div className="flex flex-col gap-2 border-b border-[#eee4de] pb-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold text-stone-800">
                Maintenance Requests
              </h2>

              <p className="mt-1 text-sm text-stone-500">
                Track the current status of reported issues.
              </p>
            </div>

            <div className="rounded-full bg-[#f8f3ef] px-4 py-2 text-sm font-semibold text-[#bc8664]">
              {requests.length} Total Requests
            </div>

          </div>

          <div className="mt-6 space-y-4">

            {requests.length === 0 ? (
              <div className="py-12 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f3ef]">
                  <Wrench
                    className="text-[#bc8664]"
                    size={25}
                  />
                </div>

                <h3 className="mt-4 font-semibold text-stone-800">
                  No maintenance requests
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Create your first maintenance request.
                </p>

              </div>
            ) : (
              requests.map((request) => (
                <div
                  key={request.id}
                  className="rounded-2xl border border-[#eee4de] bg-[#fffdfb] p-5 transition hover:shadow-sm"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Request Info */}
                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f8f3ef]">
                        <Wrench
                          size={22}
                          className="text-[#bc8664]"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-stone-800">
                          {request.issue}
                        </h3>

                        <p className="mt-1 text-sm text-stone-500">
                          {request.property}
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                          Created: {request.date}
                        </p>
                      </div>

                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap items-center gap-3">

                      {/* Priority */}
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          request.priority === "High"
                            ? "bg-red-50 text-red-600"
                            : request.priority === "Medium"
                            ? "bg-[#fff6e7] text-[#b47724]"
                            : "bg-[#edf7ef] text-[#4d8b63]"
                        }`}
                      >
                        {request.priority} Priority
                      </span>

                      {/* Status */}
                      <select
                        value={request.status}
                        onChange={(e) =>
                          updateStatus(
                            request.id,
                            e.target.value as Status
                          )
                        }
                        className={`rounded-lg border px-3 py-2 text-sm font-semibold outline-none ${
                          request.status === "Completed"
                            ? "border-[#cce4d2] bg-[#edf7ef] text-[#4d8b63]"
                            : request.status === "In Progress"
                            ? "border-[#d5e2ec] bg-[#eef4f8] text-[#6687a8]"
                            : "border-[#f0dfb9] bg-[#fff6e7] text-[#b47724]"
                        }`}
                      >
                        <option value="Pending">
                          Pending
                        </option>

                        <option value="In Progress">
                          In Progress
                        </option>

                        <option value="Completed">
                          Completed
                        </option>
                      </select>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          deleteRequest(request.id)
                        }
                        title="Delete request"
                        className="rounded-lg p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </div>

                </div>
              ))
            )}

          </div>

        </div>

      </div>
    </main>
  );
}