import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import WhyUs from "@/components/landing/WhyUs";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyUs />
        <section className="bg-indigo-600 py-16 dark:bg-indigo-900/50">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Ready to secure your GenAI infrastructure?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of fast-moving teams who trust IronHide for their compliance and security needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get Started Now
              </button>
              <button className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
