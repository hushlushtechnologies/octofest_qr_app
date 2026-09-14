// PLACEHOLDER architecture — Sprint 6 replaces PLACEHOLDER_NUMBER with
// the real Property WhatsApp business number and builds the message
// dynamically from QR context (event/source). Do not treat this
// number as final or working.
const PLACEHOLDER_NUMBER = "971000000000";

export function getPropertyWhatsAppLink(): string {
  const message = encodeURIComponent(
    "Hi, I scanned the OctoLink QR at Octofest and I'm interested in the Al Jaddaf investment opportunity.",
  );
  return `https://wa.me/${PLACEHOLDER_NUMBER}?text=${message}`;
}
