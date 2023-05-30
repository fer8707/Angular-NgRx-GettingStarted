import { createAction, createReducer, on } from "@ngrx/store";
import { Product } from "../product";
export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}
export const productReducer = createReducer <ProductState> (
    {showProductCode: true} as ProductState,
    on(createAction('[product] Togge Product Code'), (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
);
