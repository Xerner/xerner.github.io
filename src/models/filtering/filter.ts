export interface IFilter<TObject> {
  name: string;
  active: boolean;
  enabled: boolean;
  eval: (obj: TObject) => boolean;
  value: any;
}
