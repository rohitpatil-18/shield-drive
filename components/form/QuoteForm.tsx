"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { quoteSchema } from "@/lib/validations/quoteSchema";
import { User, Mail, Phone, MapPin, Calendar, Car, CarFront, ArrowRight, Loader2, ShieldCheck , Clock3, BadgeCheck, CircleDollarSign , ShieldAlert , } from "lucide-react";


type QuoteFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  carYear: string;
  carMake: string;
  carModel: string;
};

export default function QuoteForm() {
  const [years, setYears] = useState<number[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const [isLoadingMakes, setIsLoadingMakes] = useState(false);
  const [isLoadingModels, setIsLoadingModels] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  useEffect(() => {
    async function fetchYears() {
      try {
        const response = await fetch("/api/vehicles/years");
        const data = await response.json();
        setYears(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchYears();
  }, []);

  useEffect(() => {
    if (!selectedYear) {
      setMakes([]);
      setModels([]);
      return;
    }

    async function fetchMakes() {
      try {
        setIsLoadingMakes(true);

        const response = await fetch(
          `/api/vehicles/makes?year=${selectedYear}`
        );

        const data = await response.json();

        setMakes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingMakes(false);
      }
    }

    fetchMakes();
  }, [selectedYear]);

  useEffect(() => {
    if (!selectedYear || !selectedMake) {
      setModels([]);
      return;
    }

    async function fetchModels() {
      try {
        setIsLoadingModels(true);

        const response = await fetch(
          `/api/vehicles/models?year=${selectedYear}&make=${selectedMake}`
        );

        const data = await response.json();

        setModels(data);
        
          } catch (error) {
             console.error(error);
        }
      finally {
        setIsLoadingModels(false);
        }
    }

    fetchModels();
  }, [selectedYear, selectedMake]);

  async function onSubmit(data: QuoteFormData) {
    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "Your quote request has been submitted successfully!"
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        reset();

        setSelectedYear("");
        setSelectedMake("");
        setSelectedModel("");

        setMakes([]);
        setModels([]);

        console.log(result);
      } else {
        // alert(result.message);
         setErrorMessage(
          result.message || "We couldn't submit your quote request. Please try again."
  );
      }
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Our servers are temporarily unavailable. Please try again in a few minutes."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="quote-form"
      className="relative -mt-24 mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl"
    >

    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-10 text-center text-white">

  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur">

    <ShieldCheck className="h-5 w-5 text-emerald-600" /> Trusted by 100,000+ U.S. Drivers

  </div>

  <h2 className="mt-6 text-4xl font-bold md:text-5xl">
    Compare Car Insurance Quotes
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-slate-300">
    Compare personalized quotes from trusted insurance providers and find
    better coverage in under <span className="font-semibold text-white">2 minutes.</span>
  </p>

  <div className="mt-6 flex flex-wrap justify-center gap-3">

  <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">
    <CircleDollarSign className="h-4 w-4" />
    <span>100% Free</span>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
    <ShieldCheck className="h-4 w-4" />
    <span>SSL Protected</span>
  </div>

  <div className="flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-300">
    <BadgeCheck className="h-4 w-4" />
    <span>No Hidden Fees</span>
  </div>

</div>

</div>



      <form
        noValidate
        aria-label="Car insurance quote request form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 p-8 md:p-10"
      >

        {/* Personal Information */}

        <section
          aria-labelledby="personal-information"
          className="mb-2">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">
              <User className="h-6 w-6 text-amber-600" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 " id="personal-information">
                Personal Information
              </h3>

              <p className="text-sm text-slate-500">
                Enter your contact details to receive personalized quotes.
              </p>
            </div>

          </div>

        </section>

        {/* First Name & Last Name */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
                First Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  required
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                  aria-describedby={ errors.firstName ? "firstName-error" : undefined}
                  {...register("firstName")}
                  aria-invalid={!!errors.firstName}
                  className="w-full rounded-xl border  border-slate-200 py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-500 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
                />
              </div>

              <p
                role="alert"
                id="firstName-error"
                className="mt-1 min-h-5 text-sm text-rose-500">
                {errors.firstName?.message}
              </p>
            </div>

          <div>
            <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
                Last Name
            </label>
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              required
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Enter your Last Name"
              aria-describedby={ errors.lastName ? "lastName-error" : undefined}
              {...register("lastName")}
              aria-invalid={!!errors.lastName}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-500 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>

          <p
            role="alert"
            className="mt-1 min-h-5 text-sm text-rose-500">
            {errors.lastName?.message}
          </p>
        </div>
        </div>

        {/* Email & Phone */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
                Email
            </label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              required
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your Email Address"
              aria-describedby={ errors.email ? "email-error" : undefined}
              {...register("email")}
              aria-invalid={!!errors.email}
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-500 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>

            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.email?.message}
            </p>
        </div>

          <div>
            <label
                htmlFor="Phone"
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
                Phone Number
            </label>
          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              required
              id="phone"
              type="tel"
              autoComplete="tel-national"
              inputMode="numeric"
              maxLength={17}
              placeholder="Enter your Phone Number"
              aria-describedby={ errors.phone ? "phone-error" : undefined}
              {...register("phone")}
              onInput={(e) => {e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9()-\s]/g,""
                );
              }}
              aria-invalid={!!errors.phone}
              className="w-full rounded-xl border border-slate-200  py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-500 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>

            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.phone?.message}
            </p>
        </div>
        </div>

        {/* ZIP Code */}
        <div>
          <label
                htmlFor="zipCode"
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
                ZIP Code
            </label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              required
              id="zipCode"
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              maxLength={5}
              onInput={(e) => {e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");}}
              placeholder="ZIP Code"
              aria-describedby={ errors.zipCode ? "zipCode-error" : undefined}
              {...register("zipCode")}
              aria-invalid={!!errors.zipCode}
              className="w-full rounded-xl border  border-slate-200 py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-500 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>

            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.zipCode?.message}
            </p>
        </div>


        <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-6" aria-labelledby="vehicle-information">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Left Side */}
              <div className="flex min-w-0 flex-1 flex-col items-start gap-3 min-[340px]:flex-row">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <CarFront className="h-6 w-6 text-blue-700" />
                </div>

                <div className="min-w-0 flex-1">

                  <h3 className="text-base font-bold leading-tight text-slate-900 xs:text-lg sm:text-xl" id="vehicle-information">
                    Vehicle Information
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Select your vehicle to receive the most accurate insurance quote.
                  </p>

                </div>

              </div>

              {/* Badge */}
              <span
                className=" inline-flex w-fit self-start rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700 sm:self-auto">
                Database Verified
              </span>

            </div>
            

        {/* Vehicle Dropdowns */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
            
          <div className="relative">
              <Calendar
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />

            <label
              htmlFor="carYear"
              className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Vehicle Year
            </label>

            <select
              id="carYear"
              aria-invalid={!!errors.carYear}
              aria-describedby={ errors.carYear ? "carYear-error" : undefined}
              {...register("carYear")}
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);

                setSelectedMake("");
                setSelectedModel("");

                setMakes([]);
                setModels([]);

                setValue("carYear", e.target.value);
                setValue("carMake", "");
                setValue("carModel", "");
              }}
              className="w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-white/60/60 py-3 pl-11 pr-4 text-slate-900 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            >
              <option value="">Select Year</option>

              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.carYear?.message}
            </p>
          </div>

          <div className="relative">
            <Car
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-500"
            />

            <label
              htmlFor="carMake"
              className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Vehicle Make
            </label>

            <select
              id="carMake"
              aria-invalid={!!errors.carMake}
              aria-describedby={ errors.carMake ? "carMake-error" : undefined}
              {...register("carMake")}
              value={selectedMake}
              disabled={!selectedYear || isLoadingMakes}
              onChange={(e) => {
                setSelectedMake(e.target.value);

                setSelectedModel("");

                setModels([]);

                setValue("carMake", e.target.value);
                setValue("carModel", "");
              }}
              className="w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-white/60 py-3 pl-11 pr-4 text-slate-900 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            >
              <option value="">
                {isLoadingMakes ? "Loading vehicle makes..." : "Select Make"}
              </option>

              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.carMake?.message}
            </p>
          </div>

          <div className="relative">
            <CarFront
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-500"
            />

            <label
              htmlFor="carModel"
              className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Vehicle Model
            </label>

            <select
              id="carModel"
              aria-invalid={!!errors.carModel}
              aria-describedby={ errors.carModel ? "carModel-error" : undefined}
              {...register("carModel")}
              value={selectedModel}
              disabled={!selectedMake || isLoadingModels}
              onChange={(e) => {
                setSelectedModel(e.target.value);
                setValue("carModel", e.target.value);
              }}
              className="w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-white/60/60 py-3 pl-11 pr-4 text-slate-900 Loadinhover:border-slate-400g vehicle models... duration-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            >
              <option value="">
                {isLoadingModels ? "Loading vehicle models..." : "Select Model"}
              </option>

              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            
            <p
              role="alert"
              className="mt-1 min-h-5 text-sm text-rose-500">
              {errors.carModel?.message}
            </p>
          </div>

        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">

        <ShieldCheck className="h-5 w-5 text-emerald-600" />

        <p className="text-sm leading-6 text-emerald-700">
          Your selected vehicle is validated against our insurance database.
        </p>

      </div>
      </section>



        {/* Success Message */}
        {successMessage && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center"
          >
            <div className="flex justify-center">
              <BadgeCheck className="h-10 w-10 text-emerald-600" />
            </div>
        
            <h3 className="mt-2 font-semibold text-emerald-700">
              Quote Request Submitted
            </h3>
        
            <p className="mt-1 text-sm text-emerald-600">
              Our insurance specialist will contact you shortly.
            </p>
          </div>
        )}
        
        {/* Error Message */}
        {errorMessage && (
          <div
            role="alert"
            aria-live="assertive"
            className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center"
          >
            <div className="flex justify-center">
              <ShieldAlert className="h-10 w-10 text-red-600" />
            </div>
        
            <h3 className="mt-2 font-semibold text-red-700">
              Submission Failed
            </h3>
        
            <p className="mt-1 text-sm text-red-600">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          aria-live="polite"
          className="group w-full rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-lg font-semibold text-white shadow-lg Loadinhover:border-slate-400g vehicle models... duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={20} className="animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Get My Free Quote
              <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          )}
        </button>
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">

          <p className="text-sm text-slate-600">

          We respect your privacy. Your information is securely encrypted and will only be used to provide personalized insurance quotes.

          </p>

          </div>

      </form>
    </div>
  );
}