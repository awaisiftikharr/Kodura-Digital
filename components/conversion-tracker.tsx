"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

export function ConversionTracker({
  eventName,
  eventParameters,
  storageKey,
}: {
  eventName: string;
  eventParameters?: Record<string, unknown>;
  storageKey: string;
}) {
  useEffect(() => {
    if (sessionStorage.getItem(storageKey)) return;

    trackEvent(eventName, eventParameters);
    sessionStorage.setItem(storageKey, "1");
  }, [eventName, eventParameters, storageKey]);

  return null;
}