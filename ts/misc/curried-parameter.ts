/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:10 AM -- February 04th, 2020.
 *	Project: CarbonUI Core
 */

type ClassOf<T> = new(...args: any[]) => T;
type ClassConstructor<T> = (...params: ConstructorParameters<ClassOf<T>>) => T;

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CurriedParameter<T> {
	
	private constructorFunction: ClassConstructor<T>;
	
	private constructorArguments: Array<ConstructorParameters<ClassOf<T>>>;
	
	private value: T | undefined;
	
	public constructor(constructorFunction: ClassConstructor<T>, ...constructorArguments: ConstructorParameters<ClassOf<T>>) {
		
		this.constructorFunction = constructorFunction;
		this.constructorArguments = constructorArguments;
	
	}
	
	public get(): T {
		
		console.log("Running #get method");
	
		this.value = this.constructorFunction(this.constructorArguments);
		
		this.get = (): T => this.value as T;
		
		delete this.constructorFunction;
		delete this.constructorArguments;
		
		return this.value as T;
	
	}
	
}