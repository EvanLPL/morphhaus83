export const openingHours = [
  { day: "Wednesday", opens: "09:30", closes: "18:30", display: "Wednesday, 9:30am — 6:30pm" },
  { day: "Friday", opens: "09:30", closes: "18:00", display: "Friday, 9:30am — 6pm" },
  { day: "Saturday", opens: "10:00", closes: "18:00", display: "Saturday, 10am — 6pm" },
] as const;

export const openingHoursAnswer = `We are open ${openingHours.map(({ display }) => display.replace(", ", " from ").replace(" — ", " to ")).join("; ")}.`;

export const openingHoursSpecification = openingHours.map(({ day, opens, closes }) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [day],
  opens,
  closes,
}));