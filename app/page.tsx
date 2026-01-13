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
    <div className="min-h-screen bg-night-950 font-sans text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyUs />
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="glass-panel border-white/10 bg-white/5">
              <CardContent className="flex flex-col items-center gap-6 pt-8 pb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to secure your GenAI infrastructure?
                </h2>
                <p className="text-white/70 max-w-2xl">
                  Join hundreds of fast-moving teams who trust IronHide for their compliance and security needs.
                </p>
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 px-8 text-base font-semibold text-white shadow-[0_15px_40px_-15px_rgba(47,123,255,0.6)] transition hover:brightness-110"
                    onClick={() => console.log("Get Started Now clicked")}
                  >
                    Get Started Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-xl border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
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
