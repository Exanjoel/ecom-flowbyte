import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface InnerfilterProps {
  onSelectCategory: (categoryId: string) => void; 
}

const Innerfilter: React.FC<InnerfilterProps> = ({onSelectCategory}) => {
  const [Categorytitle, setCategorytitle] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/category`).then((response) => {
      let items = response.data.results;

      setCategorytitle(items);
    });
  }, []);




  return (
    <>
      {Categorytitle.map((category: any) => (
        <button key={category.category_id}
          onClick={() => {
            onSelectCategory(category.category_id);
          }}
          className="font-semibold m-3"
        >
          {category.category_name}
        </button>
      ))}
    </>
  );
};

export default Innerfilter;
