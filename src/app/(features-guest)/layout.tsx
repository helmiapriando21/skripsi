"use client";

import React from "react";
import Topbar from "@/components/Topbar";
import IMG from "@/content/img";
import HOME_CONTENT from "@/content/home";
import { useRouter } from "next/navigation";

const customFeatures = [
  { title: "Beranda", description: "Kembali ke halaman utama", url: "/" },
  ...HOME_CONTENT.FEATURE_LIST,
];

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  return (
    <div className="min-h-screen">
      <Topbar
        logoSrc={IMG.LOGO}
        onLoginClick={() => {
          route.push("/login");
        }}
        isScrolled={true}
        features={customFeatures}
        showFeatures={true}
      />
      <main>{children}</main>
    </div>
  );
}
