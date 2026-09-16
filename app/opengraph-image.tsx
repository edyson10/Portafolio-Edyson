import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.personal.name} — ${profile.personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, textTransform: "uppercase", letterSpacing: 4, color: "#3b82f6" }}>
          Portfolio
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginTop: 24 }}>
          {profile.personal.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", marginTop: 12 }}>
          {profile.personal.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
