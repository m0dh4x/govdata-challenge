import { describe, it, expect } from "vitest";
import { sortData } from "@/utils/sortData";

import type { GovData } from "types/types";

describe("sorts data in ascending order", () => {
  const list: GovData[]  = [
    {
      department: "Statistisches Bundesamt",
      description: "Statistisches Bundesamt",
      datasets: 2372,
    },
    {
      department: "Bundesministerium des Innern",
      description: "Bundesministerium des Innern",
      datasets: 722,
    },
    {
      department: "Bundesamt für Justiz",
      description: "Bundesamt für Justiz",
      datasets: 662,
    },
  ];

  it("sorts data in ascending order", () => {
    const sortedData = sortData(list, "asc");

    expect(sortedData[0].datasets).equal(662);
    expect(sortedData[1].datasets).equal(722);
    expect(sortedData[2].datasets).equal(2372);
  });
});
