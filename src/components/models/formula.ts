import { ProductFormula } from "./productFormula";

export interface Formula{
  ColorFormulaID:number;
  FormulaName:string;
  CreationDate:Date | undefined;
  Cost:number;
  Duration:string;
  ServiceType:string;
  FormulasPhotosid:number;
  FormulasPhotosUrl:string;
  ProductFormulas:ProductFormula[];
}

