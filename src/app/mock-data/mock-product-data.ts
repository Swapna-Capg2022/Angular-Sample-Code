import { Product } from "../models/product";
export class MockData {

public static Products : Product[] = [
        {
            'productId' :  101,
            'productName' :  'Rice',
            'productPrice' :   100,
            'productQty' :   1,
            'productBrand':   'Lakshmi',
        },
        {
            'productId' :  102,
            'productName' :  'Toor Dal',
            'productPrice' :   160,
            'productQty' :   1,
            'productBrand':   'Himalaya',
        },
        {
            'productId' :  103,
            'productName' :  'Urad Dal',
            'productPrice' :   180,
            'productQty' :   1,
            'productBrand':   'Himalaya',
        }
    ]
}