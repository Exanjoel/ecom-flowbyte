// import { FloatingLabel } from "flowbite-react";
// import { useState } from "react";
// import { Range } from "react-range";
// const Price = () => {
//   const [values, setValues] = useState([1]);
//   var min=1;
//   var max=100;
  
//   return (
//     <>
//     <div className="mb-4">
//          <Range
//         label="select price range"
//         step={1}
//         min={min}
//         max={max}
//         values={values}
//         onChange={(values) => setValues(values)}
//         renderTrack={({ props, children }) => (
//           <div
//             className="bg-cyan-600"
//             {...props}
//             style={{
//               ...props.style,
//               height: "2px",
//               width: "100%",
//             }}
//           >
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             className="bg-cyan-700"
//             {...props}
//             key={props.key}
//             style={{
//               ...props.style,
//               height: "20px",
//               width: "20px",
//               borderRadius: "50%",
//             }}
//           />
//         )}
//       />
//     </div>
     
// <div className="flex gap-3">
//     <FloatingLabel variant="standard" className=" focus:border-cyan-600 focus:text-cyan-600" label="from" sizing="sm" />
    
//     <FloatingLabel variant="standard" className=" focus:border-cyan-600 focus:text-cyan-600" label="to" sizing="sm"/>
// </div>

//     </>
//   );
// };

// export default Price;

import { useState } from 'react';

function Price() {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
  const min = 0;
  const max = 100;

  const handleMinChange = (e:any) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e:any) => {
    const value = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-md ">
      <div className="relative h-12">
        <input
          type="range"
          min={min}
          max={max}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute h-1 w-full bg-transparent appearance-none pointer-events-auto"
          style={{
            zIndex: minPrice > max - 100 ? 5 : 3,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute h-1 w-full bg-transparent appearance-none pointer-events-auto"
          style={{
            zIndex: 4,
          }}
        />
        <div
          className="absolute left-0 right-0 h-1 bg-cyan-600 rounded-lg"
          style={{
            left: `${(minPrice / max) * 100}%`,
            right: `${100 - (maxPrice / max) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-center">
          <span className="text-gray-700 text-sm font-semibold">Min Price</span>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinChange}
            min={min}
            max={maxPrice - 10}
            className="w-20 p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-700 text-sm font-semibold">Max Price</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxChange}
            min={minPrice + 10}
            max={max}
            className="w-20 p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>
      </div>
      <div className="mt-4 text-gray-700 font-semibold">
        Selected Price Range:<br/> ${minPrice} - ${maxPrice}
      </div>
    </div>
  );
}

export default Price;
