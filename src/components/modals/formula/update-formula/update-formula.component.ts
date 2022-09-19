import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineLatestWith } from 'rxjs';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { FormulaService } from 'src/components/formula/formula.service';
import { Formula } from 'src/components/models/formula';
import { Product } from 'src/components/models/product';
import { ProductFormula } from 'src/components/models/productFormula';
import { CreateFormulaComponent } from '../create-formula/create-formula.component';
import { UpdateFormulaService } from './update-formula.service';

@Component({
  selector: 'app-update-formula',
  templateUrl: './update-formula.component.html',
  styleUrls: ['./update-formula.component.css']
})
export class UpdateFormulaComponent implements OnInit {

  @Input() onUpdateFormula!: Formula;
  usedQuantities!:number[];
  selectedProducts: Product[] = new Array<Product>;
  selectedProductFormulas: ProductFormula[] = new Array<ProductFormula>;
  productTest!: any;
  products!:Product[];
  formulaProductIds!:number;
  @ViewChild('updateForm') form!: NgForm;

  constructor(private formulaComponent: FormulaComponent, private formulaService:FormulaService, public updateFormulaService:UpdateFormulaService) { }

  mappingSelectedProducts(){
    for (let i= 0; i<this.selectedProducts.length;i++ ){
      this.selectedProductFormulas[i].Brand= this.selectedProducts[i].Brand;
      this.selectedProductFormulas[i].ColorCode= this.selectedProducts[i].ColorCode;
      this.selectedProductFormulas[i].UsedQuantity = this.usedQuantities[i];
      
    }
  }

  UpdateFormulaHandler(){
    this.updateFormulaService.showUpdateForm = false;
    this.mappingSelectedProducts();
    this.onUpdateFormula.ProductFormulas = this.selectedProductFormulas;
    console.log("EDWWWWWWWW");
    console.log( this.onUpdateFormula.ProductFormulas);
    this.updateFormulaService.showUpdateForm = false;
    this.formulaService.UpdateFormula(this.onUpdateFormula).subscribe(

      {
        next: response => {this.formulaComponent.GetAllFormulasHandler(), console.log(response)},
        error: error => console.log(error),
        complete: () => console.log("Formula Update")
      }
    )
  }

  GetingProductsBrand(): void {
    this.products = this.formulaComponent.GetProductsBrands();
    
  }

  ngOnInit(): void {
    this.GetingProductsBrand();
  }


}
