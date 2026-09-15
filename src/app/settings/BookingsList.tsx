'use client';

import { useState, useEffect } from 'react';

type Booking = {
  id: number;
  phoneNumber: string;
  name: string;
  date: string;
  time: string;
  service: string;
  status: string;
  createdAt: string;
};

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch('/api/bookings');
        if (res.ok) {
          const data = await res.json();
          setBookings(data);
        }
      } catch (err) {
        console.error('Failed to fetch bookings', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  if (loading) return <div className="py-4">Loading bookings...</div>;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Confirmed Bookings</h3>
      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date} at {booking.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
