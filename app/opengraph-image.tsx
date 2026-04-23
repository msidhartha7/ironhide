import { ImageResponse } from "next/og";

export const alt = "Lookover social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookover.io";

export default async function OpenGraphImage() {
  const logoUrl = new URL("/logo.svg", siteUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, #18233d 0%, #0b1020 48%, #05070d 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "56px 64px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "700px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7dd3fc",
                marginBottom: 24,
              }}
            >
              Lookover
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: 28,
              }}
            >
              Audit trails and compliance for AI agents
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.35,
                color: "#cbd5e1",
              }}
            >
              Tamper-proof logs, access visibility, and on-demand compliance
              reports without complex setup.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 300,
              borderRadius: 48,
              background: "rgba(15, 23, 42, 0.82)",
              border: "1px solid rgba(125, 211, 252, 0.25)",
              boxShadow: "0 30px 80px rgba(8, 47, 73, 0.45)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoUrl}
              alt="Lookover logo"
              width="220"
              height="220"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
