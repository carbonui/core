/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:38 AM -- December 11th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonModule } from "./carbon-module";

/**
 * A lifecycle event for a ModularObject.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonModuleEvents<B> {
	
	public readonly CONSTRUCTION: AventNotifier<{
		source: B
	}>;
	
	public readonly DESTRUCTION: AventNotifier<{
		source: B
	}>;
	
	public constructor() {
		
		this.CONSTRUCTION =	new AventNotifier();
		this.DESTRUCTION =	new AventNotifier();
	
	}
	
	public registerModule(module: CarbonModule<B>): void {
		
		if (module.onConstruction !== undefined) this.CONSTRUCTION.subscribe(module.onConstruction);
		if (module.onDestruction !== undefined) this.DESTRUCTION.subscribe(module.onDestruction);
		
	}
	
}