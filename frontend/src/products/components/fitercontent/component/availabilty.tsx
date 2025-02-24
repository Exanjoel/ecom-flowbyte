export default function Availability() {

    
  return (
    <>
      <label>
        <input className="m-2" type="radio" name="stock" value="in-stock" />
        In Stock
      </label>
      <br />
      <label>
        <input className="m-2" type="radio" name="stock" value="out-of-stock" />
        Out of Stock
      </label>
    </>
  );
}
