import React from "react";

// Import component 👇
import Drawer from "react-modern-drawer";

// Import styles 👇
import "react-modern-drawer/dist/index.css";

// Define the interface for the props
interface AppProps {
  buttonText: string;
  drawerItems: Array<{ id: number; title: string; content: any; path: string }>;
  drawerClassName?: string;
  buttonClassName: string;
  direction?: any;
}

const FilterDrawer: React.FC<AppProps> = ({
  buttonText,
  drawerItems,
  buttonClassName,
  drawerClassName,
  direction,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className={buttonClassName} onClick={toggleDrawer}>
        {buttonText}
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction={direction}
        className={drawerClassName || ""}
      >
        <div className="p-4 capitalize ">
          {drawerItems.map((item) => (
            <div key={item.id} className="mb-2 border-b border-1">
              <div className="font-semibold mb-3">
                <a href={item.path}> {item.title}</a>
              </div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
