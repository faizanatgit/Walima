import { ImageResponse } from "next/og";

export const alt = "Walima invitation for Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden", background: "#102b4a", fontFamily: "serif" }}>
      <div style={{ width: "52%", padding: "62px 54px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#e5c47e", fontSize: 18, letterSpacing: 7, textTransform: "uppercase", display: "flex" }}>Walima</div>
          <div style={{ marginTop: 54, color: "#fff4d6", fontSize: 64, fontWeight: 600, lineHeight: .94, display: "flex", flexDirection: "column" }}>
            <span style={{ display: "flex" }}>MUHAMMAD</span>
            <span style={{ display: "flex" }}>ZEESHAN</span>
          </div>
          <div style={{ marginTop: 18, color: "#e5c47e", fontSize: 26, letterSpacing: 3, display: "flex" }}>AZHAR MALIK</div>
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ width: 108, height: 2, background: "#e5c47e", display: "flex" }} />
          <div style={{ marginTop: 18, color: "#f1dfb1", fontSize: 18, letterSpacing: 2, display: "flex" }}>SUNDAY, 8TH NOVEMBER 2026</div>
        </div>
      </div>
      <div style={{ width: "48%", height: "100%", display: "flex", overflow: "hidden" }}>
        <img src="https://walima-phi.vercel.app/walima-mobile-portrait.png" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>
    </div>,
    { ...size }
  );
}