import { Container } from "@/components/layout/Container";
import { ScanContextNote } from "@/components/scan/ScanContextNote";

export default function CarsPage() {
  return (
    <Container className="flex flex-col gap-4 py-12">
      <ScanContextNote />
      <h1 className="text-title text-foreground">Cars</h1>
      <p className="text-body text-text-secondary">
        Placeholder — built in Sprint 4.
      </p>
    </Container>
  );
}
