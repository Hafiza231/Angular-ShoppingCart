export class Product {
    public id:number;
    public productname:string;
    public productprice:number;
    public productimage:string;
    public productdes:string;
    public productcategory:string;
    public productrating:number;
    public isAddedToCart:boolean

    constructor(id:number,productname:string,productprice:number,productimage:string,productdes:string,productcategory:string,productrating:number,isAddedToCart:boolean){

        this.id=id;
        this.productname=productname;
        this.productprice=productprice;
        this.productimage=productimage;
        this.productdes=productdes;
        this.productcategory=productcategory;
        this.productrating=productrating;
        this.isAddedToCart=isAddedToCart
    }
}

