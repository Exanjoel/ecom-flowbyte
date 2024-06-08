import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { CustomFlowbiteTheme } from "flowbite-react";


  const customTheme: CustomFlowbiteTheme = {

      "root": {
        "base": "w-full  bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
        "container": "w-full p-6",
        "bgDark": "bg-gray-800"
      },
      "groupLink": {
        "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
        "link": {
          "base": "me-4 last:mr-0 md:mr-6",
          "href": "hover:underline"
        },
        "col": "flex-col space-y-4"
      },
      "icon": {
        "base": "text-gray-500 dark:hover:text-white",
        "size": "h-5 w-5"
      },
      "title": {
        "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
      },
      "divider": {
        "base": "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
      },
      "copyright": {
        "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
        "href": "ml-1 hover:underline",
        "span": "ml-1"
      },
      "brand": {
        "base": "mb-4 flex items-center sm:mb-0",
        "img": "mr-3 h-8",
        "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
      }
    
  };


export default function Mainfooter(){
    return(
        <>

    <Footer bgDark theme={customTheme}>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Exan™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>

        </>
    )
}