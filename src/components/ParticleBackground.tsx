"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 4000); // Higher density
      const isDark = resolvedTheme === "dark";
      
      const colors = isDark 
        ? ["rgba(239, 68, 68, 0.6)", "rgba(220, 38, 38, 0.7)", "rgba(248, 113, 113, 0.5)"] // Bright Red
        : ["rgba(239, 68, 68, 0.4)", "rgba(220, 38, 38, 0.5)", "rgba(248, 113, 113, 0.4)"]; // Softer Red

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1; // Size between 1 and 3
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          size,
          baseX: x,
          baseY: y,
          density: (Math.random() * 30) + 1,
          color,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Distance between mouse and particle
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Force direction
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Maximum distance to affect
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        
        // Move particle away from mouse
        const directionX = forceDirectionX * force * p.density;
        const directionY = forceDirectionY * force * p.density;

        if (distance < mouse.radius) {
          p.x -= directionX;
          p.y -= directionY;
          
          // Connect particle directly to the mouse cursor (spider-web interaction core)
          ctx.beginPath();
          ctx.strokeStyle = `rgba(239, 68, 68, ${0.8 - distance / mouse.radius})`;
          ctx.lineWidth = 1.0;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          // Return to base position
          if (p.x !== p.baseX) {
            const dx = p.x - p.baseX;
            p.x -= dx / 15;
          }
          if (p.y !== p.baseY) {
            const dy = p.y - p.baseY;
            p.y -= dy / 15;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles lightly to form the structural web
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distx = p.x - p2.x;
          const disty = p.y - p2.y;
          const dist = Math.sqrt(distx * distx + disty * disty);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.4 * (1 - dist / 120)})`; // Red web opacity falloff
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
