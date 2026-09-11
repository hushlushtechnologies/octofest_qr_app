"use client";

type LogoName = "octolink" | "octofest";

interface LogoProps {
  name: LogoName;
  width: number;
  height: number;
  className?: string;
}

export function Logo({ name, width, height, className = "" }: LogoProps) {
  const src = `/Octofest-Logo.png`;

  return (
    // Plain <img>, not next/image: these are small local SVGs with no
    // responsive-sizing or optimization benefit to gain, and next/image
    // would add unnecessary config for a file this simple.
    <img
      src={src}
      alt={name === "octolink" ? "OctoLink" : "Octofest"}
      width={width}
      height={height}
      className={className}
    />
  );
}
