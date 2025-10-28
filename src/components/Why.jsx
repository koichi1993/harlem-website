import { useReveal } from "../hooks/useReveal";

export default function Why() {
  const { ref, on } = useReveal(0.25);
  return (
    <section className="why" aria-labelledby="why-title">
      <div ref={ref} className={`why__inner ${on ? "in" : ""}`}>
        <div className="why__left">
          <p className="why__kicker">Why we’re packed</p>
          <h2 id="why-title" className="why__title">
            Shibuya’s <span>hip-hop</span> heartbeat
          </h2>
          <p className="why__lead">
            Since 1997, HARLEM has been the temple of Tokyo street sound.
            Two floors, heavyweight systems, and a room that moves as one.
            Newcomers feel at home. Regulars run it like family.
          </p>

          <ul className="why__bullets">
            <li><span>Top international & Japan DJs</span></li>
            <li><span>Pure hip-hop / R&B / reggae sets</span></li>
            <li><span>Iconic Shibuya location</span></li>
            <li><span>Beginner-friendly vibe, pro-level energy</span></li>
          </ul>

          <div className="why__badges">
            <div className="badge">Since ’97</div>
            <div className="badge badge--outline">Two Floors</div>
            <div className="badge">All Night Vibes</div>
          </div>
        </div>

        <div className="why__right" aria-hidden="true">
          <div className="why__card">
            <div className="why__glow" />
            <h3>What makes us different</h3>
            <p>
              Not just a club. A culture hub. The lineup is curated for movement:
              bars, breaks, and basslines that hit clean.
            </p>
            <div className="why__ticks">
              <div>✔ Crowd that knows the drops</div>
              <div>✔ Sound tuned for low-end punch</div>
              <div>✔ DJs who read the room</div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional ticker line for hip-hop flavor */}
      <div className="why__ticker" aria-hidden="true">
        <div className="why__track">
          HARLEM • SHIBUYA • HIP-HOP • R&B • REGGAE • ALL NIGHT • HARLEM • SHIBUYA • HIP-HOP • R&B • REGGAE • ALL NIGHT •
        </div>
      </div>
    </section>
  );
}
