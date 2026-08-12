import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getAllSlugs, getLanding } from "@/lib/landings";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) {
    return { title: "Not found" };
  }
  return {
    title: landing.seo.title,
    description: landing.seo.description,
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) {
    notFound();
  }

  return <BlockRenderer blocks={landing.blocks} />;
}
