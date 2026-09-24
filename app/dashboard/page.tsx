"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Building2,
  Wrench,
  Clock3,
  CalendarCheck,
  Plus,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

type MaintenanceStatus = "Pending" | "In Progress" | "Completed";

type MaintenanceRequest = {
  id: number;
  property: string;
  issue: string;
  priority: string;
  date: string;
  status: MaintenanceStatus;
};

type Booking = {
  id: number;
  amenityId: number;
  amenityName: string;
  date: string;
  checkIn: string;
  checkOut: string;
};

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

const primary = "#bc8664";

export default function DashboardPage() {
  const [maintenance, setMaintenance] = useState<MaintenanceRequest[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        const maintenanceData = localStorage.getItem("maintenanceRequests");
        const bookingData = localStorage.getItem("amenityBookings");
        const propertyData = localStorage.getItem("properties");

        if (maintenanceData) {
          setMaintenance(JSON.parse(maintenanceData));
        }

        if (bookingData) {
          setBookings(JSON.parse(bookingData));
        }

        if (propertyData) {
          setProperties(JSON.parse(propertyData));
        }
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const totalProperties = properties.length;

  const occupiedProperties = properties.filter(
    (property) => property.status === "Occupied"
  ).length;

  const availableProperties = properties.filter(
    (property) => property.status === "Available"
  ).length;

  const pendingMaintenance = maintenance.filter(
    (item) => item.status === "Pending"
  ).length;

  const inProgressMaintenance = maintenance.filter(
    (item) => item.status === "In Progress"
  ).length;

  const completedMaintenance = maintenance.filter(
    (item) => item.status === "Completed"
  ).length;

  const upcomingBookings = bookings.filter(
    (booking) => booking.date >= new Date().toISOString().split("T")[0]
  ).length;

  const recentMaintenance = [...maintenance]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  const recentBookings = [...bookings]
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#faf7f4]">
        <div className="flex items-center gap-2 text-stone-600">
          <Loader2 className="animate-spin" size={20} />
          Loading dashboard...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f4] text-stone-800">
      {/* Header */}
      <header className="border-b border-[#eadfd7] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: primary }}
            >
              Residence Hub
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Management Dashboard
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Overview of your properties, maintenance and amenities.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border border-[#eadfd7] px-4 py-2 text-sm font-medium transition hover:bg-[#f8f3ef]"
          >
            Home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="/properties"
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: primary }}
          >
            <Plus size={17} />
            Manage Properties
          </Link>

          <Link
            href="/maintenance"
            className="flex items-center gap-2 rounded-xl border border-[#eadfd7] bg-white px-4 py-3 text-sm font-semibold transition hover:bg-[#f8f3ef]"
          >
            <Wrench size={17} />
            Maintenance
          </Link>

          <Link
            href="/amenities"
            className="flex items-center gap-2 rounded-xl border border-[#eadfd7] bg-white px-4 py-3 text-sm font-semibold transition hover:bg-[#f8f3ef]"
          >
            <CalendarCheck size={17} />
            Amenities
          </Link>
        </div>

        {/* Stats */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Properties"
            value={totalProperties}
            icon={<Building2 size={21} />}
            subtitle={`${occupiedProperties} occupied`}
          />

          <StatCard
            title="Pending Maintenance"
            value={pendingMaintenance}
            icon={<AlertCircle size={21} />}
            subtitle={`${inProgressMaintenance} in progress`}
          />

          <StatCard
            title="Completed Maintenance"
            value={completedMaintenance}
            icon={<CheckCircle2 size={21} />}
            subtitle="Resolved requests"
          />

          <StatCard
            title="Upcoming Bookings"
            value={upcomingBookings}
            icon={<CalendarCheck size={21} />}
            subtitle="Amenity bookings"
          />
        </section>

        {/* Main Grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Maintenance */}
          <div className="rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Maintenance Overview
                </h2>

                <p className="text-sm text-stone-500">
                  Latest maintenance requests
                </p>
              </div>

              <Link
                href="/maintenance"
                className="flex items-center gap-1 text-sm font-semibold"
                style={{ color: primary }}
              >
                View All
                <ArrowRight size={16} />
              </Link>
            </div>

            {recentMaintenance.length === 0 ? (
              <EmptyState text="No maintenance requests yet." />
            ) : (
              <div className="space-y-3">
                {recentMaintenance.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[#eee3dc] bg-[#fdfbf9] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.issue}</p>

                        <p className="mt-1 text-sm text-stone-500">
                          {item.property}
                        </p>
                      </div>

                      <StatusBadge status={item.status} />
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-xs text-stone-500">
                      <span>Priority: {item.priority}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Properties */}
          <div className="rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Property Overview
                </h2>

                <p className="text-sm text-stone-500">
                  Current property status
                </p>
              </div>

              <Link
                href="/properties"
                className="flex items-center gap-1 text-sm font-semibold"
                style={{ color: primary }}
              >
                Manage
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MiniStat
                label="Total"
                value={totalProperties}
              />

              <MiniStat
                label="Occupied"
                value={occupiedProperties}
              />

              <MiniStat
                label="Available"
                value={availableProperties}
              />
            </div>

            <div className="mt-5 space-y-3">
              {properties.slice(0, 4).map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-xl border border-[#eee3dc] p-3"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {property.name}
                    </p>

                    <p className="text-xs text-stone-500">
                      {property.address}
                    </p>
                  </div>

                  <PropertyStatus status={property.status} />
                </div>
              ))}

              {properties.length === 0 && (
                <EmptyState text="No properties added yet." />
              )}
            </div>
          </div>
        </section>

        {/* Bookings */}
        <section className="mt-6 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">
                Upcoming Amenity Bookings
              </h2>

              <p className="text-sm text-stone-500">
                Recent reservations and time slots
              </p>
            </div>

            <Link
              href="/amenities"
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: primary }}
            >
              Manage Bookings
              <ArrowRight size={16} />
            </Link>
          </div>

          {recentBookings.length === 0 ? (
            <EmptyState text="No amenity bookings yet." />
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-xl border border-[#eee3dc] bg-[#fdfbf9] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {booking.amenityName}
                      </p>

                      <p className="mt-1 text-sm text-stone-500">
                        {booking.date}
                      </p>
                    </div>

                    <CalendarCheck
                      size={20}
                      style={{ color: primary }}
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-stone-600">
                    <Clock3 size={15} />
                    {booking.checkIn} - {booking.checkOut}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* ---------- Components ---------- */

function StatCard({
  title,
  value,
  icon,
  subtitle,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: "#f8f0eb",
            color: primary,
          }}
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm text-stone-500">
        {title}
      </p>

      <p className="mt-1 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-stone-500">
        {subtitle}
      </p>
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-[#f8f3ef] p-4 text-center">
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-stone-500">{label}</p>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: MaintenanceStatus;
}) {
  const styles = {
    Pending: "bg-[#fff4d8] text-[#a56a13]",
    "In Progress": "bg-[#edf3f8] text-[#6687a8]",
    Completed: "bg-[#edf7ef] text-[#4d8b63]",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function PropertyStatus({
  status,
}: {
  status: Property["status"];
}) {
  const styles = {
    Occupied: "bg-[#edf7ef] text-[#4d8b63]",
    Available: "bg-[#edf3f8] text-[#6687a8]",
    Maintenance: "bg-[#fff4d8] text-[#a56a13]",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-[#eadfd7] py-10 text-center">
      <p className="text-sm text-stone-500">{text}</p>
    </div>
  );
}