import { Users, Stethoscope, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
              Meet the team advancing public health in India
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We are physicians, epidemiologists, data scientists and policy experts helping governments, NGOs and enterprises design, implement and evaluate impactful health programs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1">
                <Stethoscope className="h-4 w-4" /> Clinical Expertise
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 text-teal-800 px-3 py-1">
                <Users className="h-4 w-4" /> Field Operations
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-800 px-3 py-1">
                <LineChart className="h-4 w-4" /> Data & Insights
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"
                alt="Public health team collaborating"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
