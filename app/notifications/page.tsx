"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Wrench,
  CalendarCheck,
  IndianRupee,
  CheckCircle2,
  Trash2,
  ArrowLeft,
  CheckCheck,
} from "lucide-react";

type Notification = {
  id: number;
  title: string;
  message: string;
  type: "Maintenance" | "Booking" | "Payment";
  time: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Maintenance Request Updated",
    message: "Water leakage request is now In Progress.",
    type: "Maintenance",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    title: "Amenity Booking Confirmed",
    message: "Swimming Pool booked for 25 Sep, 10:00 AM.",
    type: "Booking",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Rent Payment Pending",
    message: "Priya Verma's rent payment is still pending.",
    type: "Payment",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    title: "Maintenance Completed",
    message: "Fan repair request has been completed.",
    type: "Maintenance",
    time: "Yesterday",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const clearAll = () => {
    if (confirm("Clear all notifications?")) {
      setNotifications([]);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf7f4] text-stone-800">

      {/* Header */}
      <header className="border-b border-[#eadfd7] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "#bc8664" }}
            >
              Residence Hub
            </p>

            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-2xl font-bold">
                Notifications
              </h1>

              {unreadCount > 0 && (
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: "#bc8664" }}
                >
                  {unreadCount} New
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-stone-500">
              Stay updated with property activities.
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

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* Actions */}
        <div className="mb-5 flex flex-wrap justify-end gap-3">

          <button
            onClick={markAllAsRead}
            className="flex items-center gap-2 rounded-xl border border-[#eadfd7] bg-white px-4 py-2.5 text-sm font-semibold hover:bg-[#f8f3ef]"
          >
            <CheckCheck size={17} />
            Mark All Read
          </button>

          <button
            onClick={clearAll}
            className="flex items-center gap-2 rounded-xl border border-[#eadfd7] bg-white px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            <Trash2 size={17} />
            Clear All
          </button>

        </div>

        {/* Notifications */}
        <div className="space-y-4">

          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-2xl border border-[#eadfd7] bg-white p-5 shadow-sm transition ${
                !notification.read
                  ? "border-l-4 border-l-[#bc8664]"
                  : ""
              }`}
            >

              <div className="flex items-start gap-4">

                {/* Icon */}
                <NotificationIcon type={notification.type} />

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="flex flex-col justify-between gap-2 sm:flex-row">

                    <div>
                      <div className="flex items-center gap-2">

                        <h2 className="font-bold">
                          {notification.title}
                        </h2>

                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-[#bc8664]" />
                        )}

                      </div>

                      <p className="mt-1 text-sm text-stone-600">
                        {notification.message}
                      </p>
                    </div>

                    <span className="whitespace-nowrap text-xs text-stone-400">
                      {notification.time}
                    </span>

                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-3">

                    {!notification.read && (
                      <button
                        onClick={() =>
                          markAsRead(notification.id)
                        }
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-white"
                        style={{ backgroundColor: "#bc8664" }}
                      >
                        Mark as Read
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteNotification(notification.id)
                      }
                      className="flex items-center gap-1 rounded-lg border border-[#eadfd7] px-3 py-2 text-xs font-semibold text-stone-500 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#eadfd7] bg-white py-16 text-center">

            <Bell
              size={45}
              className="mx-auto mb-4 text-stone-300"
            />

            <h2 className="font-semibold">
              No notifications
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              You're all caught up!
            </p>

          </div>
        )}

      </div>
    </main>
  );
}

/* ---------- Notification Icon ---------- */

function NotificationIcon({
  type,
}: {
  type: Notification["type"];
}) {
  if (type === "Maintenance") {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8f0eb] text-[#bc8664]">
        <Wrench size={20} />
      </div>
    );
  }

  if (type === "Booking") {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f8] text-[#6687a8]">
        <CalendarCheck size={20} />
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff4d8] text-[#a56a13]">
      <IndianRupee size={20} />
    </div>
  );
}