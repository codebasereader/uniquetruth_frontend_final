import { useEffect, useRef } from "react";

// Logo sits at the center of a single firefly orb — halos pulse around it like the firefly core

export default function GlowLogo({ src = "/assets/nobglogo.png", size = 120 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = src;

    let animId;
    let start = null;

    // Fireflies swarming around the logo orb
    const COUNT = 55;
    const flies = Array.from({ length: COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 80 + Math.random() * 180,
      speed: (Math.random() - 0.5) * 0.008,
      offsetY: (Math.random() - 0.5) * 60,
      pulseSpeed: 0.6 + Math.random() * 1.2,
      pulseOffset: Math.random() * Math.PI * 2,
      pulseThreshold: 0.55 + Math.random() * 0.3,
      vr: (Math.random() - 0.5) * 0.5, // radial drift
      baseRadius: 80 + Math.random() * 180,
      hue: Math.random() > 0.4 ? "#ffffaa" : "#ccffaa",
      glowColor: Math.random() > 0.4 ? "rgba(200,255,100," : "rgba(140,220,80,",
      dotSize: 1.5 + Math.random() * 2,
    }));

    const draw = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;

      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      ctx.clearRect(0, 0, W, H);

      // ── Outer ambient bloom behind logo ──
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 1.8);
      bloom.addColorStop(0, "rgba(100,220,100,0.10)");
      bloom.addColorStop(0.4, "rgba(80,180,80,0.05)");
      bloom.addColorStop(1, "transparent");
      ctx.fillStyle = bloom;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // ── Pulsing halos around logo (firefly orb layers) ──
      const pulse = (Math.sin(t * 1.1) + 1) / 2; // 0→1
      const pulse2 = (Math.sin(t * 0.7 + 1) + 1) / 2;

      const halos = [
        { r: size * 0.72, alpha: 0.18 + pulse * 0.22, color: [180, 255, 120] },
        { r: size * 1.05, alpha: 0.1 + pulse2 * 0.14, color: [120, 210, 80] },
        { r: size * 1.45, alpha: 0.05 + pulse * 0.08, color: [80, 180, 60] },
        { r: size * 1.9, alpha: 0.02 + pulse2 * 0.04, color: [60, 150, 40] },
      ];

      halos.forEach(({ r, alpha, color }) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0.5, `rgba(${color},${alpha})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Firefly particles orbiting around logo ──
      flies.forEach((f) => {
        f.angle += f.speed;
        f.radius = f.baseRadius + Math.sin(t * 0.3 + f.pulseOffset) * f.vr * 10;

        const x = cx + Math.cos(f.angle) * f.radius;
        const y = cy + Math.sin(f.angle) * f.radius * 0.55 + f.offsetY; // elliptical orbit

        // brightness blink
        const raw = (Math.sin(t * f.pulseSpeed + f.pulseOffset) + 1) / 2;
        const brightness =
          raw < f.pulseThreshold
            ? 0
            : (raw - f.pulseThreshold) / (1 - f.pulseThreshold);
        const eased = brightness * brightness;

        if (eased < 0.01) return; // skip invisible

        // outer soft glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, f.dotSize * 5);
        g.addColorStop(0, f.glowColor + eased * 0.6 + ")");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, f.dotSize * 5, 0, Math.PI * 2);
        ctx.fill();

        // bright core dot
        ctx.fillStyle = f.hue
          .replace(")", `,${0.5 + eased * 0.5})`)
          .replace("#", "rgba(")
          .replace("ffff", "255,255,")
          .replace("ccff", "204,255,")
          .replace("aa)", "170)");
        // simpler: just draw a small white-ish dot
        ctx.globalAlpha = 0.5 + eased * 0.5;
        ctx.fillStyle = f.hue;
        ctx.beginPath();
        ctx.arc(x, y, f.dotSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // ── Logo image centered ──
      if (img.complete && img.naturalWidth > 0) {
        const half = size / 2;
        ctx.drawImage(img, cx - half, cy - half, size, size);
      }

      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    img.onload = () => {
      animId = requestAnimationFrame(draw);
    };
    // start even if image not loaded yet so fireflies begin
    animId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [src, size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
