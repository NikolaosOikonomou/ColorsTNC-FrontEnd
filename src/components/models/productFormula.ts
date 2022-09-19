import { Formula } from "./formula";

export interface ProductFormula {
    ID: number;
    Brand: string;
    ColorCode: string;
    UsedQuantity: number;
    Formulas: Formula[] | null;
}