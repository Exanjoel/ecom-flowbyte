import { useState } from "react";

export default function Size() {
  const [count, setCount] = useState(0) as any;

  // function handleCount(){
  //     setCount(count+1)
  // }

  const sizes = ["s", "m", "l", "xl"];
  return (
    <>
      {/* <label>select the size</label>
      <div>
        {sizes.map((index) => (
          <div className="gap-3 my-4">
            <input type="checkbox" name="size" value={sizes} />
            <label className="mr-5">{index}</label>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col">
        <div className="flex justify-between content-center">
          <div className="mb-2 text-sm font-semibold">
            Selected: <span className="mr-3">{count}</span>
          </div>
          <button className="text-sm hover:underline capitalize" onClick={()=>(setCount(0))}>reset</button>
        </div>

        <div className="space-y-2">
          {sizes.map((size) => (
            <label key={size} className="flex flex-row items-center">
              <input
                type="checkbox"
                name="sizes"
                value={size}
                className="form-checkbox text-cyan-700 h-5 w-5"
                onClick={() => setCount(count + 1)}
              />
              <span className="ml-2 text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
