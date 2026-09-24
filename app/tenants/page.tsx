"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Home,
  Trash2,
  ArrowLeft,
} from "lucide-react";

type Tenant = {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  leaseStart: string;
  leaseEnd: string;
  status: "Active" | "Pending";
};

const initialTenants: Tenant[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    property: "Residence A-204",
    leaseStart: "2026-01-01",
    leaseEnd: "2026-12-31",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    phone: "9876501234",
    property: "Residence B-102",
    leaseStart: "2026-02-01",
    leaseEnd: "2027-01-31",
    status: "Active",
  },
];

export default function TenantsPage() {
  const [tenants, setTenants] = useState<Tenant[]>(initialTenants);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    leaseStart: "",
    leaseEnd: "",
  });

  const addTenant = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.property ||
      !form.leaseStart ||
      !form.leaseEnd
    ) {
      alert("Please fill all fields");
      return;
    }

    const newTenant: Tenant = {
      id: Date.now(),
      ...form,
      status: "Active",
    };

    setTenants((prev) => [...prev, newTenant]);

    setForm({
      name: "",
      email: "",
      phone: "",
      property: "",
      leaseStart: "",
      leaseEnd: "",
    });

    setShowForm(false);
  };

  const deleteTenant = (id: number) => {
    if (confirm("Delete this tenant?")) {
      setTenants((prev) => prev.filter((tenant) => tenant.id !== id));
    }
  };

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(search.toLowerCase()) ||
      tenant.property.toLowerCase().includes(search.toLowerCase())
  );

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
              Tenant Management
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Manage tenants and their rental information.
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
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <Stat
            title="Total Tenants"
            value={tenants.length}
            icon={<Users size={20} />}
          />

          <Stat
            title="Active Tenants"
            value={tenants.filter((t) => t.status === "Active").length}
            icon={<Home size={20} />}
          />

          <Stat
            title="Properties Assigned"
            value={tenants.filter((t) => t.property).length}
            icon={<Users size={20} />}
          />
        </div>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
            Add Tenant
          </button>
        </div>

        {/* Add Tenant Form */}
        {showForm && (
          <div className="mb-6 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold">
              Add New Tenant
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="Full Name"
                value={form.name}
                onChange={(value) =>
                  setForm({ ...form, name: value })
                }
                placeholder="Enter tenant name"
              />

              <Input
                label="Email"
                value={form.email}
                onChange={(value) =>
                  setForm({ ...form, email: value })
                }
                placeholder="Enter email"
                type="email"
              />

              <Input
                label="Phone"
                value={form.phone}
                onChange={(value) =>
                  setForm({ ...form, phone: value })
                }
                placeholder="Enter phone number"
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
                label="Lease Start"
                value={form.leaseStart}
                onChange={(value) =>
                  setForm({ ...form, leaseStart: value })
                }
                type="date"
              />

              <Input
                label="Lease End"
                value={form.leaseEnd}
                onChange={(value) =>
                  setForm({ ...form, leaseEnd: value })
                }
                type="date"
              />
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={addTenant}
                className="rounded-xl px-5 py-3 font-semibold text-white"
                style={{ backgroundColor: "#bc8664" }}
              >
                Save Tenant
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

        {/* Tenant Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredTenants.map((tenant) => (
            <div
              key={tenant.id}
              className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#f8f0eb",
                      color: "#bc8664",
                    }}
                  >
                    <Users size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {tenant.name}
                    </h3>

                    <span className="text-xs text-green-700">
                      ● {tenant.status}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTenant(tenant.id)}
                  className="text-stone-400 hover:text-red-500"
                >
                  <Trash2 size={17} />
                </button>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-stone-600">
                  <Mail size={16} />
                  {tenant.email}
                </div>

                <div className="flex items-center gap-3 text-stone-600">
                  <Phone size={16} />
                  {tenant.phone}
                </div>

                <div className="flex items-center gap-3 text-stone-600">
                  <Home size={16} />
                  {tenant.property}
                </div>
              </div>

              <div className="mt-5 border-t border-[#eee3dc] pt-4">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Lease Start</span>
                  <span>Lease End</span>
                </div>

                <div className="mt-1 flex justify-between text-sm font-medium">
                  <span>{tenant.leaseStart}</span>
                  <span>{tenant.leaseEnd}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTenants.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#eadfd7] bg-white py-16 text-center">
            <Users
              className="mx-auto mb-3 text-stone-300"
              size={40}
            />

            <p className="text-stone-500">
              No tenants found.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

/* Components */

function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
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

      <p className="mt-4 text-sm text-stone-500">{title}</p>

      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
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