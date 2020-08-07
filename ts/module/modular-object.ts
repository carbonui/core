/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:32 AM -- December 11th, 2019.
 *	Project: CarbonUI Core
 */

import { CarbonModuleEvents } from "./carbon-module-events";
import { CarbonModule } from "./carbon-module";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class ModularObject<B> {
	
	private events?: CarbonModuleEvents<B>;
	
	public registerModule(module: CarbonModule<B>): void {
		
		this.getEvents().registerModule(module);
		
	}
	
	public getEvents(): CarbonModuleEvents<B> {
		
		if (this.events === undefined) this.events = new CarbonModuleEvents<B>();
		
		return this.events;
		
	}

}