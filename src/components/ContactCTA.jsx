import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-8 md:p-10 bg-gradient-to-br from-white to-emerald-50">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                Partner with our experts
              </h3>
              <p className="mt-2 text-gray-600">
                From strategy to field execution, we help deliver measurable health impact. Get in touch to discuss your needs.
              </p>
            </div>
            <div className="space-y-3">
              <a href="mailto:hello@arogyainsights.in" className="flex items-center gap-2 text-gray-800 hover:text-teal-700">
                <Mail className="h-5 w-5" /> hello@arogyainsights.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 text-gray-800 hover:text-teal-700">
                <Phone className="h-5 w-5" /> +91 99999 99999
              </a>
              <p className="flex items-start gap-2 text-gray-600">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                Bengaluru • New Delhi • Mumbai
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Images are illustrative. Replace with your team photos and real contact details.</p>
      </div>
    </section>
  );
}
