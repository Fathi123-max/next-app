import React from "react";
import Link from "next/link";
import ProductCard from "../compunants/ProductCard";

const hello = () => {
  return (
    <div>
      hello
      <Link href="/user/new_user">New User</Link>
      <ProductCard />
    </div>
  );
};

export default hello;
