import type { GovData } from "types/types";

/**
 * Sorts an array of government data by the number of datasets.
 * @param list - Array of government data.
 * @param dir - sort direction ('asc' or 'desc').
 * @returns Sorted array of government data.
 */

export function sortData(list: GovData[], dir: "asc" | "desc"): GovData[] {
  return list.sort((first, second) => {
    if (dir === "asc") {
      return first.datasets - second.datasets;
    } else {
      return second.datasets - first.datasets;
    }
  });
}
