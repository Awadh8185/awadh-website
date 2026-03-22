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
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000); // Responsive density
      const isDark = resolvedTheme === "dark";
      
      const colors = isDark 
        ? ["rgba(99, 102, 241, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(255, 255, 255, 0.2)"] // Dark mode colors (indigo, purple, faint white)
        : ["rgba(37, 99, 235, 0.4)", "rgba(147, 51, 234, 0.4)", "rgba(0, 0, 0, 0.1)"]; // Light mode colors (blue, purple, faint black)

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
        } else {
          // Return to base position
          if (p.x !== p.baseX) {
            const dx = p.x - p.baseX;
            p.x -= dx / 10;
          }
          if (p.y !== p.baseY) {
            const dy = p.y - p.baseY;
            p.y -= dy / 10;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect nearby particles lightly if close to mouse for extra effect (optional)
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
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
