import { ShieldCheck, Activity, HeartHandshake, Globe2 } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Evidence-first advice with transparency and ethics at the core.",
  },
  {
    icon: Activity,
    title: "Impact",
    desc: "Programs designed for measurable outcomes at population scale.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "Working closely with governments, NGOs and communities.",
  },
  {
    icon: Globe2,
    title: "Equity",
    desc: "Solutions tailored for India's diverse health contexts.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-16 md:py-20 bg-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Our Values & Expertise
          </h2>
          <p className="mt-2 text-gray-600">
            We bring rigorous methods and on-ground experience across primary care, disease control, digital health and health financing.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white/70 backdrop-blur p-5 border border-emerald-100">
              <div className="h-10 w-10 rounded-md bg-emerald-600 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
