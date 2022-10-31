export interface ResponseList<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
