namespace System.Collections.Generic {
  class List<T> implements IList<T> {
    [x: number]: T;
    Capacity: number;
    Count: number;
    Add(item: T): void {
      this[this.Count++] = item;
      this.Capacity += 1;
      this.Count += 1;
    }
    AddRange(items: Array<T>): void {
      items.forEach((item) => this.Add(item));
    }
    AsReadOnly(): readonly T[] {
      throw new Error("Method not implemented.");
    }
    BinarySearch(item: T): number {
      throw new Error("Method not implemented.");
    }
    Clear(): void {
      throw new Error("Method not implemented.");
    }
    Contains(item: T): boolean {
      throw new Error("Method not implemented.");
    }
    ConvertAll<TOutput>(converter: Converter<T, TOutput>): IList<TOutput> {
      throw new Error("Method not implemented.");
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
      throw new Error("Method not implemented.");
    }
    EnsureCapacity(capacity: number): number {
      throw new Error("Method not implemented.");
    }
    Exists(match: Predicate<T>): boolean {
      throw new Error("Method not implemented.");
    }
    Find(match: Predicate<T>): T | undefined {
      throw new Error("Method not implemented.");
    }
    FindAll(match: Predicate<T>): IList<T> {
      throw new Error("Method not implemented.");
    }
    FindIndex(match: Predicate<T>): number;
    FindIndex(startIndex: number, match: Predicate<T>): number;
    FindIndex(startIndex: number, count: number, match: Predicate<T>): number;
    FindIndex(startIndex: unknown, count?: unknown, match?: unknown): number {
      throw new Error("Method not implemented.");
    }
    FindLast(match: Predicate<T>): T | undefined {
      throw new Error("Method not implemented.");
    }
    FindLastIndex(match: Predicate<T>): number;
    FindLastIndex(startIndex: number, match: Predicate<T>): number;
    FindLastIndex(
      startIndex: number,
      count: number,
      match: Predicate<T>
    ): number;
    FindLastIndex(
      startIndex: unknown,
      count?: unknown,
      match?: unknown
    ): number {
      throw new Error("Method not implemented.");
    }
    ForEach(action: Action<T>): void {
      throw new Error("Method not implemented.");
    }
    GetRange(index: number, count: number): IList<T> {
      throw new Error("Method not implemented.");
    }
    IndexOf(item: T): number;
    IndexOf(item: T, index: number): number;
    IndexOf(item: T, index: number, count: number): number;
    IndexOf(item: unknown, index?: unknown, count?: unknown): number {
      throw new Error("Method not implemented.");
    }
    Insert(index: number, item: T): void {
      throw new Error("Method not implemented.");
    }
    InsertRange(index: number, collection: T[]): void {
      throw new Error("Method not implemented.");
    }
    LastIndexOf(item: T): number;
    LastIndexOf(item: T, index: number): number;
    LastIndexOf(item: T, index: number, count: number): number;
    LastIndexOf(item: unknown, index?: unknown, count?: unknown): number {
      throw new Error("Method not implemented.");
    }
    Remove(item: T): boolean {
      throw new Error("Method not implemented.");
    }
    RemoveAll(predicate: Predicate<T>): number {
      throw new Error("Method not implemented.");
    }
    RemoveAt(index: number): void {
      throw new Error("Method not implemented.");
    }
    RemoveRange(index: number, count: number): void {
      throw new Error("Method not implemented.");
    }
    Reverse(): void;
    Reverse(start: number, count: number): void;
    Reverse(start?: unknown, count?: unknown): void {
      throw new Error("Method not implemented.");
    }
    Sort(): void;
    Sort(comparison: Comparison<T>): void;
    Sort(comparison?: unknown): void {
      throw new Error("Method not implemented.");
    }
    ToArray(): T[] {
      throw new Error("Method not implemented.");
    }
    TrimExcess(): void {
      throw new Error("Method not implemented.");
    }
    TrueForAll(match: Predicate<T>): boolean {
      throw new Error("Method not implemented.");
    }
    [Symbol.iterator](): IterableIterator<T> {
      throw new Error("Method not implemented.");
    }
  }
}
