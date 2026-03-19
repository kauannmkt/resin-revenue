"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Check, ArrowRight, Star } from "lucide-react";
import { QuizResult } from "@/components/quiz/QuizResult";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const STEPS = [
  {
    id: 1,
    type: "question",
    question: "¿Trabajas actualmente con resina o con algo relacionado a la artesanía?",
    sub: "Elige una opción abajo:",
    options: [
      { label: "Sí, soy una artesana profesional.", emoji: "🤩" },
      { label: "Sí, lo hago como pasatiempo o para complementar mis ingresos.", emoji: "😊" },
      { label: "No, pero quiero aprender y ganar dinero", emoji: "😉" },
      { label: "Solo quiero aprender por gusto.", emoji: "😌" },
    ]
  },
  {
    id: 2,
    type: "question",
    question: "¿Ya has hecho algún curso o entrenamiento sobre resina?",
    options: [
      { label: "Nunca he hecho uno, este será mi primer curso.", emoji: "🤩" },
      { label: "Ya hice un curso", emoji: "📖" },
      { label: "Ya he hecho varios cursos.", emoji: "🎓" },
    ]
  },
  {
    id: 3,
    type: "question",
    question: "¿Quanto tiempo al día tienes actualmente para dedicar a las piezas de resina?",
    options: [
      { label: "15 minutos - 1 hora", emoji: "🕑" },
      { label: "3 a 4 horas", emoji: "🕓" },
      { label: "¡Tengo todo el día!", emoji: "🕙" },
    ]
  },
  {
    id: 4,
    type: "multi",
    question: "¿Cuál es tu mayor problema hoy?",
    sub: "Elige una o más opciones para continuar:",
    options: [
      { label: "No tengo dinero suficiente para hacer lo que me gusta.", emoji: "😞" },
      { label: "No tengo tiempo suficiente para compartir con mi familia.", emoji: "😰" },
      { label: "No logro ahorrar dinero.", emoji: "😭" },
    ]
  },
  {
    id: 5,
    type: "multi",
    question: "¿Qué deseas lograr hoy?",
    sub: "Elige una o más opciones para continuar:",
    options: [
      { label: "Me gustaría mejorar mi situación económica para alcanzar la independencia financiera.", emoji: "📈" },
      { label: "Quiero impulsar mis resultados al máximo.", emoji: "🎯" },
      { label: "Quiero ganar mucho más dinero.", emoji: "🤯" },
    ]
  },
  {
    id: 6,
    type: "question",
    question: "Cuando ya estés creando tus piezas de resina, ¿cuál será tu principal objetivo?",
    sub: "Sé sincera, es muy importante.",
    options: [
      { label: "Quiero aprender cómo vender y ganar dinero con mis piezas de resina.", emoji: "📈" },
      { label: "Impulsar aún más los resultados de mi negocio.", emoji: "🥂" },
      { label: "Solo me interesa hacer las piezas de resina.", emoji: "🎓" },
    ]
  },
  {
    id: 7,
    type: "info",
    title: "¿Necesitas tener experiencia o ser especialista?",
    imageId: "moldes-silicona",
    text: "¡La respuesta es no! Gracias a los moldes de silicona, hacer piezas de resina se vuelve mucho más fácil. En mi método, aprendes el paso a paso completo, ¡incluso sin experiencia!",
    button: "¡Quiero aprender con moldes!"
  },
  {
    id: 8,
    type: "info",
    title: "¡La mejor parte!",
    imageId: "cost-production",
    text: "¡Lo mejor es que el costo de producción es muy bajo! Con menos de $10 dólares puedes crear piezas hermosas como aretes, collares y llaveros. ¡Esto significa que puedes comenzar con poco dinero y aún así tener un excelente margen de ganancia!",
    button: "¡Sí, quiero crear mis piezas!"
  },
  {
    id: 9,
    type: "testimonials",
    title: "¡Testimonios de las alumnas!",
    text: "Este es el resultado de las alumnas que aplicaron nuestro entrenamiento y lo lograron.",
    button: "¡Sí, quiero los mismos resultados!"
  },
  {
    id: 10,
    type: "loading",
    title: "¡Estás a pocos segundos de iniciar un gran cambio!",
    text: "Preparando un entrenamiento exclusivo para ti"
  }
];

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedMulti, setSelectedMulti] = useState<number[]>([]);
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    if (STEPS[currentStep].type === "loading") {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsFinished(true), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedMulti([]);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedMulti([]);
    }
  };

  if (isFinished) {
    return <QuizResult />;
  }

  const step = STEPS[currentStep];
  const progress = (currentStep / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Progress Header with Back Arrow */}
      {step.type !== "loading" && (
        <div className="w-full max-w-md px-6 pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`text-muted-foreground transition-opacity ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              aria-label="Volver"
            >
              <div className="bg-accent/50 p-2 rounded-full hover:bg-accent transition-colors">
                <ArrowLeft className="w-4 h-4 text-primary" />
              </div>
            </button>
            <span className="text-[10px] font-black uppercase text-primary tracking-widest">
              PROGRESO {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-1 bg-accent" />
        </div>
      )}

      <div className="flex-1 w-full max-w-md px-6 py-8 animate-fade-in flex flex-col">
        {step.type === "question" || step.type === "multi" ? (
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                {step.question}
              </h2>
              {step.sub && (
                <p className="text-muted-foreground font-medium">{step.sub}</p>
              )}
            </div>

            <div className="space-y-3">
              {step.options?.map((option, idx) => {
                const isSelected = selectedMulti.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => step.type === "multi" ? toggleMulti(idx) : handleNext()}
                    className={`w-full p-6 text-left flex items-center justify-between border-4 rounded-3xl transition-all ${
                      isSelected ? 'border-primary bg-primary/5' : 'border-accent hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-bold leading-tight">{option.label}</span>
                    </div>
                    {step.type === "multi" && (
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'bg-primary border-primary' : 'border-muted'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {step.type === "multi" && (
              <Button 
                onClick={handleNext}
                disabled={selectedMulti.length === 0}
                className="w-full h-16 text-xl font-black bg-primary text-white rounded-3xl"
              >
                Continuar
              </Button>
            )}
          </div>
        ) : step.type === "info" ? (
          <div className="space-y-8 text-center animate-slide-up">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl bg-accent/10">
              {PlaceHolderImages.find(img => img.id === step.imageId)?.imageUrl && (
                <Image 
                  src={PlaceHolderImages.find(img => img.id === step.imageId)!.imageUrl} 
                  alt={step.title || ""} 
                  fill 
                  className="object-cover"
                  unoptimized
                  data-ai-hint={PlaceHolderImages.find(img => img.id === step.imageId)!.imageHint}
                />
              )}
            </div>
            <h2 className="text-3xl font-black leading-tight">{step.title}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground font-medium">
              {step.text}
            </p>
            <Button 
              onClick={handleNext}
              className="w-full h-20 text-xl font-black bg-primary text-white rounded-3xl shadow-xl animate-bounce"
            >
              {step.button}
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        ) : step.type === "testimonials" ? (
          <div className="space-y-8 text-center animate-slide-up">
            <h2 className="text-2xl font-black leading-tight">{step.title}</h2>
            <p className="text-muted-foreground">{step.text}</p>
            
            <Carousel 
              className="w-full" 
              opts={{ loop: true }}
              plugins={[autoplay.current]}
            >
              <CarouselContent>
                {['student-success-1', 'student-success-2', 'student-success-3'].map((id, idx) => {
                  const img = PlaceHolderImages.find(item => item.id === id);
                  return (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg mx-2 bg-accent/20">
                        {img?.imageUrl && (
                          <Image 
                            src={img.imageUrl} 
                            alt="Testimonio" 
                            fill 
                            className="object-contain p-2"
                            unoptimized
                          />
                        )}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <Button 
              onClick={handleNext}
              className="w-full h-20 text-xl font-black bg-secondary text-white rounded-3xl shadow-xl"
            >
              {step.button}
            </Button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black leading-tight">{step.title}</h2>
              <p className="text-lg text-muted-foreground font-medium">{step.text}</p>
            </div>
            
            <div className="w-full space-y-4">
              <div className="text-5xl font-black text-primary animate-pulse">
                {loadingProgress}%
              </div>
              <Progress value={loadingProgress} className="h-4 bg-accent" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function toggleMulti(idx: number) {
    if (selectedMulti.includes(idx)) {
      setSelectedMulti(selectedMulti.filter(i => i !== idx));
    } else {
      setSelectedMulti([...selectedMulti, idx]);
    }
  }
}
