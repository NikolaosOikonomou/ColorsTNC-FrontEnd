import { Formula } from "./formula";

export interface Product{
  ID:number;
  Brand:string;
  ColorCode:string;
  ExpDate:Date;
  TubeQuantity:number;
  Formulas:Formula[] | null;
}