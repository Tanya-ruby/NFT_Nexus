"use client";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Icon from "./icon";
import Link from "next/link";

export type MenuType = {
  className?: string;
  back?: boolean;
  property1?: "Default";
  to: string;
  menuAlignSelf?: CSSProperties["alignSelf"];
  menuHeight?: CSSProperties["height"];
  menuGap?: CSSProperties["gap"];
  menuWidth?: CSSProperties["width"];
  iconWidth?: CSSProperties["width"];
  iconHeight?: CSSProperties["height"];
  menuButtonsPadding?: CSSProperties["padding"];
};

const Menu: FunctionComponent<MenuType> = ({
  className = "",
  property1 = "Default",
  back = false,
  to,
  menuAlignSelf,
  menuHeight,
  menuGap,
  menuWidth,
}) => {
  const menuStyle: CSSProperties = useMemo(
    () => ({
      alignSelf: menuAlignSelf,
      height: menuHeight,
      gap: menuGap,
      width: menuWidth,
    }),
    [menuAlignSelf, menuHeight, menuGap, menuWidth]
  );

  return (
    <div
      className={`self-stretch h-[3.5rem] flex flex-row items-center justify-center gap-[0.5rem] ${className}`}
      data-property1={property1}
      style={menuStyle}
    >
      {back && (
        <Link href={to}>
          <img
            className="w-[2.625rem] rounded-full h-[2.625rem] overflow-hidden shrink-0 object-contain shadow-md"
            alt="Back"
            src="/icon@2x.png"
          />
        </Link>
      )}
      <div className="flex-1 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-md flex flex-row items-center justify-between p-[0.5rem] shadow-lg">
        <Icon
          property1="def"
          to="/completed"
          iconPadding="0.5rem"
          tablerIconArrowBigRight="/tablericon3dcubesphere-1.svg"
          tablerIconArrowBigRightHeight="1.5rem"
          tablerIconArrowBigRightWidth="1.5rem"
          className="hover:bg-blue-200 rounded-full transition-colors"
        />
        <Icon
          property1="def"
          to="/ai-chat"
          iconPadding="0.5rem"
          tablerIconArrowBigRight="/aichat.svg"
          tablerIconArrowBigRightHeight="1.5rem"
          tablerIconArrowBigRightWidth="1.5rem"
          className="hover:bg-blue-200 rounded-full transition-colors"
        />
        <Icon
          property1="def"
          to="/friends"
          iconPadding="0.5rem"
          tablerIconArrowBigRight="/tablericonhearthandshake1.svg"
          tablerIconArrowBigRightHeight="1.5rem"
          tablerIconArrowBigRightWidth="1.5rem"
          className="hover:bg-blue-200 rounded-full transition-colors"
        />
        <Icon
          property1="def"
          to="/notification"
          iconPadding="0.5rem"
          tablerIconArrowBigRight="/tablericonbellringing2.svg"
          tablerIconArrowBigRightHeight="1.5rem"
          tablerIconArrowBigRightWidth="1.5rem"
          className="hover:bg-blue-200 rounded-full transition-colors"
        />
        <Icon
          property1="def"
          to="/marketplace"
          iconPadding="0.5rem"
          tablerIconArrowBigRight="/tablericontagstarred.svg"
          tablerIconArrowBigRightHeight="1.5rem"
          tablerIconArrowBigRightWidth="1.5rem"
          className="hover:bg-blue-200 rounded-full transition-colors"
        />
      </div>
      <Link
        className="h-[3rem] w-[3rem] rounded-full bg-blue-600 border-blue-300 border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.375rem] cursor-pointer hover:bg-blue-500 transition-colors shadow-md"
        href="/profile"
      >
        <img
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt="Profile"
          src="/tablericonusercircle.svg"
        />
      </Link>
    </div>
  );
};

export default Menu;
