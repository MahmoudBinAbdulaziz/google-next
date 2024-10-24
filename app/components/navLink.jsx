import Link from "next/link";
import React from "react";

function NavLink({ href, children }) {
  return (
    <Link className="hover:underline" href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
