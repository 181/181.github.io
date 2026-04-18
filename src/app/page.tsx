// src/app/page.tsx
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Hero />
      <Projects username="181" />
    </main>
  );
}