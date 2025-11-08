import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Ananya Mehta",
    role: "Founder & Public Health Specialist",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    bio:
      "15+ years leading national disease control programs, health systems strengthening and maternal-child health initiatives.",
    linkedin: "#",
  },
  {
    name: "Rahul Iyer",
    role: "Health Economist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    bio:
      "Cost-effectiveness analysis, program budgeting and financing models for state-level health schemes.",
    linkedin: "#",
  },
  {
    name: "Dr. Sana Khan",
    role: "Epidemiologist",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    bio:
      "Infectious disease surveillance, outbreak investigation and monitoring & evaluation.",
    linkedin: "#",
  },
  {
    name: "Vikram Singh",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop",
    bio:
      "Machine learning for health, geospatial analysis, dashboarding and decision support systems.",
    linkedin: "#",
  },
];

export default function TeamGrid() {
  return (
    <section id="team" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Our Leadership
          </h2>
          <p className="mt-2 text-gray-600">
            A multidisciplinary team with deep experience across public health domains.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-teal-700 font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                <div className="mt-3">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-teal-700"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" /> Connect
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
