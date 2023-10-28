import { NavLink } from "react-router-dom";
import omdenaPNG from "../assets/images/omdena.png";

const Navbar = () => {
  return (
    <>
      <nav className="fixed h-[60px] w-full z-50  ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* logo  */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={omdenaPNG}
                  alt="Omdena EquiJob"
                />
              </div>
            </div>
            {/* pages */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className=" text-gray-500 rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="#"
                    className="text-gray-500  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Docs
                  </NavLink>
                  <NavLink
                    to="#"
                    className="text-black  hover:text-white   px-3 py-2 text-sm font-medium bg-mainColor"
                  >
                    Try It Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
