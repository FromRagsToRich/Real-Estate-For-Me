import { Place } from "@/constants";
import React from "react";

// 도?: string | undefined;
// 시?: string | undefined;
// 구?: string | undefined;
// 동?: string | undefined;
// 급지?: number | undefined;
function Box({ places }: { places: Place[] }) {
  const onlyPlaceValues = places
    .map((place) => [...Object.values(place)])
    .reverse();

  return (
    <div>
      {onlyPlaceValues.map((values, i) => (
        <div key={i + 1} className="flex gap-2">
          {values.map((value, i) => (
            <span key={`${value}-${i}`}>{value}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Box;
