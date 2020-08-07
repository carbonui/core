/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:12 PM -- May 24th, 2019.
 *	Project: @carbonui/core
 */

/**
 * Enumerates different types of inputs alongside descriptions of the given type.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonInputType {
	
	public static readonly BUTTON:			CarbonInputType = new CarbonInputType("button");
	public static readonly CHECKBOX:		CarbonInputType = new CarbonInputType("checkbox");
	public static readonly COLOR:			CarbonInputType = new CarbonInputType("color");
	public static readonly DATE:			CarbonInputType = new CarbonInputType("date");
	public static readonly FILE:			CarbonInputType = new CarbonInputType("file");
	public static readonly IMAGE_BUTTON:	CarbonInputType = new CarbonInputType("image");
	public static readonly MONTH:			CarbonInputType = new CarbonInputType("month");
	public static readonly SIMPLE_DATE:		CarbonInputType = new CarbonInputType("datetime-local");
	
	private static typeStringMap: Map<string, CarbonInputType>;
	
	private typeString: string;
	
	protected constructor(typeString: string) {
	
		this.typeString = typeString;
		
		CarbonInputType.addTypeStringMapping(typeString, this);
	
	}
	
	protected static addTypeStringMapping(typeString: string, type: CarbonInputType): void {
		
		if (CarbonInputType.typeStringMap === undefined) CarbonInputType.typeStringMap = new Map<string, CarbonInputType>();
		
		CarbonInputType.typeStringMap.set(typeString, type);
		
	}
	
	public static getInputTypeForTypeString(typeString: string): CarbonInputType | undefined {
		
		return CarbonInputType.typeStringMap.get(typeString);
		
	}
	
	public getTypeString(): string {
		
		return this.typeString;
		
	}
	
}