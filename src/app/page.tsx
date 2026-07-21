export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div
        className="ambient-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="ambient-glow pointer-events-none absolute top-1/2 left-1/2 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <p className="animate-reveal text-foreground/45 font-mono text-[0.7rem] tracking-[0.35em] uppercase sm:text-xs">
          Brahim Gourgaiz
        </p>

        <h1 className="animate-reveal-delayed text-foreground mt-6 font-serif text-3xl leading-tight italic sm:text-5xl md:text-6xl">
          Coming soon
          <span className="ml-1 inline-flex not-italic" aria-hidden="true">
            <span className="dot text-accent font-mono">.</span>
            <span className="dot text-accent font-mono">.</span>
            <span className="dot text-accent font-mono">.</span>
          </span>
        </h1>
      </div>
    </main>
  );
}
