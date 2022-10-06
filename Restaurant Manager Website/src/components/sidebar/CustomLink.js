import React from 'react'
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });
  
    return (
      <div className='border-b-2 border-white py-[2px]'>
        <Link
          className={
                      classNames(
                        match
                          ? " text-[#FFD541]"
                          : "text-white hover:text-white ",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )
                    }
        //   style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink;