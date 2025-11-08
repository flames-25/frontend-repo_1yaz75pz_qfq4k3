import { Building2, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Arogya Insights
              </p>
              <p className="text-xs text-gray-500 -mt-1">Public Health Consultancy</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#team" className="text-gray-700 hover:text-teal-700">Team</a>
            <a href="#values" className="text-gray-700 hover:text-teal-700">Expertise</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-700">Contact</a>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a href="mailto:hello@arogyainsights.in" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-teal-700">
              <Mail className="h-4 w-4" /> hello@arogyainsights.in
            </a>
            <span className="h-4 w-px bg-gray-200" />
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-teal-700">
              <Phone className="h-4 w-4" /> +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
