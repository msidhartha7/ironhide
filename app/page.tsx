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
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <WhyUs />
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="border border-slate-200 bg-white shadow-sm">
              <CardContent className="flex flex-col items-center gap-6 pt-8 pb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ready to secure your GenAI infrastructure?
                </h2>
                <p className="text-slate-500 max-w-2xl">
                  Join hundreds of fast-moving teams who trust LookOver for their compliance and security needs.
                </p>
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 min-w-[180px] rounded-xl bg-blue-600 border-blue-600 px-8 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,78,216,0.4)] transition hover:bg-blue-700 hover:border-blue-700"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/sidhartha-privyy/30min",
                        "_blank",
                      )
                    }
                  >
                    Get Early Access
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 min-w-[180px] rounded-xl border border-slate-200 bg-white px-8 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/sidhartha-privyy/30min",
                        "_blank",
                      )
                    }
                  >
                    Book A Call
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
