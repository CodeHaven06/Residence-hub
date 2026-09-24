"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  Dumbbell,
  Waves,
  Building2,
  Car,
  Users,
} from "lucide-react";
import Link from "next/link";

type Amenity = {
  id: number;
  name: string;
  description: string;
  icon: string;
  location: string;
};

type Booking = {
  id: number;
  amenityId: number;
  amenityName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  bookedBy: string;
};

const amenities: Amenity[] = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Relax and enjoy the community swimming pool.",
    icon: "pool",
    location: "Ground Floor",
  },
  {
    id: 2,
    name: "Fitness Gym",
    description: "Fully equipped gym for residents.",
    icon: "gym",
    location: "1st Floor",
  },
  {
    id: 3,
    name: "Clubhouse",
    description: "Perfect space for meetings and gatherings.",
    icon: "clubhouse",
    location: "Ground Floor",
  },
  {
    id: 4,
    name: "Parking Area",
    description: "Reserve a shared visitor parking slot.",
    icon: "parking",
    location: "Basement",
  },
];

const defaultBookings: Booking[] = [
  {
    id: 1,
    amenityId: 1,
    amenityName: "Swimming Pool",
    date: "2026-09-25",
    checkIn: "10:00",
    checkOut: "11:00",
    bookedBy: "Resident",
  },
];

