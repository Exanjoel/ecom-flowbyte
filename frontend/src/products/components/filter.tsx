import { set } from "react-hook-form";
import FilterDrawer from "./filterbody";
import Availability from "./fitercontent/component/availabilty";
import Innerfilter from "./fitercontent/component/innerfilter";
import Price from "./fitercontent/component/price";
import Size from "./fitercontent/component/size";
import { useState } from "react";

type Filter={
  onSelectCategory: (categoryId: string) => void; 
}



export default function Filter() {
  const [FilterCategory, setFilterCategory] = useState([])as any;
  const handleCategorySelect = (categoryId: string) => {
    setFilterCategory(categoryId);
  };

  const filterName = [
    {
      id: 1,
      title: "category",
      content:<Innerfilter onSelectCategory={handleCategorySelect}/>,
      path:""
    },
    {
      id: 2,
      title: "availability",
      content:<Availability/>,
      path:""
    },
    {
      id: 3,
      title: "price",
      content:<Price/>,
      path:""
    },
    {
      id: 4,
      title: "size",
      content:<Size/>,
      path:""
    },
  ];

  return (
    <>
      <div className="mx-5 my-3">
        <FilterDrawer
          buttonClassName="font-semibold tracking-widest bg-cyan-700 text-white px-2 py-1 md:px-4 md:py-2"
          drawerItems={filterName}
          buttonText="filter"
          direction={"left"}
        />
      </div>
    </>
  );
}
