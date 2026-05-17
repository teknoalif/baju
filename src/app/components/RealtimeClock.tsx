"use client";

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function RealtimeClock() {
  const [time, setTime] = useState("");
  const [hijriDate, setHijriDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // 1. Format Jam Realtime (WIB)
      setTime(now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }) + " WIB");

      // 2. Kalkulasi Sederhana / Pendekatan Kalender Hijriah untuk Tahun 1447 H (Mei 2026)
      try {
        const hijriFormatter = new Intl.DateTimeFormat('id-ID-u-ca-islamic-umalqura', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        setHijriDate(hijriFormatter.format(now));
      } catch (e) {
        setHijriDate("Menghitung Kalender Hijriah...");
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-sans text-center sm:text-left">
      <div className="flex items-center gap-1.5 text-amber-400 font-black italic tracking-wider text-xs sm:text-sm">
        <Clock size={14} className="animate-spin-[spin_3s_linear_infinite]" />
        <span>{time || "00:00:00 WIB"}</span>
      </div>
      <div className="hidden sm:block text-slate-400 font-bold text-xs">|</div>
      <div className="text-white font-extrabold text-xs tracking-wider uppercase bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
        🌙 {hijriDate || " Loading Taqwim..."}
      </div>
    </div>
  );
} 
