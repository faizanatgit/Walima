import { ImageResponse } from "next/og";

export const alt = "Walima invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden", background: "#102b4a", color: "#fffaf0", fontFamily: "serif" }}>
      <div style={{ width: "55%", padding: "54px 52px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#e5c47e", fontSize: 20, letterSpacing: 7, textTransform: "uppercase", display: "flex" }}>Walima</div>
          <div style={{ marginTop: 17, color: "#f1e3bd", fontSize: 18, letterSpacing: 1.5, display: "flex" }}>MR. AND MRS. AZHAR BASHIR</div>
          <div style={{ marginTop: 25, fontSize: 52, fontWeight: 600, lineHeight: 1.02, display: "flex" }}>Muhammad Zeeshan Azhar Malik</div>
          <div style={{ marginTop: 14, color: "#f0d69d", fontSize: 20, fontStyle: "italic", display: "flex" }}>You are warmly invited</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 116, height: 2, background: "#e5c47e", display: "flex" }} />
          <div style={{ marginTop: 18, color: "#f4ddb2", fontSize: 21, letterSpacing: 1, display: "flex" }}>SUNDAY, 8TH NOVEMBER 2026 | 7:00 PM</div>
          <div style={{ marginTop: 10, color: "#f4ddb2", fontSize: 18, lineHeight: 1.2, display: "flex" }}>ZOOM EXECUTIVE MARQUEE, WEST CANAL ROAD</div>
          <div style={{ marginTop: 17, color: "#fff0cb", fontSize: 12, lineHeight: 1.25, display: "flex" }}>RSVP: SHAHID MALIK (UK) | ALI IMRAN BAJWA | ENGR FARMAN AZHAR MALIK | IMRAN AZHAR MALIK | MUHAMMAD RAYYAN MALIK</div>
        </div>
      </div>
      <div style={{ width: "45%", height: "100%", display: "flex", overflow: "hidden" }}>
        <img src={new URL("../public/walima-mobile-portrait.png", import.meta.url).toString()} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>
    </div>,
    { ...size }
  );
}