import { ImageResponse } from "next/og";

export const alt = "Walima Reception invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#102b4a", color: "#fffaf0", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 24, border: "2px solid #c5a15d", display: "flex" }} />
      <div style={{ position: "absolute", left: -90, top: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #c5a15d", opacity: .45, display: "flex" }} />
      <div style={{ position: "absolute", right: -90, bottom: -95, width: 310, height: 310, borderRadius: "50%", border: "2px solid #c5a15d", opacity: .45, display: "flex" }} />
      <div style={{ width: "100%", padding: "48px 78px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ color: "#e5c47e", fontSize: 22, letterSpacing: 9, textTransform: "uppercase", display: "flex" }}>Walima Reception</div>
        <div style={{ marginTop: 14, fontSize: 22, letterSpacing: 2, display: "flex" }}>MR. AND MRS. AZHAR BASHIR</div>
        <div style={{ marginTop: 18, fontSize: 58, fontWeight: 600, lineHeight: 1.02, display: "flex" }}>Muhammad Zeeshan Azhar Malik</div>
        <div style={{ marginTop: 18, width: "100%", height: 1, background: "#c5a15d", display: "flex" }} />
        <div style={{ marginTop: 18, color: "#f2deb2", fontSize: 26, letterSpacing: 2, display: "flex" }}>SUNDAY, 8TH NOVEMBER 2026 | 7:00 PM ONWARDS</div>
        <div style={{ marginTop: 10, color: "#f2deb2", fontSize: 22, letterSpacing: 1, display: "flex" }}>ZOOM EXECUTIVE MARQUEE, WEST CANAL ROAD</div>
        <div style={{ marginTop: 20, color: "#fff0c9", fontSize: 15, letterSpacing: 1, display: "flex" }}>RSVP: SHAHID MALIK (UK) | ALI IMRAN BAJWA | ENGR FARMAN AZHAR MALIK | IMRAN AZHAR MALIK | MUHAMMAD RAYYAN MALIK</div>
      </div>
    </div>,
    { ...size }
  );
}