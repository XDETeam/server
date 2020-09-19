import { IObject } from "../models";
import { IFunctor } from "../functor/Functor";
import { Aspects } from "../aspects";

export enum AspectType {
	Exists = "Exists",
	SpecificValue = "SpecificValue",
}

export interface IExtendedAspect {
	type: AspectType;
	aspect: Aspects;
}

export interface IRequiredAspect {
	functorName: string;
	forAspect: IExtendedAspect;
	requires: IExtendedAspect[];
}

export interface IObjectFlow {
	move(functorsPool: IFunctor[]): void;
	movePass(functorsPool: IFunctor[]): void;
}

export class ObjectFlow implements IObjectFlow {
	constructor(public object: IObject) {}

	move(functorsPool: IFunctor[]): void {
		let functors;

		while ((functors = this.findFunctors(functorsPool)) && functors.length) {
			console.log("Found functors", functors);
			console.log("Object before iteration", this.object);
			functors.forEach((functor) => (this.object = functor.move(this.object)));
			console.log("Object after iteration", this.object);
		}
	}

	findFunctors(functorsPool: IFunctor[]): IFunctor[] {
		const ret: IFunctor[] = [];

		functorsPool.forEach((functor) => {
			if (
				functor.produces.every((produce) => this.object[produce] === undefined) &&
				functor.requires.every((req) => {
					if (typeof req === "object") {
						return (
							this.object[req.aspect] !== undefined &&
							req.lambda(this.object[req.aspect])
						);
					} else {
						return !!this.object[req];
					}
				})
			) {
				ret.push(functor);
			}
		});

		return ret;
	}

	movePass(functorsPool: IFunctor[]): void {
		let functors;

		while ((functors = this.findFunctorsPass(functorsPool)) && functors.length) {
			console.log(`Found ${functors.length} functor(s)`, functors);
			console.log("Object before iteration", this.object);
			functors.forEach(
				(functor) =>
					(this.object = {
						...this.object,
						...functor.produces.reduce((a, b) => {
							a[b] = true;
							return a;
						}, {} as any),
					})
			);

			console.log("Object after iteration", this.object);
		}
	}

	findFunctorsPass(functorsPool: IFunctor[]): IFunctor[] {
		const ret: IFunctor[] = [];

		functorsPool.forEach((functor) => {
			if (
				functor.produces.every((produce) => this.object[produce] === undefined) &&
				functor.requires.every(
					(req) => this.object[typeof req === "object" ? req.aspect : req] !== undefined
				)
			) {
				ret.push(functor);
			}
		});

		return ret;
	}

	// private getRequiredAspects(extendedAspect: IExtendedAspect): IRequiredAspect[] {
	// 	const ret: IRequiredAspect[] = [];
	// 	const list = this.getFunctorsProducing(extendedAspect, this.functors);

	// 	if (list.length) {
	// 		list.forEach((functor) => {
	// 			const req: IRequiredAspect = {
	// 				functorName: functor.constructor.name,
	// 				forAspect: extendedAspect,
	// 				requires: [],
	// 			};

	// 			functor.requires.forEach((product) => {
	// 				req.requires.push(
	// 					typeof product === "object"
	// 						? {
	// 								aspect: product.aspect,
	// 								type: AspectType.SpecificValue,
	// 						  }
	// 						: { aspect: product, type: AspectType.Exists }
	// 				);
	// 			});

	// 			ret.push(req);
	// 		});
	// 	} else {
	// 		ret.push({
	// 			functorName: "NonExistingFunctor",
	// 			forAspect: extendedAspect,
	// 			requires: [],
	// 		});
	// 	}

	// 	return ret;
	// }
}