function getIcon(icon: string) {
  switch (icon) {
    case "pool":
      return <Waves size={26} />;

    case "gym":
      return <Dumbbell size={26} />;

    case "clubhouse":
      return <Building2 size={26} />;

    case "parking":
      return <Car size={26} />;

    default:
      return <Building2 size={26} />;
  }
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

/*
  Checks whether two time ranges overlap.

  Existing: 10:00 - 11:00
  New:      10:30 - 11:30
  Result:   CONFLICT

  Existing: 10:00 - 11:00
  New:      11:00 - 12:00
  Result:   NO CONFLICT
*/
function isTimeOverlapping(
  newStart: number,
  newEnd: number,
  existingStart: number,
  existingEnd: number
) {
  return (
    newStart < existingEnd &&
    newEnd > existingStart
  );
}

export default function AmenitiesPage() {
  const [selectedAmenity, setSelectedAmenity] =
    useState<Amenity | null>(null);

  const [bookings, setBookings] = useState<Booking[]>([]);

  const [date, setDate] = useState("");

  const [checkIn, setCheckIn] = useState("10:00");

  const [checkOut, setCheckOut] = useState("11:00");

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");

  /* --------------------------------
     LOAD BOOKINGS
  -------------------------------- */

  useEffect(() => {
    const savedBookings = localStorage.getItem(
      "amenityBookings"
    );

    if (savedBookings) {
      try {
        setBookings(JSON.parse(savedBookings));
      } catch {
        setBookings(defaultBookings);
      }
    } else {
      setBookings(defaultBookings);
    }
  }, []);

  /* --------------------------------
     SAVE BOOKINGS
  -------------------------------- */

  useEffect(() => {
    localStorage.setItem(
      "amenityBookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  /* --------------------------------
     MESSAGE
  -------------------------------- */

  const showMessage = (
    text: string,
    type: "success" | "error"
  ) => {
    setMessage(text);
    setMessageType(type);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  /* --------------------------------
     FIND BOOKING CONFLICT
  -------------------------------- */

  const findConflict = () => {
    if (!selectedAmenity || !date) {
      return null;
    }

    const newStart = timeToMinutes(checkIn);
    const newEnd = timeToMinutes(checkOut);

    const conflict = bookings.find((booking) => {
      // Different amenity → no conflict
      if (booking.amenityId !== selectedAmenity.id) {
        return false;
      }

      // Different date → no conflict
      if (booking.date !== date) {
        return false;
      }

      const existingStart = timeToMinutes(
        booking.checkIn
      );

      const existingEnd = timeToMinutes(
        booking.checkOut
      );

      // Same amenity + same date + overlapping time
      return isTimeOverlapping(
        newStart,
        newEnd,
        existingStart,
        existingEnd
      );
    });

    return conflict || null;
  };

  /* --------------------------------
     VALIDATE BOOKING
  -------------------------------- */

  const validateBooking = () => {
    if (!selectedAmenity) {
      showMessage(
        "Please select an amenity first.",
        "error"
      );

      return false;
    }

    if (!date) {
      showMessage(
        "Please select a booking date.",
        "error"
      );

      return false;
    }

    const start = timeToMinutes(checkIn);
    const end = timeToMinutes(checkOut);

    if (start >= end) {
      showMessage(
        "Check-out time must be after check-in time.",
        "error"
      );

      return false;
    }

    const conflict = findConflict();

    if (conflict) {
      showMessage(
        `Slot already booked! ${conflict.checkIn} - ${conflict.checkOut} on ${conflict.date}.`,
        "error"
      );

      return false;
    }

    return true;
  };

  /* --------------------------------
     CHECK AVAILABILITY
  -------------------------------- */

  const checkAvailability = () => {
    if (!selectedAmenity) {
      showMessage(
        "Please select an amenity first.",
        "error"
      );

      return;
    }

    if (!date) {
      showMessage(
        "Please select a booking date.",
        "error"
      );

      return;
    }

    const start = timeToMinutes(checkIn);
    const end = timeToMinutes(checkOut);

    if (start >= end) {
      showMessage(
        "Check-out time must be after check-in time.",
        "error"
      );

      return;
    }

    const conflict = findConflict();

    if (conflict) {
      showMessage(
        `❌ Slot already booked from ${conflict.checkIn} to ${conflict.checkOut}. Please choose another time.`,
        "error"
      );

      return;
    }

    showMessage(
      "✓ This time slot is available!",
      "success"
    );
  };

  /* --------------------------------
     CREATE BOOKING
  -------------------------------- */

  const createBooking = () => {
    if (!validateBooking()) {
      return;
    }

    const newBooking: Booking = {
      id: Date.now(),
      amenityId: selectedAmenity!.id,
      amenityName: selectedAmenity!.name,
      date,
      checkIn,
      checkOut,
      bookedBy: "Current Resident",
    };

    setBookings((prev) => [
      ...prev,
      newBooking,
    ]);

    showMessage(
      "✓ Amenity booked successfully!",
      "success"
    );

    setSelectedAmenity(null);
    setDate("");
    setCheckIn("10:00");
    setCheckOut("11:00");
  };

  /* --------------------------------
     CANCEL BOOKING
  -------------------------------- */

  const cancelBooking = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    setBookings((prev) =>
      prev.filter(
        (booking) => booking.id !== id
      )
    );

    showMessage(
      "Booking cancelled successfully.",
      "success"
    );
  };

  return (
    <main className="min-h-screen bg-[#faf7f4] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-[#bc8664]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        {/* HEADER */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#bc8664]">
            Residence Hub
          </p>

          <h1 className="mt-2 text-3xl font-bold text-stone-800 md:text-4xl">
            Amenity Management
          </h1>

          <p className="mt-2 max-w-2xl text-stone-500">
            Check availability and reserve shared
            community amenities.
          </p>
        </div>

        {/* MESSAGE */}
        {message && (
          <div
            className={`mt-6 flex items-start gap-3 rounded-xl border p-4 ${
              messageType === "success"
                ? "border-[#cce4d2] bg-[#edf7ef] text-[#4d8b63]"
                : "border-red-200 bg-red-50 text-red-600"
            }`}
          >
            {messageType === "success" ? (
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0"
              />
            ) : (
              <XCircle
                size={21}
                className="mt-0.5 shrink-0"
              />
            )}

            <p className="text-sm font-semibold">
              {message}
            </p>
          </div>
        )}

        {/* AMENITIES */}
        <section className="mt-8">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-stone-800">
              Available Amenities
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Select an amenity to make a reservation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {amenities.map((amenity) => {
              const selected =
                selectedAmenity?.id === amenity.id;

              return (
                <button
                  key={amenity.id}
                  onClick={() =>
                    setSelectedAmenity(amenity)
                  }
                  className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                    selected
                      ? "border-[#bc8664] ring-2 ring-[#bc8664]/10"
                      : "border-[#eadfd7]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      selected
                        ? "bg-[#bc8664] text-white"
                        : "bg-[#f8f3ef] text-[#bc8664]"
                    }`}
                  >
                    {getIcon(amenity.icon)}
                  </div>

                  <h3 className="mt-4 font-bold text-stone-800">
                    {amenity.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-stone-500">
                    {amenity.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-stone-400">
                    <Building2 size={14} />
                    {amenity.location}
                  </div>
                </button>
              );
            })}

          </div>
        </section>

        {/* BOOKING FORM */}
        <section className="mt-8 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">

          <div className="border-b border-[#eee4de] pb-5">

            <h2 className="text-xl font-bold text-stone-800">
              Book an Amenity
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Select date and check-in/check-out timings.
            </p>

          </div>

          {!selectedAmenity ? (
            <div className="py-10 text-center">

              <CalendarDays
                size={35}
                className="mx-auto text-[#bc8664]"
              />

              <h3 className="mt-4 font-semibold text-stone-800">
                Select an amenity first
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                Choose one of the amenities above to
                continue.
              </p>

            </div>
          ) : (
            <div className="mt-6">

              {/* SELECTED AMENITY */}
              <div className="rounded-xl bg-[#f8f3ef] p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-[#bc8664]">
                  Selected Amenity
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <h3 className="font-bold text-stone-800">
                    {selectedAmenity.name}
                  </h3>

                  <span className="text-stone-400">
                    •
                  </span>

                  <span className="text-sm text-stone-500">
                    {selectedAmenity.location}
                  </span>

                </div>

              </div>

              {/* INPUTS */}
              <div className="mt-6 grid gap-5 md:grid-cols-3">

                {/* DATE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-700">
                    Booking Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="date"
                      value={date}
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                      className="w-full rounded-xl border border-[#dfd2c9] bg-white py-3 pl-11 pr-4 text-stone-700 outline-none transition focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                    />

                  </div>
                </div>

                {/* CHECK-IN */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-700">
                    Check-in Time
                  </label>

                  <div className="relative">

                    <Clock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="time"
                      value={checkIn}
                      onChange={(e) =>
                        setCheckIn(e.target.value)
                      }
                      className="w-full rounded-xl border border-[#dfd2c9] bg-white py-3 pl-11 pr-4 text-stone-700 outline-none transition focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                    />

                  </div>
                </div>

                {/* CHECK-OUT */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-700">
                    Check-out Time
                  </label>

                  <div className="relative">

                    <Clock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                    />

                    <input
                      type="time"
                      value={checkOut}
                      onChange={(e) =>
                        setCheckOut(e.target.value)
                      }
                      className="w-full rounded-xl border border-[#dfd2c9] bg-white py-3 pl-11 pr-4 text-stone-700 outline-none transition focus:border-[#bc8664] focus:ring-2 focus:ring-[#bc8664]/10"
                    />

                  </div>
                </div>

              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={checkAvailability}
                  className="rounded-xl border border-[#bc8664] px-6 py-3 font-semibold text-[#bc8664] transition hover:bg-[#f8f3ef]"
                >
                  Check Availability
                </button>

                <button
                  onClick={createBooking}
                  className="rounded-xl bg-[#bc8664] px-6 py-3 font-semibold text-white transition hover:bg-[#a96f50]"
                >
                  Confirm Booking
                </button>

                <button
                  onClick={() => {
                    setSelectedAmenity(null);
                    setDate("");
                  }}
                  className="rounded-xl border border-[#dfd2c9] px-6 py-3 font-semibold text-stone-600 transition hover:bg-[#faf7f4]"
                >
                  Cancel
                </button>

              </div>

            </div>
          )}

        </section>

        {/* BOOKINGS */}
        <section className="mt-8 rounded-2xl border border-[#eadfd7] bg-white p-6 shadow-sm md:p-8">

          <div className="flex flex-col gap-2 border-b border-[#eee4de] pb-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold text-stone-800">
                Upcoming Bookings
              </h2>

              <p className="mt-1 text-sm text-stone-500">
                View and manage scheduled amenity bookings.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full bg-[#f8f3ef] px-4 py-2 text-sm font-semibold text-[#bc8664]">
              <Users size={16} />
              {bookings.length} Bookings
            </div>

          </div>

          <div className="mt-6 space-y-4">

            {bookings.length === 0 ? (
              <div className="py-10 text-center">

                <CalendarDays
                  size={35}
                  className="mx-auto text-[#bc8664]"
                />

                <h3 className="mt-4 font-semibold text-stone-800">
                  No bookings yet
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  Your upcoming amenity bookings will
                  appear here.
                </p>

              </div>
            ) : (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-[#eee4de] bg-[#fffdfb] p-5"
                >

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f8f3ef] text-[#bc8664]">
                        <CalendarDays size={22} />
                      </div>

                      <div>

                        <h3 className="font-bold text-stone-800">
                          {booking.amenityName}
                        </h3>

                        <p className="mt-1 text-sm text-stone-500">
                          Date: {booking.date}
                        </p>

                        <p className="mt-1 text-sm text-stone-500">
                          Time: {booking.checkIn} –{" "}
                          {booking.checkOut}
                        </p>

                        <p className="mt-1 text-xs text-stone-400">
                          Booked by {booking.bookedBy}
                        </p>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        cancelBooking(booking.id)
                      }
                      className="flex w-fit items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                    >
                      <XCircle size={17} />
                      Cancel Booking
                    </button>

                  </div>

                </div>
              ))
            )}

          </div>

        </section>

      </div>
    </main>
  );
}