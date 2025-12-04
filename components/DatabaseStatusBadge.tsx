"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export function DatabaseStatusBadge() {
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch("/api/health", {
          method: "GET",
        });
        setIsConnected(response.ok);
      } catch {
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkConnection();
    const interval = setInterval(checkConnection, 10000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Badge variant="secondary">Checking...</Badge>;
  }

  return (
    <Badge variant={isConnected ? "default" : "destructive"}>
      {isConnected ? "✓ Database Connected" : "✗ Database Disconnected"}
    </Badge>
  );
}
