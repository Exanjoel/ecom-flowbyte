export default function Icons(){
    return(
        <>
        <div className=" lg:border-2 rounded-full lg:mx-3">
              <a href="./login">
                <button type="button" className="m-2 lg:m-5 ">
                  <i className="fa-solid fa-user"></i>
                </button>
              </a>
            </div>
            <div className="lg:border-2 rounded-full lg:mx-3">
              <a>
                <button type="button" className="m-2 lg:m-5">
                  <i className="fa-solid fa-heart"></i>
                </button>
              </a>
            </div>
        </>
    )
}