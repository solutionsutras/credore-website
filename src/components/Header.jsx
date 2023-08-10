import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "./RequestModal";

const WhyCredore = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <nav className="nav flex flex-wrap items-center justify-between p-10 py-1">
        <div className="flex flex-no-shrink items-center mr-6 py-2 text-grey-darkest">
          <Link href="/">
            <a className="font-semibold tracking-tight w-60">
              {/* <Image
                src="/assets/images/logo.svg"
                height={40}
                width={240}
                className="logo"
              /> */}
              <Image
                src={"/assets/images/logo-small.png"}
                alt="logo"
                height={50}
                width={210}
                className="logo"
              />
            </a>
          </Link>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu flex justify-end list-reset m-0 w-full md:w-auto items-center text-sm">
          <li className="">
            <Link href="/about_us">
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                About
              </a>
            </Link>
          </li>

          <li className="">
            <Link href="/solutions">
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Solutions
              </a>
            </Link>
          </li>

          <li className="">
            <Link href="https://docs.credore.xyz/">
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                Resources
              </a>
            </Link>
          </li>

          <li className="">
            <a
              href="/use_cases"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Use Cases
            </a>
          </li>
          <li className="">
            <button
              className="ml-3 p-4 py-1 text-sm flex-shrink-0 text-white bg-[#f15928] font-medium text-xsm rounded-sm"
              type="button"
              onClick={openModal}
            >
              Request Demo
            </button>
          </li>
        </ul>
      </nav>
      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default WhyCredore;
