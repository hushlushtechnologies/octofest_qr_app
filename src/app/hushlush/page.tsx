import { Container } from "@/components/layout/Container";
import { ScanContextNote } from "@/components/scan/ScanContextNote";

export default function HushLushPage() {
  return (
    <Container className="flex flex-col gap-4 py-12">
      <ScanContextNote />
      <h1 className="text-title text-foreground">Hush Lush</h1>
      <p className="text-body text-text-secondary">
        Placeholder — built in Sprint 5.
      </p>
    </Container>
  );
}
