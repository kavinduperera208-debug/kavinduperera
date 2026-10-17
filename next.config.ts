import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdfkit", "sharp", "bcryptjs", "nodemailer"],
};

export default nextConfig;
