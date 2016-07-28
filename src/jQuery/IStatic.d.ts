/// <reference path='IAJAXSettings.d.ts'/>
/// <reference path='IAJAXPrefilterFunction.d.ts'/>
/// <reference path='IAJAXTransportHandler.d.ts'/>
/// <reference path='ICallbacks.d.ts'/>
/// <reference path='ICSSHooksObject.d.ts'/>
/// <reference path='IDeferred.d.ts'/>
/// <reference path='IDeferredBeforeStartFunction.d.ts'/>
/// <reference path='IEachFunction.d.ts'/>
/// <reference path='IEachPropertyFunction.d.ts'/>
/// <reference path='IEventConstructor.d.ts'/>
/// <reference path='IFXObject.d.ts'/>
/// <reference path='IGetSuccessFunction.d.ts'/>
/// <reference path='IGrepFunction.d.ts'/>
/// <reference path='IInstance.d.ts'/>
/// <reference path='IMapFunction.d.ts'/>
/// <reference path='IStaticEvent.d.ts'/>
/// <reference path='IXHR.d.ts'/>

declare module jQuery {
	export interface IStatic {
		(selectorOrHTML: string, contextOrAttributesOrOwnerDocument?: any): IInstance;
		(selectionOrElementOrArrayOrObjectOrCallback?: any): IInstance;
		
		
		
		holdReady(hold: boolean): void;
		
		
		
		noConflict(removeAll?: boolean): IStatic;
		
		
		
		event: IStaticEvent;
		
		
		
		Event: IEventConstructor;
		
		
		
		ajax(url: string, settings?: IAJAXSettings): IXHR;
		ajax(settings?: IAJAXSettings): IXHR;
		
		
		
		ajaxPrefilter(dataTypes: string, handler: IAJAXPrefilterFunction);
		ajaxPrefilter(handler: IAJAXPrefilterFunction);
		
		
		
		ajaxTransport(dataType: string, handler: IAJAXTransportHandler);
		
		
		
		ajaxSetup(options: IAJAXSettings);
		
		
		
		each<T>(array: T[], callback: IEachFunction<T>): T[];
		each<T>(object: T, callback: IEachPropertyFunction): T;
		
		
		
		Callbacks(): ICallbacks;
		
		
		
		Deferred(beforeStart?: IDeferredBeforeStartFunction): IDeferred;
		
		
		
		when(deferred: IPromise, ...deferreds: IPromise[]): IPromise;
		
		
		
		fn: IInstance;
		
		
		
		contains(container: Element, contained: Element): boolean;
		
		
		
		cssHooks: ICSSHooksObject;
		
		
		
		data<T>(element: Element, key: string, value: T): T;
		data(element: Element, key: string): any;
		data(element: Element): any;
		
		
		
		dequeue(element: Element, queueName?: string);
		
		
		
		error(message: string);
		
		
		
		extend(deep: boolean, target: any, object1: any, ...objectN: any[]): any;
		extend(target: any, ...objectN: any[]): any;
		
		
		
		fx: IFXObject;
		
		
		
		get(url: string, data?: any, success?: IGetSuccessFunction, dataType?: string): IXHR;
		
		
		
		getJSON(url: string, data?: any, success?: IGetSuccessFunction): IXHR;
		
		
		
		getScript(url: string, success?: IGetSuccessFunction): IXHR;
		
		
		
		globalEval(code: string);
		
		
		
		grep<T>(array: T[], fn: IGrepFunction<T>, invert?: boolean): T[];
		
		
		
		hasData(element: Element): boolean;
		
		
		
		inArray<T>(value: T, array: T[], fromIndex?: number): number;
		
		
		
		isArray(obj): boolean;
		
		isEmptyObject(obj): boolean;
		
		isFunction(obj): boolean;
		
		isNumeric(obj): boolean;
		
		isPlainObject(obj): boolean;
		
		isWindow(obj): boolean;
		
		isXMLDoc(obj): boolean;
		
		
		
		makeArray(obj: any): any[];
		
		
		
		map<T, U>(array: T[], callback: IMapFunctionArray<T, U>): U[];
		map<T, U>(object: { [s: string]: T }, callback: IMapFunctionObject<T, U>): U[];
		
		
		
		merge<T>(first: T[], second: T[]): T[];
		
		
		
		noop();
		
		
		
		now(): number;
		
		
		
		param(obj: any, traditional?: boolean): string;
		
		
		
		parseHTML(data: string, context?: Element, keepScripts?: boolean);
		
		
		
		parseJSON(json: string): any;
		
		
		
		parseXML(data: string): XMLDocument;
		
		
		
		post(url: string, data?: any, success?: IGetSuccessFunction, dataType?: string): IXHR;
		
		
		
		proxy<T extends Function>(fn: T, context: any): T;
		proxy(fn: Function, context: any, ...additionalArguments: any[]): Function;
		proxy(context: any, name: string, ...additionalArguments: any[]): Function;
		
		
		
		queue(element: Element, queueName: string, newQueue: any[]): IInstance;
		queue(element: Element, queueName: string, callback: Function): IInstance;
		queue(element: Element, queueName?: string): any[];
		
		
		
		removeData(element: Element, name?: string): IInstance;
		
		
		
		support: any;
		
		
		
		trim(str: string): string;
		
		
		
		type(obj: any): string;
		
		
		
		unique<T extends any[]>(array: T): T;
		
		
		
		when(deferred: IDeferred, ...deferreds: IDeferred[]): IPromise;
	}
}
