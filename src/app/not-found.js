import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col">
      This Page Doesn&apos;t Exist
      <Link href={"/"}>Go To HomePage</Link>
    </div>
  );
};

export default PageNotFound;
