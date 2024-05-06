import { useEffect, useState } from "react";
import type { GovData } from "types/types";

import { sortData } from "@/utils/sortData";

import { Card } from "./Card";

type SortableCardsProps = {
  govData: GovData[];
};

export const SortableCards = ({ govData }: SortableCardsProps) => {
  const govDataCopy = [...govData];
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [list, setList] = useState(govData);

  useEffect(() => {
    const sortedList = sortData(govDataCopy, order);
    setList(sortedList);
  }, [govData, order]);

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-4xl my-8">Dashboard</h1>
        <select
          className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px]"
          defaultValue={"desc"}
          onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
        >
          <option value="desc">Absteigend</option>
          <option value="asc">Aufsteigend</option>
        </select>
      </div>
      <div className="grid grid-cols-fluid gap-4">
        {list.map((item) => {
          return <Card key={`${item.department}-${item.datasets}`} {...item} />;
        })}
      </div>
    </>
  );
};
