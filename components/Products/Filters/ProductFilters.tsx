import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from "@mui/material";
import { FormEvent } from "react";
import categories from "../../../lib/data/categories.json";
import classes from "./Products.module.scss";

type Props = {
	headingId?: number | string;
	onChangeFilters: (e: FormEvent<HTMLInputElement>, cat: string) => void;
	filters: string[];
};

const ProductFilters = (props: Props) => {
	const { onChangeFilters, filters, headingId } = props;
	return (
		<>
			<div className="cell p-b-md">
				<Typography
					id={headingId?.toString() || undefined}
					variant="h5"
					variantMapping={{ h5: "h2" }}
				>
					{`Filter by`}
				</Typography>
			</div>

			<div className="cell">
				<FormGroup>
					{categories.map((cat) => {
						return (
							<FormControlLabel
								className={classes["filter-item"]}
								key={cat}
								control={
									<Checkbox
										checked={filters.includes(cat)}
										onChange={(e) =>
											onChangeFilters(e, cat)
										}
									/>
								}
								label={cat}
							/>
						);
					})}
				</FormGroup>
			</div>
		</>
	);
};

export default ProductFilters;
