"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";

export function AppToaster(props) {
  const { theme = "system" } = useTheme();

  return (
    <Toaster
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      }}
      {...props}
    />
  );
}
