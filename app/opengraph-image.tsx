import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const runtime = "edge";
export const alt = `${site.name} · Electrical Engineering Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card, generated at request time, no design tools needed. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #070B12 0%, #0D131D 100%)",
          color: "#E8EEF6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#22D3EE",
            fontSize: "24px",
            letterSpacing: "6px",
          }}
        >
          <div style={{ width: "48px", height: "2px", background: "#22D3EE" }} />
          ELECTRICAL · EMBEDDED · VALIDATION
        </div>
        <div style={{ fontSize: "88px", fontWeight: 700, marginTop: "28px", letterSpacing: "-2px" }}>
          {site.name}
        </div>
        <div style={{ fontSize: "34px", color: "#9AA7B8", marginTop: "18px", maxWidth: "900px" }}>
          From schematic to validated system.
        </div>
        <div style={{ fontSize: "24px", color: "#64748B", marginTop: "40px" }}>
          UBC Electrical Engineering · Schneider Electric Co-op · Vancouver, BC
        </div>
      </div>
    ),
    size
  );
}
