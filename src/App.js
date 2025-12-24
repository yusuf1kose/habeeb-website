import React, { useEffect, useState } from 'react';

export default function HabeebComingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="page">
      <div className="bg-pattern" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <main className={`hero ${isLoaded ? 'loaded' : ''}`}>
        <section className="hero-left">
          {/* HABEEB title */}
          <div className="kicker">HABEEB</div>

          <h1 className="headline">
            Align your life
            <br />
            with the
            <br />
            Sunnah
          </h1>

          <p className="subhead">
            Small daily actions. Guided by the Sunnah.
          </p>

          {/* Coming soon (cleaner) */}
          <div className="coming-wrap">
            <div className="coming-glow" aria-hidden />
            <div className="coming-soon-pill">
              <span className="spark" aria-hidden />
              <span className="coming-text">Coming Soon</span>
            </div>
          </div>
        </section>

        <section className="hero-right">
          <div className="desert-wrap">
            <div className="moon-glow" />
            <div className="fire-glow" />
            <img
              src="/desert-scene.png"
              alt="Desert Scene"
              className="desert-image"
              draggable="false"
            />
          </div>
        </section>
      </main>

      <section className="below">
        {/* Centered hadith */}
        <div className="hadith">
          <p className="hadith-text">
            "The most beloved deed to Allah is the most regular and constant even if it were little."
          </p>
          <p className="hadith-source">— Allah&apos;s Messenger (ﷺ)</p>
        </div>

        <div className="footer">
          <p className="footer-text">Stay tuned for the launch</p>
          <p className="year">2025</p>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

        .page {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          font-family: 'Quicksand', sans-serif;
          color: rgba(255, 255, 255, 0.9);
          background:
            radial-gradient(1200px 650px at 70% 8%, rgba(255, 255, 255, 0.06), transparent 60%),
            linear-gradient(to bottom, #0f1419 0%, #141b22 50%, #1a1f1b 100%);
        }

        .bg-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(113, 214, 173, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(67, 127, 103, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.12;
          animation: float 25s ease-in-out infinite;
          pointer-events: none;
        }

        .glow-1 {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, #71d6ad 0%, transparent 70%);
          top: -18%;
          right: -12%;
        }

        .glow-2 {
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, #437f67 0%, transparent 70%);
          bottom: -20%;
          left: -14%;
          animation-delay: -12s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -40px) scale(1.06);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.98);
          }
        }

        .hero {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.75rem;
          padding: 4.25rem 2.25rem 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-left {
          text-align: left;
          padding-top: 0.25rem;
        }

        .kicker {
          display: inline-block;
          margin-bottom: 1.05rem;
          font-weight: 900;
          letter-spacing: 0.26em;
          font-size: 1.15rem;
          color: #71d6ad;
          text-shadow: 0 0 28px rgba(113, 214, 173, 0.35);
        }

        .headline {
          font-size: clamp(3.1rem, 6vw, 4.95rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.04;
          margin-bottom: 1.2rem;
        }

        .subhead {
          max-width: 560px;
          font-size: clamp(1.08rem, 1.9vw, 1.25rem);
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
          font-weight: 500;
          margin-bottom: 1.9rem;
        }

        .coming-wrap {
          position: relative;
          max-width: 520px;
        }

        .coming-glow {
          position: absolute;
          inset: -18px;
          background: radial-gradient(
            500px 180px at 20% 30%,
            rgba(113, 214, 173, 0.22),
            transparent 60%
          );
          filter: blur(26px);
          pointer-events: none;
        }

        .coming-soon-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1.05rem 1.55rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(113, 214, 173, 0.18), rgba(67, 127, 103, 0.18));
          border: 1px solid rgba(113, 214, 173, 0.32);
          backdrop-filter: blur(12px);
        }

        .spark {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: #71d6ad;
          box-shadow: 0 0 12px rgba(113, 214, 173, 0.75);
          animation: pulse 2s ease-in-out infinite;
        }

        .coming-text {
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: #71d6ad;
        }

        .coming-sub {
          margin-top: 0.85rem;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.58);
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .hero-right {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 1.2rem;
        }

        .desert-wrap {
          position: relative;
          max-width: 540px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.55);
        }

        .desert-image {
          width: 100%;
          display: block;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 72%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 0%, black 72%, transparent 100%);
        }

        .fire-glow {
          position: absolute;
          bottom: 32%;
          left: 50%;
          width: 170px;
          height: 170px;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(255, 140, 60, 0.25), transparent 70%);
          filter: blur(26px);
          animation: firePulse 3.5s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes firePulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }

        .moon-glow {
          position: absolute;
          top: 10%;
          right: 18%;
          width: 190px;
          height: 190px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 65%);
          filter: blur(30px);
          animation: moonDrift 18s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes moonDrift {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .below {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2.25rem 3.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hadith {
          max-width: 760px;
          text-align: center;
          padding: 1.8rem 2rem;
          background: rgba(113, 214, 173, 0.04);
          border-left: 3px solid rgba(113, 214, 173, 0.35);
          border-radius: 14px;
          margin-top: 2.25rem;
        }

        .hadith-text {
          font-size: 1.05rem;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 0.75rem;
        }

        .hadith-source {
          font-size: 0.9rem;
          color: rgba(113, 214, 173, 0.82);
          font-weight: 700;
          text-align: center;
        }

        .footer {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-text {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.52);
        }

        .year {
          font-size: 0.85rem;
          color: rgba(113, 214, 173, 0.6);
          font-weight: 800;
          letter-spacing: 2px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
