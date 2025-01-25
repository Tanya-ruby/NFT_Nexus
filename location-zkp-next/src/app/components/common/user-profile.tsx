import { FunctionComponent } from "react";
import Menu from "./menu";

export type UserProfileType = {
	className?: string;
};

const UserProfile: FunctionComponent<UserProfileType> = ({
	className = "",
}) => {
	return (
		<section
			className={`self-stretch rounded-lg bg-purple-800 border-primary border-[2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[0.312rem] px-[0.375rem] gap-[1rem] min-h-[10.5rem] text-left text-[1.5rem] text-primary   ${className}`}
		>
			<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem]">
				<img
					className="h-[5rem] w-[5rem] relative rounded-tl-2xl rounded-tr-81xl rounded-b-81xl overflow-hidden shrink-0 object-cover"
					loading="lazy"
					alt=""
					src="/teams1@2x.png"
				/>
				<div className="flex-1 flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] box-border min-w-[10.75rem]">
					<div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] gap-x-2">
						<div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
							<h1 className="m-0 relative text-ifont-semiboldtrabold  ">
								UserName
							</h1>
							<div className="bg-[#FFD400] text-purple-800 rounded-full px-2 text-[1rem]">
								Amber
							</div>
						</div>
						<div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[1rem]">
							<div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[2em]">
								<div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
									<div className="flex flex-col justify-start gap-[0.25rem]">
										<b className="">
											Historical Earnings
										</b>
										<b>$2.06</b>
									</div>
								</div>
								<div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
									<b>Total Explored</b>
									<div className="flex flex-col justify-start gap-[0.25rem]">
										<span className="">0.3 km </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Menu property1="Default" back={false} to="/home" />
		</section>
	);
};

export default UserProfile;
