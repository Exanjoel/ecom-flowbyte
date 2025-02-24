export default function Search(){

    return(
        <>
        <div className="border-2 p-2">
           <span><i className="fa-solid fa-magnifying-glass"></i></span> <input type="search" className="border-0" placeholder="search for groceries"/>
           <button className="p-2 bg-cyan-700 text-white rounded-lg font-bold px-5">SEARCH</button>
        </div>
        
        </>
    )
}