import { Card } from "flowbite-react";

export default function Section3() {
  const categoryList = [
    {
      title: "color print",
      imgUrl: "color print.webp",
      itemCount: 12,
    },
    {
      title: "formal t shirt",
      imgUrl: "formal t shirt.webp",
      itemCount: 12,
    },
    {
      title: "bucket hat",
      imgUrl: "bucket hat.webp",
      itemCount: 12,
    },
    {
      title: "half sleeve",
      imgUrl: "half sleeve.webp",
      itemCount: 12,
    },
  ];

  return (
    <>
      <div>
        <div className="ml-3">
          <h2 className="font-bold">we have your occasion covered</h2>
          <h1 className="font-bold text-3xl">featured products</h1>
        </div>
      </div>
<div className="block flex flex-wrap">
    {categoryList.map((item) => (
        <Card className=" lg:w-1/4  w-6/12 rounded-none">
          <img src={item.imgUrl} />
          <div className="flex flex-col items-center">
            <h5 className="font-bold uppercase text-2xl ">{item.title}</h5>
            <p>{item.itemCount} items</p>
          </div>
        </Card>
      ))}
</div>
      
    </>
  );
}
