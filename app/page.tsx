export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "We use Shopify OAuth so you authorize access in one click — no API keys to copy or paste."
    },
    {
      q: "What counts as dead stock?",
      a: "Any product variant with zero fulfilled orders in the last 90 days is flagged as dead stock."
    },
    {
      q: "How is the storage cost calculated?",
      a: "You enter your monthly cost per cubic foot and we multiply it by each product's volume and units on hand."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Dead Stock Finder
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find dead inventory<br />
          <span className="text-[#58a6ff]">costing you warehouse fees</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store in seconds. We scan your order history, surface every product with zero sales in 90+ days, and show you exactly what it's costing you to store it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to connect. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "90 days", label: "Stale threshold" },
            { value: "Real $", label: "Storage cost calc" },
            { value: "1-click", label: "Shopify OAuth" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#6e7681] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Shopify product scans",
              "90-day zero-sales detection",
              "Storage cost calculator",
              "CSV export of dead stock list",
              "Weekly email digest",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150 text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          &copy; {new Date().getFullYear()} Dead Stock Finder. All rights reserved.
        </p>
      </section>
    </main>
  );
}
