export default function App() {
  return (
    <main className="bg-[#fdfcfa] text-[#1a1a1a]">
      <header className="mx-auto max-w-5xl px-6 py-10 flex items-center justify-between">
        <span className="text-sm tracking-widest">SHIPFAST</span>
        <a href="#pricing" className="rounded-full bg-[#1a1a1a] px-4 py-2 text-sm text-white">Get template</a>
      </header>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-5xl font-light leading-tight">Ship your landing <br/>in an afternoon.</h1>
        <p className="mt-4 max-w-prose text-[#5a5754]">Cream aesthetic, Tailwind, and motion. No heavy builder — just copy, vibe, and ship.</p>
        <div className="mt-8 flex gap-3">
          <a href="#pricing" className="rounded-full bg-[#1a1a1a] px-6 py-3 text-white">Buy for $49</a>
          <a href="#features" className="rounded-full border border-[#ebe7e0] px-6 py-3">See features</a>
        </div>
        <div id="features" className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["Fast","No Next.js bloat, just Vite + Tailwind"],
            ["Readable","Every component is under 100 lines"],
            ["Convert","Hero, pricing, FAQ — all included"],
          ].map(([h,d])=>(
            <div key={h} className="rounded-2xl border border-[#ebe7e0] bg-white p-6">
              <h3 className="font-medium">{h}</h3>
              <p className="mt-1 text-sm text-[#5a5754]">{d}</p>
            </div>
          ))}
        </div>
        <div id="pricing" className="mt-16 rounded-2xl border border-[#ebe7e0] bg-white p-8">
          <h2 className="text-2xl font-light">Pricing</h2>
          <p className="mt-2 text-[#5a5754]">One payment, lifetime updates.</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl">$49</span><span className="text-[#9a9590]">once</span>
          </div>
          <button className="mt-6 w-full rounded-xl bg-[#1a1a1a] py-3 text-white">Get shipfast-landing</button>
        </div>
      </section>
    </main>
  );
}
