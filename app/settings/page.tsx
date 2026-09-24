"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Lock,
  Bell,
  Save,
  ArrowLeft,
} from "lucide-react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Residence Manager",
    email: "manager@residencehub.com",
    phone: "9876543210",
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [notifications, setNotifications] = useState(true);

  const saveProfile = () => {
    alert("Profile updated successfully!");
  };

  const changePassword = () => {
    if (
      !password.current ||
      !password.newPassword ||
      !password.confirm
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password updated successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
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

            <h1 className="mt-1 text-2xl font-bold">
              Settings
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Manage your profile and account preferences.
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

        {/* Profile */}
        <section className="rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8f0eb] text-[#bc8664]">
              <User size={21} />
            </div>

            <div>
              <h2 className="font-bold">
                Profile Information
              </h2>

              <p className="text-sm text-stone-500">
                Update your personal information.
              </p>
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <Input
              label="Full Name"
              icon={<User size={17} />}
              value={profile.name}
              onChange={(value) =>
                setProfile({
                  ...profile,
                  name: value,
                })
              }
            />

            <Input
              label="Email"
              icon={<Mail size={17} />}
              value={profile.email}
              onChange={(value) =>
                setProfile({
                  ...profile,
                  email: value,
                })
              }
              type="email"
            />

            <Input
              label="Phone Number"
              icon={<Phone size={17} />}
              value={profile.phone}
              onChange={(value) =>
                setProfile({
                  ...profile,
                  phone: value,
                })
              }
            />

          </div>

          <button
            onClick={saveProfile}
            className="mt-6 flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: "#bc8664" }}
          >
            <Save size={17} />
            Save Profile
          </button>

        </section>

        {/* Password */}
        <section className="mt-6 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8f0eb] text-[#bc8664]">
              <Lock size={21} />
            </div>

            <div>
              <h2 className="font-bold">
                Change Password
              </h2>

              <p className="text-sm text-stone-500">
                Keep your account secure.
              </p>
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <Input
              label="Current Password"
              value={password.current}
              onChange={(value) =>
                setPassword({
                  ...password,
                  current: value,
                })
              }
              type="password"
            />

            <Input
              label="New Password"
              value={password.newPassword}
              onChange={(value) =>
                setPassword({
                  ...password,
                  newPassword: value,
                })
              }
              type="password"
            />

            <Input
              label="Confirm New Password"
              value={password.confirm}
              onChange={(value) =>
                setPassword({
                  ...password,
                  confirm: value,
                })
              }
              type="password"
            />

          </div>

          <button
            onClick={changePassword}
            className="mt-6 rounded-xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: "#bc8664" }}
          >
            Update Password
          </button>

        </section>

        {/* Notifications */}
        <section className="mt-6 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8f0eb] text-[#bc8664]">
                <Bell size={21} />
              </div>

              <div>
                <h2 className="font-bold">
                  Notifications
                </h2>

                <p className="text-sm text-stone-500">
                  Receive updates about maintenance,
                  bookings and payments.
                </p>
              </div>

            </div>

            <button
              onClick={() =>
                setNotifications(!notifications)
              }
              className={`relative h-6 w-11 rounded-full transition ${
                notifications
                  ? "bg-[#bc8664]"
                  : "bg-stone-300"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                  notifications
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

          <p className="mt-4 text-xs text-stone-500">
            Notifications are currently{" "}
            <span className="font-semibold">
              {notifications ? "enabled" : "disabled"}
            </span>
            .
          </p>

        </section>

      </div>
    </main>
  );
}

/* ---------- Input ---------- */

function Input({
  label,
  value,
  onChange,
  icon,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <div className="relative">

        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border border-[#eadfd7] py-3 pr-4 outline-none focus:border-[#bc8664] ${
            icon ? "pl-10" : "pl-4"
          }`}
        />

      </div>
    </div>
  );
}