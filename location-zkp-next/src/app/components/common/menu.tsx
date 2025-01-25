"use client";
import {
	FunctionComponent,
	useMemo,
	type CSSProperties,
	useCallback,
} from "react";
import Icon from "./icon";
import Link from "next/link";

export type MenuType = {
	className?: string;
	back?: boolean;

	/** Variant props */
	property1?: "Default";

	/** Style props */
	menuAlignSelf?: CSSProperties["alignSelf"];
	menuHeight?: CSSProperties["height"];
	menuGap?: CSSProperties["gap"];
	menuWidth?: CSSProperties["width"];
	iconWidth?: CSSProperties["width"];
	iconHeight?: CSSProperties["height"];
	menuButtonsPadding?: CSSProperties["padding"];
	iconHeight1?: CSSProperties["height"];
	iconWidth1?: CSSProperties["width"];
	iconPadding?: CSSProperties["padding"];
	tablerIconUserCircleHeight?: CSSProperties["height"];
	tablerIconUserCircleWidth?: CSSProperties["width"];

	to: string;
};

const Menu: FunctionComponent<MenuType> = ({
	className = "",
	property1 = "Default",
	back = false,
	menuAlignSelf,
	menuHeight,
	menuGap,
	menuWidth,
	to,
	iconWidth,
	iconHeight,
	menuButtonsPadding,
	iconHeight1,
	iconWidth1,
	iconPadding,
	tablerIconUserCircleHeight,
	tablerIconUserCircleWidth,
}) => {
	const menuStyle: CSSProperties = useMemo(() => {
		return {
			alignSelf: menuAlignSelf,
			height: menuHeight,
			gap: menuGap,
			width: menuWidth,
		};
	}, [menuAlignSelf, menuHeight, menuGap, menuWidth]);

	const iconStyle: CSSProperties = useMemo(() => {
		return {
			width: iconWidth,
			height: iconHeight,
		};
	}, [iconWidth, iconHeight]);

	const menuButtonsStyle: CSSProperties = useMemo(() => {
		return {
			padding: menuButtonsPadding,
		};
	}, [menuButtonsPadding]);

	const icon1Style: CSSProperties = useMemo(() => {
		return {
			height: iconHeight1,
			width: iconWidth1,
			padding: iconPadding,
		};
	}, [iconHeight1, iconWidth1, iconPadding]);

	const tablerIconUserCircleStyle: CSSProperties = useMemo(() => {
		return {
			height: tablerIconUserCircleHeight,
			width: tablerIconUserCircleWidth,
		};
	}, [tablerIconUserCircleHeight, tablerIconUserCircleWidth]);

	return (
		<div
			className={`self-stretch h-[3.5rem] flex flex-row items-center justify-center gap-[0.5rem] ${className}`}
			data-property1={property1}
			style={menuStyle}
		>
			{back && (
				<Link href={to}>
					<img
						className="w-[2.625rem] rounded-81xl h-[2.625rem] overflow-hidden shrink-0 object-contain"
						alt=""
						src="/icon@2x.png"
						style={iconStyle}
					/>
				</Link>
			)}
			<div
				className="flex-1 rounded-81xl bg-purple-400 flex flex-row items-center justify-between p-[0.5rem]"
				style={menuButtonsStyle}
			>
				<Icon
					property1="def"
					to="/completed"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/tablericon3dcubesphere-1.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
				<Icon
					property1="def"
					to="/ai-chat"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/aichat.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
				<Icon
					property1="def"
					to="/friends"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/tablericonhearthandshake1.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
				<Icon
					property1="def"
					to="/notification"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/tablericonbellringing2.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
				<Icon
					property1="def"
					to="/marketplace"
					iconPadding="0.5rem"
					tablerIconArrowBigRight="/tablericontagstarred.svg"
					tablerIconArrowBigRightHeight="1.5rem"
					tablerIconArrowBigRightWidth="1.5rem"
				/>
			</div>
			<Link
				className="h-[3rem] w-[3rem] rounded-81xl bg-purple-600 border-rainbow border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.375rem] cursor-pointer"
				href="/profile"
				style={icon1Style}
			>
				<img
					className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
					loading="lazy"
					alt=""
					src="/tablericonusercircle.svg"
					style={tablerIconUserCircleStyle}
				/>
			</Link>
		</div>
	);
};

export default Menu;
