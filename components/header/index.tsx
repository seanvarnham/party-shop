// Components
import AppBar from "@mui/material/AppBar";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

//
// import Logo from "../../lib/icons/Logo";
import CartButton from "../cart/CartButton";
import Navigation from "./Navigation";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
	const cart = useSelector((state: ReducerMap) => state.cart);

	return (
		<>
			<AppBar
				color={"default"}
				position="sticky"
				elevation={2}
				className={`p-t-sm p-b-sm`}
			>
				<div className="container">
					<div className="d-flex margin-x align-center">
						<div className="cell mob-6 tab-6 desk-auto">
							<Link href="/" passHref>
								<a>
									<span
										style={{
											fontFamily: "Time New Roman, Serif",
											fontSize: "2rem",
											fontWeight: "bold",
										}}
									>
										No. 10 Party Shop
									</span>
									{/* <Logo /> */}
								</a>
							</Link>
						</div>

						<div className="cell mob-6 tab-auto">
							<Navigation label="Main navigation" />
						</div>

						<div className="cell mob-12 tab-shrink show-for-tablet d-flex align-right">
							{cart && <CartButton />}
						</div>
					</div>
				</div>
			</AppBar>
		</>
	);
};

export default Header;
