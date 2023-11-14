import { METADATA } from "@/common/constant/metadata";
import HomeComponents from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Personal Website ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function Home() {
  return (
    <>
      <HomeComponents />
    </>
  );
}
