
export type Item = {
  item: {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    image: string;
  }
}
export type Items = Item[];
