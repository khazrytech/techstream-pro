"use client";

import { useState } from "react";

const categories = [
  "All",
  "Trending",
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Football",
  "Basketball",
  "Series",
];

export default function CategoryChips() {
  const [active, setActive] = useState("All");

  return (
    <div className="category-scroll">

      {categories.map((category) => (
        <button
          key={category}
          className={
            active === category ? "active" : ""
          }
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}
