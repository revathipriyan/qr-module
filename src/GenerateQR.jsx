import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function GenerateQR() {
  const username = localStorage.getItem('username') || 'Guest';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-pink-600">QR Code for: {username}</h1>
      <QRCodeCanvas value={username} size={200} />
    </div>
  );
}
