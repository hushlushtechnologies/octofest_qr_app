import { ScanRedirect } from "@/components/scan/ScanRedirect";

interface ScanPageProps {
  searchParams: Promise<{ event?: string; type?: string; source?: string }>;
}

export default async function ScanPage({ searchParams }: ScanPageProps) {
  const params = await searchParams;

  return (
    <ScanRedirect
      event={params.event ?? null}
      type={params.type ?? null}
      source={params.source ?? null}
    />
  );
}
