import { describe, expect, it } from "vitest";
import { openingHoursSpecification } from "./opening-hours";

describe("confirmed Google-matched studio hours", () => {
  it("opens Wednesday 09:30–18:30", () => {
    expect(openingHoursSpecification.find(h => h.dayOfWeek.includes("Wednesday"))).toMatchObject({ opens: "09:30", closes: "18:30" });
  });
  it("opens Friday 09:30–18:00", () => {
    expect(openingHoursSpecification.find(h => h.dayOfWeek.includes("Friday"))).toMatchObject({ opens: "09:30", closes: "18:00" });
  });
  it("keeps Saturday 10:00–18:00", () => {
    expect(openingHoursSpecification.find(h => h.dayOfWeek.includes("Saturday"))).toMatchObject({ opens: "10:00", closes: "18:00" });
  });
});