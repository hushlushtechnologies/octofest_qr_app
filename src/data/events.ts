export interface OctofestEvent {
  slug: string;
  name: string;
  shortName: string;
}

export const events: OctofestEvent[] = [
  { slug: "beer-day", name: "Beer Day", shortName: "Beer Day" },
  { slug: "beard-day", name: "Beard Day", shortName: "Beard Day" },
  { slug: "halloween-day", name: "Halloween Day", shortName: "Halloween" },
  { slug: "pool-party", name: "Pool Party", shortName: "Pool Party" },
  { slug: "diwali", name: "Diwali", shortName: "Diwali" },
  { slug: "pizza-day", name: "Pizza Day", shortName: "Pizza Day" },
];

export function getEventBySlug(slug: string | null | undefined) {
  if (!slug) return null;
  return events.find((event) => event.slug === slug) ?? null;
}
