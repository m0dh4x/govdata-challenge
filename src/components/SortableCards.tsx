import React, { useState } from "react";
import type { GovData } from "types/types";
import { sortData } from "@/utils/sortData";
import { Card } from "./Card";

type SortableCardsProps = {
  govData: GovData[];
};

export const SortableCards = ({ govData }: CardsProps) => {
  const govDataCopy = [...govData];
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [list, setList] = useState(govData);

  React.useEffect(() => {
    const sortedList = sortData(govDataCopy, order);
    setList(sortedList);
  }, [govData, order]);


  

  return (
    <>
      <select
        defaultValue={"asc"}
        onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
      >
        <option value="asc">Aufsteigend</option>
        <option value="desc">Absteigend</option>
      </select>
      {list.map((item) => {
        return <Card key={`${item.department}-${item.datasets}`} {...item} />;
      })}
    </>
  );
};
