import { faqs } from '@/lib/site';

/** Plain questions and answers: readable for people, quotable for search and AI. */
export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-32 lg:px-10" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <h2 id="faq-title" className="font-display text-[clamp(44px,6vw,104px)] font-medium text-ink display-tight">
          Questions people ask us.
        </h2>
        <div className="border-t border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">{f.q}</h3>
                <span aria-hidden className="relative h-5 w-5 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 text-[18px] leading-[1.6] text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
