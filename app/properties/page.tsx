"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Search,
  MapPin,
  Users,
  IndianRupee,
  Home,
  Plus,
  X,
} from "lucide-react";
import Link from "next/link";

type Property = {
  id: number;
  name: string;
  address: string;
  type: string;
  bedrooms: number;
  tenants: number;
  rent: number;
  status: "Occupied" | "Available" | "Maintenance";
  tenant: string;
};

const initialProperties: Property[] = [
  {
    id: 1,
    name: "Residence A-204",
    address: "Green Valley Residency, Block A",
    type: "Apartment",
    bedrooms: 2,
    tenants: 3,
    rent: 25000,
    status: "Occupied",
    tenant: "Rahul Sharma",
  },
  {
    id: 2,
    name: "Residence B-102",
    address: "Green Valley Residency, Block B",
    type: "Apartment",
    bedrooms: 3,
    tenants: 4,
    rent: 32000,
    status: "Occupied",
    tenant: "Priya Verma",
  },
  {
    id: 3,
    name: "Residence C-301",
    address: "Green Valley Residency, Block C",
    type: "Apartment",
    bedrooms: 2,
    tenants: 0,
    rent: 24000,
    status: "Available",
    tenant: "No tenant",
  },
  {
    id: 4,
    name: "Residence D-405",
    address: "Green Valley Residency, Block D",
    type: "Penthouse",
    bedrooms: 4,
    tenants: 0,
    rent: 50000,
    status: "Maintenance",
    tenant: "No tenant",
  },
];

