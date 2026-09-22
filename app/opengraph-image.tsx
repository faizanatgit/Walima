import { ImageResponse } from "next/og";

export const alt = "Walima Night â€” Muhammad Zeeshan Azhar Malik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#102b4a", color: "#fff4ca", fontFamily: "serif" }}>
      <div style={{ position: "absolute", inset: 28, border: "2px solid #d9ae55", display: "flex" }} />
      <div style={{ position: "absolute", left: -120, top: -130, width: 390, height: 390, borderRadius: "50%", border: "2px solid #d9ae55", opacity: 0.55, display: "flex" }} />
      <div style={{ position: "absolute", right: -120, bottom: -130, width: 390, height: 390, borderRadius: "50%", border: "2px solid #d9ae55", opacity: 0.55, display: "flex" }} />
      <div style={{ width: "100%", padding: "78px 100px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#e4ba63", fontSize: 28, letterSpacing: 12, textTransform: "uppercase", display: "flex" }}>Walima Night</div>
        <div style={{ marginTop: 26, width: 160, height: 2, background: "#d9ae55", display: "flex" }} />
        <div style={{ marginTop: 38, fontSize: 76, fontWeight: 600, lineHeight: 1.05, textAlign: "center", display: "flex" }}>Muhammad Zeeshan<br />Azhar Malik</div>
        <div style={{ marginTop: 34, color: "#f1d899", fontSize: 30, letterSpacing: 3, display: "flex" }}>FRIDAY Â· 6TH NOVEMBER 2026</div>
        <div style={{ marginTop: 16, color: "#f1d899", fontSize: 25, letterSpacing: 2, display: "flex" }}>WEST CANAL ROAD Â· FAROOQABAD, MANSOORABAD</div>
      </div>
    </div>,
    { ...size }
  );
}