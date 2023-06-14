import * as System from "./interfaces";

export class List<T> implements System.IList<T> {
  private items: Array<T>;
  private capacity: number;
  private count: number;
  public get Capacity(): number {
    return this.capacity;
  }
  public get Count(): number {
    return this.count;
  }
  [index: number]: T;

  constructor();
  constructor(items: Array<T>);
  constructor(items: number);
  constructor(items?: unknown) {
    if (typeof items === "number") {
      this.items = new Array(items);
      this.count = 0;
      this.capacity = items;
      return;
    }
    if (items instanceof Array) {
      this.items = items;
      this.count = items.length;
      this.capacity = items.length;
      return;
    }
    this.items = [];
    this.count = 0;
    this.capacity = 0;
  }

  Add(item: T): void {
    this.EnsureCapacity(this.Count + 1);
    this.items.push(item);
    this.count++;
  }
  AddRange(items: Array<T>): void {
    items.forEach((item) => this.Add(item));
  }
  AsReadOnly(): ReadonlyArray<T> {
    return this.items;
  }
  BinarySearch(item: T): number {
    throw new Error("Method not implemented.");
  }
  Clear(): void {
    this.items = [];
    this.count = 0;
    this.capacity = 0;
  }
  Contains(item: T): boolean {
    return this.items.includes(item);
  }
  ConvertAll<TOutput extends T>(
    converter: System.Converter<T, TOutput>
  ): System.IList<TOutput> {
    return new List(this.items.map(converter));
  }
  CopyTo(dest: T[], startingIndex: number): void;
  CopyTo(index: number, dest: T[], arrayIndex: number, count: number): void;
  CopyTo(dest: T[]): void;
  CopyTo(
    index: unknown,
    dest?: unknown,
    arrayIndex?: unknown,
    count?: unknown
  ): void {
    if (typeof index === "number") {
      if (dest instanceof Array) {
        if (typeof arrayIndex === "number" && typeof count === "number") {
          this.items.slice(index, index + count).forEach((item, i) => {
            dest[i + arrayIndex] = item;
          });
          return;
        }
        this.items.slice(index).forEach((item, i) => {
          dest[i] = item;
        });
        return;
      }
      throw new Error("Invalid destination");
    }
    if (index instanceof Array && typeof dest === "number") {
      this.items.forEach((item, i) => {
        index[i + dest] = item;
      });
      return;
    }
    if (index instanceof Array) {
      this.items.forEach((item, i) => {
        index[i] = item;
      });
      return;
    }
    throw new Error("Invalid destination");
  }
  EnsureCapacity(capacity: number): number {
    if (this.capacity < capacity) {
      for (let i = this.capacity; i < capacity; i * 2) {
        this.capacity *= 2;
      }
    }
    return this.Capacity;
  }
  Exists(match: System.Predicate<T>): boolean {
    return this.items.some(match);
  }
  Find(match: System.Predicate<T>): T | undefined {
    return this.items.find(match);
  }
  FindAll(match: System.Predicate<T>): System.IList<T> {
    return new List(this.items.filter(match));
  }
  FindIndex(match: System.Predicate<T>): number;
  FindIndex(startIndex: number, match: System.Predicate<T>): number;
  FindIndex(startIndex: number, count: number, match: System.Predicate<T>): number;
  FindIndex(startIndex: unknown, count?: unknown, match?: unknown): number {
    if (typeof startIndex === "number") {
      if (typeof count === "number") {
        if (typeof match === "function") {
          return this.items.findIndex(match as System.Predicate<T>, startIndex);
        }
        throw new Error("Invalid match");
      }
      if (typeof count === "function") {
        return this.items.findIndex(count as System.Predicate<T>, startIndex);
      }
    }
    if (typeof startIndex === "function") {
      return this.items.findIndex(startIndex as System.Predicate<T>);
    }
    throw new Error("Invalid match");
  }
  FindLast(match: System.Predicate<T>): T | undefined {
    return [...this.items].reverse().find(match);
  }
  FindLastIndex(match: System.Predicate<T>): number;
  FindLastIndex(startIndex: number, match: System.Predicate<T>): number;
  FindLastIndex(startIndex: number, count: number, match: System.Predicate<T>): number;
  FindLastIndex(startIndex: unknown, count?: unknown, match?: unknown): number {
    if (typeof startIndex === "number") {
      if (typeof count === "number") {
        if (typeof match === "function") {
          return this.items
            .slice(0, startIndex)
            .reverse()
            .findIndex(match as System.Predicate<T>);
        }
        throw new Error("Invalid match");
      }
      if (typeof count === "function") {
        return this.items
          .slice(0, startIndex)
          .reverse()
          .findIndex(count as System.Predicate<T>);
      }
    }
    if (typeof startIndex === "function") {
      return this.items
        .slice(0, this.Count)
        .reverse()
        .findIndex(startIndex as System.Predicate<T>);
    }
    throw new Error("Invalid match");
  }
  ForEach(action: System.Action<T>): void {
    this.items.forEach(action);
  }
  GetRange(index: number, count: number): System.IList<T> {
    return new List(this.items.slice(index, index + count));
  }
  IndexOf(item: T): number;
  IndexOf(item: T, index: number): number;
  IndexOf(item: T, index: number, count: number): number;
  IndexOf(item: T, index?: number, count?: number): number {
    if (index !== undefined) {
      if (count !== undefined) {
        return this.items.slice(index, index + count).indexOf(item);
      }
      return this.items.slice(index).indexOf(item);
    }
    return this.items.indexOf(item);
  }
  Insert(index: number, item: T): void {
    this.items.splice(index, 0, item);
  }
  InsertRange(index: number, collection: Array<T>): void {
    this.items.splice(index, 0, ...collection);
  }
  LastIndexOf(item: T): number;
  LastIndexOf(item: T, index: number): number;
  LastIndexOf(item: T, index: number, count: number): number;
  LastIndexOf(item: T, index?: number, count?: number): number {
    if (index !== undefined) {
      if (count !== undefined) {
        return this.items
          .slice(0, index + count)
          .reverse()
          .indexOf(item);
      }
      return this.items.slice(0, index).reverse().indexOf(item);
    }
    return [...this.items].reverse().indexOf(item);
  }
  Remove(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
  RemoveAll(predicate: System.Predicate<T>): number {
    const items = this.items.filter(predicate);
    this.items = this.items.filter((item) => !items.includes(item));
    return items.length;
  }
  RemoveAt(index: number): void {
    this.items.splice(index, 1);
  }
  RemoveRange(index: number, count: number): void {
    this.items.splice(index, count);
  }
  Reverse(): void;
  Reverse(start: number, count: number): void;
  Reverse(start?: number, count?: number): void {
    if (start !== undefined) {
      if (count !== undefined) {
        const items = this.items.slice(start, start + count);
        items.reverse();
        this.items.splice(start, count, ...items);
        return;
      }
      throw new Error("Invalid count");
    }
    this.items.reverse();
  }
  Sort(): void;
  Sort(comparison: System.Comparison<T>): void;
  Sort(comparison?: System.Comparison<T>): void {
    if (comparison !== undefined) {
      this.items.sort(comparison);
      return;
    }
    this.items.sort();
  }
  ToArray(): T[] {
    return [...this.items];
  }
  TrimExcess(): void {
    throw new Error("Method not implemented.");
  }
  TrueForAll(match: System.Predicate<T>): boolean {
    return this.items.every(match);
  }
  [Symbol.iterator](): IterableIterator<T> {
    return this.items[Symbol.iterator]();
  }
}
