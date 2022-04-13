export class Speaker {
    constructor(
      public _id: number,
      public name: string,
      public image: string,
      public address: string,
      public bdate: Date,
      public hourRate: number,
      public isMarried: boolean,
      public rating: number
    ) {}
  }
  