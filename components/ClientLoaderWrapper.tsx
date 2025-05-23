"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function ClientLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
} 