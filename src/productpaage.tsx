export default function Product() {
  return (
    <>
      <div className="flex items-center flex-col lg:flex-row justify-around">
        <div id="image" className="border-b-2">
          <img src="strawberry.webp" />
        </div>
        <div id="content" className="m-3">
            <div className="border-b-2">
                <h2 className="capitalize text-2xl font-bold m-5">fresh strawberry</h2>
                <h1 className="text-3xl text-orange-500 font-bold m-5">$21.00</h1>
            </div>

            <div className="border-b-2 pt-4">
                <h4 className="text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text and typesetting industry</h4>
                <div className="my-5">
                    <h5 className="font-bold">size:<span className="font-thin">1kg</span></h5>
                </div>
                <div className="lg:flex">
                    <button className="uppercase px-5 py-3 rounded border-2 text-black mx-1 hover:bg-gray-900 hover:text-white w-full">add to cart</button>
                    <button className="uppercase px-5 py-3 rounded bg-gray-900 text-white mx-1 hover:bg-amber-400 hover:text-black w-full">buy now</button>
                </div>
                <div className="flex justify-around mt-5 mb-3">
                    <button className="capitalize">wishlist</button>
                   <button className="capitalize">size guide</button>
                   <button className="capitalize">question</button>
                   <button className="capitalize">share</button>
                </div>
            </div>
            <div className="my-5">
                <h4 className="font-semibold">Delivery:<span className="text-slate-500 m-5">estimated delivery time 2-5 days</span></h4>
                <h4 className="font-semibold">Returns:<span className="text-slate-500 m-5">within 45 days of order</span></h4>
                <h4 className="font-semibold">Sku:<span className="text-slate-500 m-5">445</span></h4>
            </div>
        </div>
      </div>
    </>
  );
}
