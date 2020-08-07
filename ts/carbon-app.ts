/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:18 PM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

import * as Merj from "merj";
import { CarbonConfig } from "./misc/carbon-config";
import { CarbonWorld } from "./carbon-world";
import { CarbonIDMap } from "./misc/carbon-id-map";
import { DefaultCarbonConfig } from "./misc/default-carbon-config";
import { CarbonContainerable } from "./carbon-containerable";

/**
 * The overarching 'hub' to which all of the large modules of the CarbonUI core are tied.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonApp {
	
	private readonly config: CarbonConfig;
	
	private readonly world: CarbonWorld;
	
	private readonly idMap: CarbonIDMap<CarbonContainerable>;
	
	public constructor(config: Partial<CarbonConfig> = new DefaultCarbonConfig()) {
		
		this.world = new CarbonWorld();
		this.idMap = CarbonIDMap.getRootMap();
		this.config = Merj.merge(
			[new DefaultCarbonConfig(), config],
			{ typeConflictResolution: "error", valueConflictResolution: "overwrite" }
		);
		
		if (window.carbon === undefined) window.carbon = this;
		else {
			
			if (this.config.warnOnAppReinitialization) {
				
				console.warn("WARN | Attempted to reinitialize the CarbonApp when it had already been " +
					"initialized elsewhere.");
				
			}
			
			if (this.config.errorOnAppReinitialization) {
				
				throw new Error("ERR | Attempted to reinitialize the CarbonApp when it had already been initialized " +
					"elsewhere.");
				
			}
			
		}
		
		return window.carbon;
	
	}
	
	public getConfig(): CarbonConfig {
		
		return this.config;
		
	}
	
	public getWorld(): CarbonWorld {
		
		return this.world;
		
	}
	
	public getMasterIDMap(): CarbonIDMap<CarbonContainerable> {
		
		return this.idMap;
		
	}
	
}