import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeamGrid from "./components/TeamGrid";
import Values from "./components/Values";
import ContactCTA from "./components/ContactCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TeamGrid />
        <Values />
        <ContactCTA />
      </main>
      <footer className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Arogya Insights. All rights reserved.</p>
          <p>Built for India’s public health ecosystem.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
