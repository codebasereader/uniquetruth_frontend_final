import React from "react";

const BRAND_WORD_REGEX = /(Unique|Truth|TRUTH)/g;

export default function BrandText({ text, children }) {
  const source = typeof text === "string" ? text : children;

  if (typeof source !== "string") return <>{source}</>;

  return (
    <>
      {source.split(BRAND_WORD_REGEX).map((part, idx) => {
        if (part === "Unique") {
          return (
            <span
              key={`unique-${idx}`}
              style={{ fontFamily: "var(--font-pacifico), cursive" }}
            >
              {part}
            </span>
          );
        }
        if (part === "Truth" || part === "TRUTH") {
          return (
            <span
              key={`truth-${idx}`}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontStyle: "normal",
                textTransform: "uppercase",
              }}
            >
              {part.toUpperCase()}
            </span>
          );
        }
        return <React.Fragment key={`text-${idx}`}>{part}</React.Fragment>;
      })}
    </>
  );
}
