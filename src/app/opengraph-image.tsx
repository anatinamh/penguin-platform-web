import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Pengui AI — the agentic operating layer for companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), "public/mascot/pengui-avatar.png"));
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F4F6F5",
          backgroundImage:
            "linear-gradient(135deg, #dce9f5 0%, #eef4ee 55%, #f4f0e0 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          width={440}
          height={440}
          style={{ borderRadius: "50%", boxShadow: "0 24px 70px rgba(20,25,23,0.2)" }}
        />
      </div>
    ),
    { ...size },
  );
}
