"use client";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import WhyUs from "@/components/landing/WhyUs";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyUs />
        <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-700 dark:from-brand-900/50 dark:to-brand-800/50">
          <div className="container mx-auto px-4 text-center md:px-6">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex flex-col items-center gap-6 pt-6">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
                  Ready to secure your GenAI infrastructure?
                </h2>
                <p className="text-brand-100 mb-4 max-w-2xl">
                  Join hundreds of fast-moving teams who trust IronHide for their compliance and security needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-brand-600 font-semibold rounded-full px-8 hover:bg-white/90"
                    onClick={() => console.log("Get Started Now clicked")}
                  >
                    Get Started Now
                  </Button>
                  <Button
                    size="lg"
                    className="bg-brand-500 text-white font-semibold rounded-full px-8 hover:bg-brand-400"
                    onClick={() => console.log("Contact Sales clicked")}
                  >
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
