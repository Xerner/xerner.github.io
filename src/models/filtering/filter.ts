export interface IFilter<TObject> {
  name: string;
  active: boolean;
  eval: (obj: TObject) => boolean;
  value: any;
}
