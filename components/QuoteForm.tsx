"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid UK phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter your property address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Window Cleaning",
  "Gutter Cleaning",
  "Conservatory Roof Cleaning",
  "Fascia & Soffit Cleaning",
  "UPVC Cleaning",
  "Commercial Window Cleaning",
  "Residential Window Cleaning",
  "Multiple Services / Full Package",
  "Other",
];

interface QuoteFormProps {
  className?: string;
  variant?: "card" | "inline";
}

export default function QuoteForm({ className, variant = "card" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Quote request:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex flex-col items-center justify-center text-center py-12 px-6",
          variant === "card" && "rounded-2xl border border-green-100 bg-green-50 shadow-soft",
          className
        )}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
          Thank you! We'll be in touch within 2 hours during business hours to provide your free, no-obligation quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-brand-600 hover:text-brand-700 font-medium"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        variant === "card" && "rounded-2xl border border-slate-100 bg-white shadow-card p-6 lg:p-8",
        className
      )}
      noValidate
      aria-label="Free quote request form"
    >
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="John Smith"
              className={cn("input-field", errors.name && "border-red-300 focus:border-red-400 focus:ring-red-400/20")}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="07XXX XXXXXX"
              className={cn("input-field", errors.phone && "border-red-300 focus:border-red-400 focus:ring-red-400/20")}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            className={cn("input-field", errors.email && "border-red-300 focus:border-red-400 focus:ring-red-400/20")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1.5">
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("address")}
            id="address"
            type="text"
            autoComplete="street-address"
            placeholder="123 Example Street, Newquay, TR7"
            className={cn("input-field", errors.address && "border-red-300 focus:border-red-400 focus:ring-red-400/20")}
          />
          {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            {...register("service")}
            id="service"
            className={cn("input-field", errors.service && "border-red-300 focus:border-red-400 focus:ring-red-400/20")}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Additional Information <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={3}
            placeholder="Any additional details about your property, access requirements or specific needs..."
            className="input-field resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending your request...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Get My Free Quote
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-400">
          No obligation. We'll respond within 2 hours during business hours.
          Your details are kept private and never shared.
        </p>
      </div>
    </form>
  );
}
