import React, { useEffect, useRef } from 'react';

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId = 0;

    const resizeCanvas = () => {
      const cv = canvasRef.current;
      if (!cv) return;
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 50;

    const cv = canvasRef.current;
    if (!cv) return () => window.removeEventListener('resize', resizeCanvas);

    const ctx = cv.getContext('2d');
    if (!ctx) return () => window.removeEventListener('resize', resizeCanvas);

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      const cvInner = canvasRef.current;
      if (!cvInner) return;
      const ctxInner = cvInner.getContext('2d');
      if (!ctxInner) return;

      ctxInner.fillStyle = 'rgba(2, 8, 23, 0.05)';
      ctxInner.fillRect(0, 0, cvInner.width, cvInner.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < 0) node.x = cvInner.width;
        if (node.x > cvInner.width) node.x = 0;
        if (node.y < 0) node.y = cvInner.height;
        if (node.y > cvInner.height) node.y = 0;

        // Draw node
        ctxInner.beginPath();
        ctxInner.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctxInner.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctxInner.fill();

        // Draw connections
        nodes.slice(i + 1).forEach(otherNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );

          if (distance < 150) {
            ctxInner.beginPath();
            ctxInner.moveTo(node.x, node.y);
            ctxInner.lineTo(otherNode.x, otherNode.y);
            ctxInner.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / 500})`;
            ctxInner.lineWidth = 1;
            ctxInner.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0f172a 100%)' }}
    />
  );
}