import { Tabs } from "flowbite-react";

const Tab=()=>{

    const title=[
        {
            name:"wishlist"
        },
        {
            name:"size guide"
        },
        {
            name:"question"
        },
        {
            name:"share"
        }
    ]
    return(
        <>
         <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth" >
        {title.map((item:any)=>(
            <Tabs.Item className="capitalize" active title={item.name} key={item}>
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        ))}
        
      </Tabs>
    </div>
        </>
    )
}

export default Tab