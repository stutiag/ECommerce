export class Product {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
gst:number;
;
    constructor(id: number, name: string, price: number, pictureUrl: string,gst: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
this.gst=gst;
    }
}
