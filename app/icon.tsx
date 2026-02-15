import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 18,
                    background: "#0E0E0E", // Deep elegant black/dark green matching site theme
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a7f36f", // Lime green text matching the site's accent
                    fontWeight: 700,
                    borderRadius: "6px" // Slight rounded corners for modern look
                }}
            >
                SP
            </div>
        ),
        // ImageResponse options
        {
            ...size
        }
    );
}
