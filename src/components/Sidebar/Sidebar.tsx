import { useEffect, useRef, useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { TbStretching } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const menuItems = [
  { name: "Home", Icon: IoHomeOutline, type: "main" },
  { name: "Stretch Menu", Icon: TbStretching, type: "main" },
  { name: "My Menu", Icon: BiFoodMenu, type: "main" },
  { name: "Favorite", Icon: CiHeart, type: "main" },
  { name: "Report", Icon: GoGraph, type: "main" },
  { name: "Settings", Icon: IoSettingsOutline, type: "bottom" },
  { name: "Logout", Icon: FiLogOut, type: "bottom" }
];

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    menuItems[0].name,
  );
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuItemClick = (menuItem: string) => setSelectedMenuItem(menuItem);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* サイドバー（PC） */}
      <div className="hidden md:block w-72 bg-primary p-3 rounded text-white shadow h-full">
        <div className="flex items-center p-2 space-x-4">
          <img
            src="../../../public/default_profile.png"
            alt=""
            className="lg:w-12 lg:h-12 md:w-10 md:h-10 rounded-full ring-2 ring-primary-light"
          />
          <div>
            <h2 className="md:text-base lg:text-lg font-semibold">
              Leroy Jenkins
            </h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
        <div
          className="divide-y flex flex-col justify-between"
          style={{ height: "48rem" }}
        >
          <ul className="pt-3 pb-4 space-y-1 text-sm">
            {menuItems.filter(item => item.type === "main").map(({ name, Icon }) => (
              <li
                key={name}
                className={`text-base ${selectedMenuItem === name ? "bg-primary-dark rounded" : ""}`}
                onClick={() => handleMenuItemClick(name)}
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className={`flex items-center p-2 space-x-3 rounded-md ${selectedMenuItem !== name ? "hover:underline" : ""}`}
                >
                  <Icon size="1.4rem" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="pt-4">
            {menuItems.filter(item => item.type === "bottom").map(({ name, Icon }) => (
              <li className={`text-base ${selectedMenuItem === name ? "bg-primary-dark rounded" : ""}`} key={name} onClick={() => handleMenuItemClick(name)}>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className={`flex items-center p-2 space-x-3 rounded-md ${selectedMenuItem !== name ? "hover:underline" : ""}`}
                >
                  <Icon size="1.4rem" />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ヘッダー（SP） */}
      <header className="block md:hidden p-4 bg-primary text-white shadow w-full relative">
        <div className="container flex justify-between h-10 mx-auto items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 dark:text-violet-400"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </a>
          <button ref={buttonRef} onClick={toggleMenu}>
            <IoMenu size="2rem" />
          </button>
        </div>
        <ul ref={menuRef} className={`${isOpen ? 'absolute' : 'hidden'} top-full right-0 bg-white w-44 text-black p-2 shadow rounded`}>
          {/* メニュー項目 */}
          {menuItems.map(({ name, Icon }) => (
            <li key={name} onClick={() => handleMenuItemClick(name)} className="text-sm p-2 hover:bg-bg rounded">
              <a rel="noopener noreferrer" href="#" className="flex items-center">
                <Icon size="1.4rem" />
                <span className="ml-2">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Sidebar;
