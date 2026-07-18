"use client";

import { useState } from "react";

interface Props {
  logo?: string;
  monogram: string;
  company: string;
  className?: string;
}

export default function CompanyLogo({ logo, monogram, company, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      <img
        src={logo}
        alt={company}
        onError={() => setFailed(true)}
        className={`h-full w-full rounded-xl object-cover ${className}`}
      />
    );
  }

  return (
    <span className={`font-mono text-xs font-bold ${className}`}>
      {monogram}
    </span>
  );
}
