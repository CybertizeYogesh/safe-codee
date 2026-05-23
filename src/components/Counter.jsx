"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const target = countRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [mounted]);

  useEffect(() => {
    if (!hasStarted) return;

    const endNum = parseFloat(end);
    if (isNaN(endNum)) {
      setCount(end);
      return;
    }

    const isFloat = end.toString().includes(".");
    const decimals = isFloat ? (end.toString().split(".")[1] || "").length : 0;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const t = Math.min(progress / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - t, 3);
      const currentCount = easeOut * endNum;

      setCount(currentCount.toFixed(decimals));

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endNum.toFixed(decimals));
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  if (!mounted) {
    return <span>{end}</span>;
  }

  return <span ref={countRef}>{count}</span>;
}
