export class Product {

    public name: string;
    public description: string;
    public imagePath: string;
    public category: string;
    public modelName: string;

     constructor(name: string, desc: string, imagepath: string,
                 category: string, modelName: string) {
         this.name = name;
         this.description = desc;
         this.imagePath = imagepath;
         this.category = category;
         this.modelName = modelName;
        }
}