export default function PropertiesPage() {
  const [properties, setProperties] =
    useState<Property[]>(initialProperties);

    useEffect(() => {
  const saved = localStorage.getItem("properties");

  if (saved) {
    try {
      setProperties(JSON.parse(saved));
    } catch {
      setProperties(initialProperties);
      localStorage.setItem(
        "properties",
        JSON.stringify(initialProperties)
      );
    }
  } else {
    localStorage.setItem(
      "properties",
      JSON.stringify(initialProperties)
    );
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "properties",
    JSON.stringify(properties)
  );
}, [properties]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Apartment");
  const [bedrooms, setBedrooms] = useState("2");
  const [rent, setRent] = useState("");

  const filteredProperties = properties.filter(
    (property) => {
      const matchesSearch =
        property.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property.address
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        property.status === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const addProperty = () => {
    if (!name || !address || !rent) {
      alert("Please fill all required fields.");
      return;
    }

    const newProperty: Property = {
      id: Date.now(),
      name,
      address,
      type,
      bedrooms: Number(bedrooms),
      tenants: 0,
      rent: Number(rent),
      status: "Available",
      tenant: "No tenant",
    };

    setProperties((prev) => [
      ...prev,
      newProperty,
    ]);

    setName("");
    setAddress("");
    setType("Apartment");
    setBedrooms("2");
    setRent("");
    setShowForm(false);
  };

  const totalProperties = properties.length;

  const occupied = properties.filter(
    (property) => property.status === "Occupied"
  ).length;

  const available = properties.filter(
    (property) => property.status === "Available"
  ).length;

  const maintenance = properties.filter(
    (property) => property.status === "Maintenance"
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
              Property Management
            </h1>

            <p className="mt-2 text-stone-500">
              Manage properties, tenants and rental information.
            </p>

          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#bc8664] px-5 py-3 font-semibold text-white transition hover:bg-[#a96f50] md:w-auto"
          >
            {showForm ? (
              <X size={20} />
            ) : (
              <Plus size={20} />
            )}

            {showForm
              ? "Close Form"
              : "Add Property"}
          </button>

        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Properties"
            value={totalProperties}
            icon={<Home size={23} />}
          />

          <StatCard
            title="Occupied"
            value={occupied}
            icon={<Users size={23} />}
          />

          <StatCard
            title="Available"
            value={available}
            icon={<Home size={23} />}
          />

          <StatCard
            title="Maintenance"
            value={maintenance}
            icon={<Home size={23} />}
          />

        </div>

        {/* Add Property Form */}
        {showForm && (
          <div className="mt-8 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">

            <h2 className="text-xl font-bold text-stone-800">
              Add New Property
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Add property details to your residence portfolio.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <Input
                label="Property Name"
                value={name}
                onChange={setName}
                placeholder="Residence A-101"
              />

              <Input
                label="Address"
                value={address}
                onChange={setAddress}
                placeholder="Green Valley Residency"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Property Type
                </label>

                <select
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#dfd2c9] px-4 py-3 outline-none focus:border-[#bc8664]"
                >
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Studio</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-stone-700">
                  Bedrooms
                </label>

                <input
                  type="number"
                  min="1"
                  value={bedrooms}
                  onChange={(e) =>
                    setBedrooms(e.target.value)
                  }
                  className="w-full rounded-xl border border-[#dfd2c9] px-4 py-3 outline-none focus:border-[#bc8664]"
                />
              </div>

              <Input
                label="Monthly Rent"
                value={rent}
                onChange={setRent}
                placeholder="25000"
                type="number"
              />

            </div>

            <button
              onClick={addProperty}
              className="mt-6 rounded-xl bg-[#bc8664] px-6 py-3 font-semibold text-white hover:bg-[#a96f50]"
            >
              Add Property
            </button>

          </div>
        )}

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <div className="relative flex-1">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search properties..."
              className="w-full rounded-xl border border-[#eadfd7] bg-white py-3 pl-11 pr-4 outline-none focus:border-[#bc8664]"
            />

          </div>

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="rounded-xl border border-[#eadfd7] bg-white px-5 py-3 outline-none focus:border-[#bc8664]"
          >
            <option>All</option>
            <option>Occupied</option>
            <option>Available</option>
            <option>Maintenance</option>
          </select>

        </div>

        {/* Property Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">

          {filteredProperties.map(
            (property) => (
              <div
                key={property.id}
                className="rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f8f3ef] text-[#bc8664]">
                      <Home size={23} />
                    </div>

                    <div>

                      <h3 className="font-bold text-stone-800">
                        {property.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-sm text-stone-500">
                        <MapPin size={14} />
                        {property.address}
                      </div>

                    </div>

                  </div>

                  <StatusBadge
                    status={property.status}
                  />

                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#eee4de] pt-5">

                  <Info
                    label="Type"
                    value={property.type}
                  />

                  <Info
                    label="Bedrooms"
                    value={`${property.bedrooms} BHK`}
                  />

                  <Info
                    label="Tenant"
                    value={property.tenant}
                  />

                  <div>
                    <p className="text-xs text-stone-400">
                      Monthly Rent
                    </p>

                    <div className="mt-1 flex items-center gap-1 font-semibold text-stone-700">
                      <IndianRupee size={14} />
                      {property.rent.toLocaleString(
                        "en-IN"
                      )}
                    </div>
                  </div>

                </div>

              </div>
            )
          )}

        </div>

        {filteredProperties.length === 0 && (
          <div className="mt-8 rounded-2xl border border-[#eadfd7] bg-white py-12 text-center">

            <Search
              size={35}
              className="mx-auto text-[#bc8664]"
            />

            <h3 className="mt-4 font-semibold text-stone-800">
              No properties found
            </h3>

            <p className="mt-1 text-sm text-stone-500">
              Try changing your search or filter.
            </p>

          </div>
        )}

      </div>
    </main>
  );
}

/* -----------------------------
   STAT CARD
----------------------------- */

function StatCard({
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

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-stone-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-stone-800">
            {value}
          </p>

        </div>

        <div className="rounded-xl bg-[#f8f3ef] p-3 text-[#bc8664]">
          {icon}
        </div>

      </div>

    </div>
  );
}

/* -----------------------------
   INPUT
----------------------------- */

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
  placeholder: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-stone-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#dfd2c9] px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-[#bc8664]"
      />

    </div>
  );
}

/* -----------------------------
   INFO
----------------------------- */

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-stone-400">
        {label}
      </p>

      <p className="mt-1 font-semibold text-stone-700">
        {value}
      </p>
    </div>
  );
}

/* -----------------------------
   STATUS BADGE
----------------------------- */

function StatusBadge({
  status,
}: {
  status: Property["status"];
}) {
  const styles = {
    Occupied:
      "bg-[#edf7ef] text-[#4d8b63]",
    Available:
      "bg-[#f8f3ef] text-[#bc8664]",
    Maintenance:
      "bg-[#fff6e7] text-[#b47724]",
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}