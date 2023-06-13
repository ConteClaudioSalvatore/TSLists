namespace global {
  export type Converter<TInput, TOutput> = (input: TInput) => TOutput; 
  export interface List<T> extends Array<T> {
    /**
     * Gets or sets the total number of elements the internal data structure can hold without resizing.
     */
    Capacity: number;
    /**
     * Gets the number of elements contained in the {@link List<T>}.
     */
    Count: number;
    /**
     * Adds an object to the end of the {@link List<T>}.
     * @param item the item to add to the List
     */
    Add(item: T): void;
    /**
     * Adds the elements of the specified collection to the end of the {@link List<T>}.
     * @param items the collection of items to add to the list
     */
    AddRange(items: Array<T>): void;
    /**
     * Returns a read-only {@link ReadOnlyCollection<T>} wrapper for the current collection.
     * @throws {Error} This function is not implemented.
     */
    AsReadOnly(): Array<T>; // to be changed to ReadOnlyCollection
    /**
     * Uses a binary search algorithm to locate a specific element in the sorted {@link List<T>} or a portion of it.
     * @param item the item to search for
     * @throws {Error} This function is not implemented.
     */
    BinarySearch(item: T): number;
    /**
     * Removes all elements from the {@link List<T>}.
     */
    Clear(): void;
    /**
     * Determines whether an element is in the {@link List<T>}.
     * @param item The `object` to locate in the {@link List<T>}. The value can be `null` for reference types.
     */
    Contains(item: T): boolean;
    /**
     * Converts the elements in the current {@link List<T>} to another type, and returns a `list` containing the converted elements.
     * @param converter A {@link Converter<TInput,TOutput>} callback that converts each element from one type to another type.
     * @returns a {@link List<TOutput>} where `TOutput` is the type of the elements of the target array.
     */
    ConvertAll<TOutput>(converter: Converter<T, TOutput>): List<TOutput>;
    /**
     * Copies the entire {@link List<T>} to a compatible one-dimensional array, starting at the specified index of the target array.
     */
    CopyTo(dest: Array<T>, startingIndex: number): void;
    /**
     * Copies a range of elements from the {@link List<T>} to a compatible one-dimensional array, starting at the specified index of the target array.
     * @param index The zero-based index in the source {@link List<T>} at which copying begins.
     * @param dest The one-dimensional `Array` that is the destination of the elements copied from {@link List<T>}. The Array `must` have zero-based indexing.
     * @param arrayIndex The zero-based index in `array` at which copying begins.
     * @param count The number of elements to copy.
     */
    CopyTo(index:number, dest: Array<T>, arrayIndex: number, count: number): void;
    /**
     * Copies the entire {@link List<T>} to a compatible one-dimensional array, starting at the beginning of the target array.
     * @param dest The one-dimensional `Array` that is the destination of the elements copied from {@link List<T>}. The `Array` must have zero-based indexing.
     */
    CopyTo(dest: Array<T>): void;
    /**
     * Ensures that the capacity of this list is at least the specified `capacity`. If the current capacity is less than `capacity`, it is successively increased to twice the current capacity until it is at least the specified `capacity`.
     * @param capacity The minimum capacity to ensure.
     */
    EnsureCapacity(capacity: number): number;
    
    First(callback?: (item: T) => boolean): T | undefined;
    FirstOrDefault(callback?: (item: T) => boolean): T;
    Last(callback?: (item: T) => boolean): T | undefined;
    LastOrDefault(callback?: (item: T) => boolean): T;

    // constructor(params?: Array<T> | number): void;
  }
}
