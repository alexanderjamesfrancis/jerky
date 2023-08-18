"use client";

import { useState } from "react";
import Link from "next/link";

export default function navMenu({options}) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open ? false : true);
  }

  return (
    <div>
      <button onClick={handleClick} className="" type="button" id="">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 flex-col items-center ${
          open ? "flex" : "hidden"
        } w-full h-full py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-gray-900 bg-opacity-95 z-30`}
      >
        {options.map((option) => {
            return (
                <Link
                    href={`/${option.value}`}>

                </Link>
            )
        
        })}
        <Link href="/" className="hover:text-gray-300">
          Jerky
        </Link>
        <Link href="/index/AboutMe" className="hover:text-gray-300">
          Biltong
        </Link>
        <Link href="/index/Employment_History" className="hover:text-gray-300">
          Snapstik
        </Link>
      </div>
    </div>
  );
}
