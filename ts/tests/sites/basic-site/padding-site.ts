/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:17 PM -- June 24th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonApp } from "../../../carbon-app";
import { CarbonPage } from "../../../carbon-page";
import { CarbonAlignment } from "../../../descriptors/carbon-alignment";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

const main: () => Promise<void> = async (): Promise<void> => {
	
	let app: CarbonApp = new CarbonApp({
		preferErrors: true,
		idPattern: "2n"
	});
	
	let page: CarbonPage = new CarbonPage(CarbonAlignment.CENTER);
	
	// page.setChild(toggle);
	
	app.getWorld().setPage(page);
	
};

main();