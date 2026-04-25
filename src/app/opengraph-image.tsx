import { ImageResponse } from "next/og";
import { site } from "@/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 22, opacity: 0.86 }}>{site.role}</div>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 28, opacity: 0.9, maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, opacity: 0.8 }}>{site.location}</div>
          <div style={{ fontSize: 22, opacity: 0.8 }}>
            {site.seo.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}

