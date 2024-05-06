import type { GovData } from "types/types";

export const Card = ({ department, datasets }: GovData) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
      <div className="flex justify-between">
        <h3 className="text-balance	">{department}</h3>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-2xl"
          >
            <line x1="18" x2="18" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
          </svg>
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold">{datasets}</p>
      <p className="text-xs text-gray-500">Datasets</p>
    </div>
  );
};