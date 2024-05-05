import type { GovData } from "types/types";

/**
 * Sorts an array of government data by the number of datasets.
 * @param list - Array of government data.
 * @param dir - sort direction ('asc' or 'desc').
 * @returns Sorted array of government data.
 */

export function sortData(list: GovData[], dir: "asc"): GovData[] {
  return list.sort((first, second) => {
      return first.datasets - second.datasets;

  });
}
