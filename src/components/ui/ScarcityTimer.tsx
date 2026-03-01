"use client";

import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export function ScarcityTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    // Hydration-safe initial time target
    const target = new Date().getTime() + 15 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by not rendering until timeLeft is calculated
  if (!timeLeft) return (
    <div className="bg-red-500 text-white w-full py-2 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-tighter min-h-[32px]">
      <Timer className="w-4 h-4" />
      <span>Cargando oferta...</span>
    </div>
  );

  return (
    <div className="bg-red-500 text-white w-full py-2 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-tighter">
      <Timer className="w-4 h-4" />
      <span>
        La oferta especial termina en: {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}
