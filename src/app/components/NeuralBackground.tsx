import React, { useEffect, useRef } from 'react';

type SectionIntensity = {
  nodeCountFactor: number;
  lineAlphaFactor: number;
  nodeAlphaFactor: number;
  maxDistance: number;
  speed: number;
};

const SECTION_PROFILES: Record<string, SectionIntensity> = {
  hero: {
    nodeCountFactor: 1.0,
    lineAlphaFactor: 0.3,
    nodeAlphaFactor: 0.65,
    maxDistance: 135,
    speed: 0.4,
  },
  about: {
    nodeCountFactor: 0.6,
    lineAlphaFactor: 0.18,
    nodeAlphaFactor: 0.45,
    maxDistance: 110,
    speed: 0.3,
  },
  projects: {
    nodeCountFactor: 0.3,
    lineAlphaFactor: 0.07,
    nodeAlphaFactor: 0.22,
    maxDistance: 90,
    speed: 0.18,
  },
  experience: {
    nodeCountFactor: 0.2,
    lineAlphaFactor: 0.05,
    nodeAlphaFactor: 0.18,
    maxDistance: 80,
    speed: 0.15,
  },
  'tech-stack': {
    nodeCountFactor: 0.2,
    lineAlphaFactor: 0.05,
    nodeAlphaFactor: 0.18,
    maxDistance: 80,
    speed: 0.15,
  },
  contact: {
    nodeCountFactor: 0.6,
    lineAlphaFactor: 0.2,
    nodeAlphaFactor: 0.45,
    maxDistance: 115,
    speed: 0.3,
  },
};

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Device tier calculation
    const getDeviceNodeCapacity = (w: number) => {
      if (w < 640) return 14; // Mobile: minimal
      if (w < 1024) return 24; // Tablet: reduced
      return 42; // Desktop: full
    };

    let maxNodes = getDeviceNodeCapacity(width);

    // Node state definitions
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      hue: number;
    }

    const nodes: Node[] = [];

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < maxNodes; i++) {
        const speed = prefersReducedMotion ? 0 : (Math.random() * 0.4 + 0.1);
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          baseRadius: Math.random() * 1.2 + 1.2,
          hue: Math.random() > 0.4 ? 217 : Math.random() > 0.5 ? 270 : 190, // Blue, purple, cyan accents
        });
      }
    };

    initNodes();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newCapacity = getDeviceNodeCapacity(width);
      if (newCapacity !== maxNodes) {
        maxNodes = newCapacity;
        initNodes();
      }
    };

    window.addEventListener('resize', handleResize);

    // Track active section to dynamically adjust intensity
    let currentProfile: SectionIntensity = { ...SECTION_PROFILES.hero };
    let targetProfile: SectionIntensity = { ...SECTION_PROFILES.hero };

    const updateActiveSection = () => {
      const sectionIds = ['hero', 'about', 'projects', 'experience', 'tech-stack', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            targetProfile = SECTION_PROFILES[sectionIds[i]] || SECTION_PROFILES.hero;
            return;
          }
        }
      }
      targetProfile = SECTION_PROFILES.hero;
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    // Lerp helper
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      // Smoothly interpolate current intensity to target
      currentProfile.nodeCountFactor = lerp(currentProfile.nodeCountFactor, targetProfile.nodeCountFactor, 0.05);
      currentProfile.lineAlphaFactor = lerp(currentProfile.lineAlphaFactor, targetProfile.lineAlphaFactor, 0.05);
      currentProfile.nodeAlphaFactor = lerp(currentProfile.nodeAlphaFactor, targetProfile.nodeAlphaFactor, 0.05);
      currentProfile.maxDistance = lerp(currentProfile.maxDistance, targetProfile.maxDistance, 0.05);
      currentProfile.speed = lerp(currentProfile.speed, targetProfile.speed, 0.05);

      ctx.clearRect(0, 0, width, height);

      const activeCount = Math.max(4, Math.floor(nodes.length * currentProfile.nodeCountFactor));
      const activeNodes = nodes.slice(0, activeCount);
      const isMobile = width < 640;

      // Update positions
      if (!prefersReducedMotion) {
        activeNodes.forEach((node) => {
          const speedMultiplier = (isMobile ? 0.4 : 1.0) * (currentProfile.speed / 0.4);
          node.x += node.vx * speedMultiplier;
          node.y += node.vy * speedMultiplier;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        });
      }

      // Draw connection lines
      const maxDist = currentProfile.maxDistance;
      const lineAlphaBase = currentProfile.lineAlphaFactor;

      for (let i = 0; i < activeNodes.length; i++) {
        const nodeA = activeNodes[i];
        for (let j = i + 1; j < activeNodes.length; j++) {
          const nodeB = activeNodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha.toFixed(3)})`; // subtle electric blue
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      const nodeAlpha = currentProfile.nodeAlphaFactor;
      activeNodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 90%, 65%, ${nodeAlpha.toFixed(3)})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      // Draw single static frame
      render();
    } else {
      animationId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateActiveSection);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Refined Deep Navy/Black Background with subtle ambient atmospheric glows */}
      <div className="absolute inset-0 bg-[#030712] bg-gradient-to-b from-[#020617] via-[#070e24] to-[#020617]" />
      
      {/* Subtle non-intrusive ambient color spots for depth */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl opacity-20" />

      {/* Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}