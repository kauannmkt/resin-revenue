
"use client";

import { QuizSection } from "@/components/sections/QuizSection";
import { ScarcityTimer } from "@/components/ui/ScarcityTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-primary/20 flex flex-col">
      {/* Top Banner Urgency */}
      <ScarcityTimer />

      <div className="flex-1 flex flex-col">
        <QuizSection />
      </div>

      {/* Simplified Footer */}
      <footer className="py-6 px-6 border-t bg-white text-center mt-auto">
        <p className="font-black text-primary/40 uppercase tracking-[0.2em] text-[10px]">Viviendo de Resina</p>
      </footer>
    </main>
  );
}
