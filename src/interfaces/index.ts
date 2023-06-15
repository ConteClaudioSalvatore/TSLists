export type Converter<TInput, TOutput> = (input: TInput) => TOutput;
export type Action<T> = (input: T, index: number) => void;
export type Predicate<T> = (input: T) => boolean;
export type Comparison<T> = (x: T, y: T) => number;

export interface IList<T> extends Omit<ArrayLike<T>, "length"> {
  /**
   * Gets or sets the total number of elements the internal data structure can hold without resizing.
   */
  Capacity: number;
  /**
   * Gets the number of elements contained in the {@link IList<T>}.
   */
  Count: number;
  /**
   * Gets or sets the element at the specified index.
   */
  [Symbol.iterator](): Iterator<T>;
  /**
   * Adds an object to the end of the {@link IList<T>}.
   * @param item the item to add to the List
   */
  Add(item: T): void;
  /**
   * Adds the elements of the specified collection to the end of the {@link IList<T>}.
   * @param items the collection of items to add to the list
   */
  AddRange(items: Array<T>): void;
  /**
   * Returns a read-only {@link ReadOnlyCollection<T>} wrapper for the current collection.
   * @throws {Error} This function is not implemented.
   */
  AsReadOnly(): ReadonlyArray<T>; // to be changed to ReadOnlyCollection
  /**
   * Uses a binary search algorithm to locate a specific element in the sorted {@link IList<T>} or a portion of it.
   * @param item the item to search for
   * @throws {Error} This function is not implemented.
   */
  BinarySearch(item: T): number;
  /**
   * Removes all elements from the {@link IList<T>}.
   */
  Clear(): void;
  /**
   * Determines whether an element is in the {@link IList<T>}.
   * @param item The `object` to locate in the {@link IList<T>}. The value can be `null` for reference types.
   */
  Contains(item: T): boolean;
  /**
   * Converts the elements in the current {@link IList<T>} to another type, and returns a `list` containing the converted elements.
   * @param converter A {@link Converter<TInput,TOutput>} callback that converts each element from one type to another type.
   * @returns a {@link IList<TOutput>} where `TOutput` is the type of the elements of the target array.
   */
  ConvertAll<TOutput extends T>(
    converter: Converter<T, TOutput>
  ): IList<TOutput>;
  /**
   * Copies the entire {@link IList<T>} to a compatible one-dimensional array, starting at the specified index of the target array.
   */
  CopyTo(dest: Array<T>, startingIndex: number): void;
  /**
   * Copies a range of elements from the {@link IList<T>} to a compatible one-dimensional array, starting at the specified index of the target array.
   * @param index The zero-based index in the source {@link IList<T>} at which copying begins.
   * @param dest The one-dimensional `Array` that is the destination of the elements copied from {@link IList<T>}. The Array `must` have zero-based indexing.
   * @param arrayIndex The zero-based index in `array` at which copying begins.
   * @param count The number of elements to copy.
   */
  CopyTo(
    index: number,
    dest: Array<T>,
    arrayIndex: number,
    count: number
  ): void;
  /**
   * Copies the entire {@link IList<T>} to a compatible one-dimensional array, starting at the beginning of the target array.
   * @param dest The one-dimensional `Array` that is the destination of the elements copied from {@link IList<T>}. The `Array` must have zero-based indexing.
   */
  CopyTo(dest: Array<T>): void;
  /**
   * Ensures that the capacity of this list is at least the specified `capacity`. If the current capacity is less than `capacity`, it is successively increased to twice the current capacity until it is at least the specified `capacity`.
   * @param capacity The minimum capacity to ensure.
   */
  EnsureCapacity(capacity: number): number;
  /**
   * Determines whether the {@link IList<T>} contains elements that match the conditions defined by the specified predicate.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the elements to search for.
   * @returns `true` if the {@link IList<T>} contains one or more elements that match the conditions defined by the specified predicate; otherwise, `false`.
   */
  Exists(match: Predicate<T>): boolean;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire {@link IList<T>}.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The first element that matches the conditions defined by the specified predicate, if found; otherwise, the default value for type `T`.
   */
  Find(match: Predicate<T>): T | undefined;
  /**
   * Retrieves all the elements that match the conditions defined by the specified predicate.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the elements to search for.
   * @returns A {@link IList<T>} containing all the elements that match the conditions defined by the specified predicate, if found; otherwise, an empty {@link IList<T>}.
   */
  FindAll(match: Predicate<T>): IList<T>;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the first occurrence within the entire {@link IList<T>}.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The zero-based index of the first occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at the first element and ending at the last element.
   *
   * The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate.
   *
   * The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  FindIndex(match: Predicate<T>): number;
  /**
   * Searches for an element that matches the conditions defined by the specified `predicate`, and returns the zero-based index of the first occurrence within the range of elements in the {@link IList<T>} that extends from the specified index to the `last` element.
   * @param startIndex Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the first occurrence within the range of elements in the List<T> that extends from the specified index to the last element.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The zero-based index of the first occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at `startIndex` and ending at the last element.
   *
   * The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate.
   *
   * The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is the number of elements from `startIndex` to the end of the {@link IList<T>}.
   */
  FindIndex(startIndex: number, match: Predicate<T>): number;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the first occurrence within the range of elements in the {@link IList<T>} that starts at the specified `index` and contains the specified number of `elements`.
   * @param count The number of elements in the section to search.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @param startIndex The zero-based starting index of the search.
   * @returns The zero-based index of the first occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at `startIndex` and ending at `startIndex` plus `count` minus 1, if `count` is greater than 0.
   *
   * The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate. The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is `count`.
   */
  FindIndex(startIndex: number, count: number, match: Predicate<T>): number;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the last occurrence within the entire {@link IList<T>}.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The last element that matches the conditions defined by the specified predicate, if found; otherwise, the default value for type `T`.
   * @remarks The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate.
   *
   * The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate, moving backward in the {@link IList<T>}, starting with the last element and ending with the first element.
   *
   * Processing is stopped when a match is found.
   * ### (!) important
   * When searching a list containing value types, make sure the default value for the type does not satisfy the search predicate.
   * Otherwise, there is no way to distinguish between a default value indicating that no match was found and a list element that happens to have the default value for the type.
   * If the default value satisfies the search predicate, use the {@link FindLastIndex} method instead.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  FindLast(match: Predicate<T>): T | undefined;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the last occurrence within the entire {@link IList<T>}.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The zero-based index of the last occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at the last element and ending at the first element.
   *
   * The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate.
   * The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  FindLastIndex(match: Predicate<T>): number;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the last occurrence within the range of elements in the {@link IList<T>} that extends from the first element to the specified index.
   * @param startIndex The zero-based starting index of the backward search.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The zero-based index of the last occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at `startIndex` and ending at the first element.
   *
   *The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate. The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   *This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is the number of elements from the beginning of the {@link IList<T>} to `startIndex`.
   */
  FindLastIndex(startIndex: number, match: Predicate<T>): number;
  /**
   * Searches for an element that matches the conditions defined by the specified predicate, and returns the zero-based index of the last occurrence within the range of elements in the {@link IList<T>} that contains the specified number of elements and ends at the specified index.
   * @param startIndex The zero-based starting index of the backward search.
   * @param count The number of elements in the section to search.
   * @param match The {@link Predicate<T>} delegate that defines the conditions of the element to search for.
   * @returns The zero-based index of the last occurrence of an element that matches the conditions defined by `match`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at `startIndex` and ending at `startIndex` minus `count` plus 1, if `count` is greater than 0.
   *
   * The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate. The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  FindLastIndex(startIndex: number, count: number, match: Predicate<T>): number;
  /**
   * Performs the specified action on each element of the {@link IList<T>}.
   * @param action The {@link Action<T>} delegate to perform on each element of the {@link IList<T>}.
   * @remarks The {@link Action<T>} is a delegate to a method that performs an action on the object passed to it. The elements of the current {@link IList<T>} are individually passed to the {@link Action<T>} delegate.
   *
   * This method is an O(_n_) operation, where _n_ is {@link Count}.
   *
   * Modifying the underlying collection in the body of the {@link Action<T>} delegate is not supported and causes undefined behavior.
   */
  ForEach(action: Action<T>): void;
  // GetEnumerator(): IEnumerator<T>; //NOT IMPLEMENTED
  /**
   * Creates a shallow copy of a range of elements in the source {@link IList<T>}.
   * @param index The zero-based {@link IList<T>} index at which the range starts.
   * @param count The number of elements in the range.
   * @returns A shallow copy of a range of elements in the source {@link IList<T>}.
   * @remarks A shallow copy of a collection of reference types, or a subset of that collection, contains only the references to the elements of the collection. The objects themselves are not copied. The references in the new list point to the same objects as the references in the original list.
   *
   *A shallow copy of a collection of value types, or a subset of that collection, contains the elements of the collection. However, if the elements of the collection contain references to other objects, those objects are not copied. The references in the elements of the new collection point to the same objects as the references in the elements of the original collection.
   *
   *In contrast, a deep copy of a collection copies the elements and everything directly or indirectly referenced by the elements.
   *
   *This method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  GetRange(index: number, count: number): IList<T>;
  /**
   * Searches for the specified object and returns the zero-based index of the first occurrence within the entire {@link IList<T>}.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @returns The zero-based index of the first occurrence of `item` within the entire {@link IList<T>}, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at the first element and ending at the last element.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  IndexOf(item: T): number;
  /**
   * Searches for the specified object and returns the zero-based index of the first occurrence within the range of elements in the {@link IList<T>} that extends from the specified index to the last element.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @param index The zero-based starting index of the search. 0 (zero) is valid in an empty list.
   * @returns The zero-based index of the first occurrence of `item` within the range of elements in the {@link IList<T>} that extends from `index` to the last element, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at `index` and ending at the last element.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is the number of elements from `index` to the end of the {@link IList<T>}.
   */
  IndexOf(item: T, index: number): number;
  /**
   * Searches for the specified object and returns the zero-based index of the first occurrence within the range of elements in the {@link IList<T>} that starts at the specified index and contains the specified number of elements.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @param index The zero-based starting index of the search. 0 (zero) is valid in an empty list.
   * @param count The number of elements in the section to search.
   * @returns The zero-based index of the first occurrence of `item` within the range of elements in the {@link IList<T>} that starts at `index` and contains `count` number of elements, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched forward starting at `index` and ending at `index` plus `count` minus 1, if `count` is greater than 0.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is `count`.
   */
  IndexOf(item: T, index: number, count: number): number;
  /**
   * Inserts an element into the {@link IList<T>} at the specified index.
   * @param index The zero-based index at which `item` should be inserted.
   * @param item The object to insert. The value can be `null` for reference types.
   * @remarks {@link IList<T>} accepts `null` as a valid value for reference types and allows duplicate elements.
   *
   * If {@link Count} already equals {@link Capacity}, the capacity of the {@link IList<T>} is increased by automatically reallocating the internal array, and the existing elements are copied to the new array before the new element is added.
   *
   * If `index` is equal to {@link Count}, `item` is added to the end of {@link IList<T>}.
   *
   * This method is an O(_n_) operation, where _n_ is {@link Count}
   */
  Insert(index: number, item: T): void;
  /**
   * Inserts the elements of a collection into the {@link IList<T>} at the specified index.
   * @param index The zero-based index at which the new elements should be inserted.
   * @param collection The collection whose elements should be inserted into the {@link IList<T>}. The collection itself cannot be `null`, but it can contain elements that are `null`, if type `T` is a reference type.
   * @remarks {@link IList<T>} accepts `null` as a valid value for reference types and allows duplicate elements.
   *
   * If the new {@link Count} (the current {@link Count} plus the size of the collection) will be greater than {@link Capacity}, the capacity of the {@link IList<T>} is increased by automatically reallocating the internal array to accommodate the new elements, and the existing elements are copied to the new array before the new elements are added.
   *
   * If `index` is equal to {@link Count}, the new elements are added to the end of the {@link IList<T>}.
   *
   * The order of the elements in the collection is preserved in the {@link IList<T>}.
   *
   * This method is an O(_n_ * _m_) operation, where _n_ is the number of elements to be added and _m_ is {@link Count}.
   */
  InsertRange(index: number, collection: Array<T>): void;
  /**
   * Searches for the specified object and returns the zero-based index of the last occurrence within the entire {@link IList<T>}.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @returns The zero-based index of the last occurrence of `item` within the entire the {@link IList<T>}, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at the last element and ending at the first element.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  LastIndexOf(item: T): number;
  /**
   * Searches for the specified object and returns the zero-based index of the last occurrence within the range of elements in the {@link IList<T>} that extends from the first element to the specified index.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @param index The zero-based starting index of the backward search.
   * @returns The zero-based index of the last occurrence of `item` within the range of elements in the {@link IList<T>} that extends from the first element to `index`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at `index` and ending at the first element.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is the number of elements from the beginning of the {@link IList<T>} to `index`.
   */
  LastIndexOf(item: T, index: number): number;
  /**
   * Searches for the specified object and returns the zero-based index of the last occurrence within the range of elements in the {@link IList<T>} that contains the specified number of elements and ends at the specified index.
   * @param item The object to locate in the {@link IList<T>}. The value can be `null` for reference types.
   * @param index The zero-based starting index of the backward search.
   * @param count The number of elements in the section to search.
   * @returns The zero-based index of the last occurrence of `item` within the range of elements in the {@link IList<T>} that contains `count` number of elements and ends at `index`, if found; otherwise, -1.
   * @remarks The {@link IList<T>} is searched backward starting at `index` and ending at `index` minus `count` plus 1, if `count` is greater than 0.
   *
   * This method determines equality using the default equality comparer for `T`, the type of values in the list.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is `count`.
   */
  LastIndexOf(item: T, index: number, count: number): number;
  /**
   * Removes the first occurrence of a specific object from the {@link IList<T>}.
   * @param item The object to remove from the {@link IList<T>}. The value can be `null` for reference types.
   * @returns `true` if `item` is successfully removed; otherwise, `false`. This method also returns `false` if `item` was not found in the {@link IList<T>}.
   * @remarks This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  Remove(item: T): boolean;
  /**
   * Removes the all the elements that match the conditions defined by the specified predicate.
   * @param predicate The {@link Predicate<T>} delegate that defines the conditions of the elements to remove.
   * @returns The number of elements removed from the {@link IList<T>}.
   * @remarks The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate. The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate, and the elements that match the conditions are removed from the {@link IList<T>}.
   *
   * This method performs a linear search; therefore, this method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  RemoveAll(predicate: Predicate<T>): number;
  /**
   * Removes the element at the specified index of the {@link IList<T>}.
   * @param index The zero-based index of the element to remove.
   * @remarks This method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  RemoveAt(index: number): void;
  /**
   * Removes a range of elements from the {@link IList<T>}.
   * @param index The zero-based starting index of the range of elements to remove.
   * @param count The number of elements to remove.
   */
  RemoveRange(index: number, count: number): void;
  /**
   * Reverses the order of the elements in the entire {@link IList<T>}.
   * @remarks This method uses the {@link Array.prototype.reverse} method to reverse the elements.
   */
  Reverse(): void;
  /**
   * Reverses the order of the elements in the specified range.
   * @param start The zero-based starting index of the range to reverse.
   * @param count The number of elements in the range to reverse.
   * @remarks This method uses the {@link Array.prototype.reverse} method to reverse the elements.
   *
   * This method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  Reverse(start: number, count: number): void;
  /**
   * Sorts the elements in the entire {@link IList<T>} using the default comparer.
   * @remarks This method uses the {@link Array.prototype.sort} method to sort the elements.
   */
  Sort(): void;
  /**
   * Sorts the elements in the entire {@link IList<T>} using the specified {@link Comparison<T>}.
   * @param comparison The {@link Comparison<T>} to use when comparing elements.
   * @remarks This method uses the {@link Array.prototype.sort} method to sort the elements.
   */
  Sort(comparison: Comparison<T>): void;
  /**
   * Copies the elements of the {@link IList<T>} to a new array.
   * @returns An array containing copies of the elements of the {@link IList<T>}.
   * @remarks This method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  ToArray(): T[];
  /**
   * Sets the capacity to the actual number of elements in the {@link IList<T>}, if that number is less than 90 percent of current capacity.
   * @remarks This method can be used to minimize a collection's memory overhead if no new elements will be added to the collection.
   * The cost of reallocating and copying a large {@link IList<T>} can be considerable, however, so the {@link TrimExcess} method does nothing if the list is at more than 90 percent of capacity. This avoids incurring a large reallocation cost for a relatively small gain.
   *
   * This method is an O(_n_) operation, where _n_ is {@link Count}.
   *
   * To reset a {@link IList<T>} to its initial state, call the {@link Clear} method before calling the {@link TrimExcess} method. Trimming an empty {@link IList<T>} sets the capacity of the {@link IList<T>} to the default capacity.
   *
   * The capacity can also be set using the {@link Capacity} property.
   */
  TrimExcess(): void;
  /**
   * Determines whether every element in the {@link IList<T>} matches the conditions defined by the specified predicate.
   * @param match The {@link Predicate<T>} delegate that defines the conditions to check against the elements.
   * @returns `true` if every element in the {@link IList<T>} matches the conditions defined by the specified predicate; otherwise, `false`. If the list has no elements, the return value is `true`.
   * @remarks The {@link Predicate<T>} is a delegate to a method that returns `true` if the object passed to it matches the conditions defined in the delegate.
   * The elements of the current {@link IList<T>} are individually passed to the {@link Predicate<T>} delegate, and processing is stopped when the delegate returns `false` for any element. The elements are processed in order, and all calls are made on a single thread.
   *
   * This method is an O(_n_) operation, where _n_ is {@link Count}.
   */
  TrueForAll(match: Predicate<T>): boolean;
  /**
   * Returns a string that represents the current {@link IList<T>}.
   * @returns A string that represents the current {@link IList<T>}.
   * @remarks This method calls the {@link Array.prototype.toString} method to convert each element of the current {@link IList<T>} to its string representation, and then returns the concatenation of these strings.
   */
  ToString(): string;
  /**
   * Gets the element at the specified index.
   * @param index The index of the element to get (can be negative to specify a position relative to the end of the list)
   * @returns The element at the specified index.
   * @remarks This method is an O(_n_) operation, where _n_ is {@link index}.
   *
   * @throws `System.ArgumentOutOfRangeException` *index* is less than (-{@link Count}) or greater than or equal to {@link Count}.
   */
  ElementAt(index: number): T;
}
