"use client";
import React, { FC, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./Header.css";

interface HeaderProps {
  title: string;
  className?: string;
  back?: boolean;
}

const Header: FC<HeaderProps> = ({ className, title, back }) => {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (back && history.length > 1) {
      setCanGoBack(true);
    }
  }, [back]);

  return (
    <div className={`hr-border pb-[1rem] flex items-center ${className}`}>
      {canGoBack ? (
        <button onClick={() => router.back()}>
          <FaArrowLeft
            className="mt-[1rem] ml-[1rem]"
            color="black"
            size={20}
          />
        </button>
      ) : null}
      <h1 className="w-[100%] text-start text-black text-[1.5rem] ml-[1rem] mt-[1rem]">
        {title}
      </h1>
    </div>
  );
};

export default Header;
