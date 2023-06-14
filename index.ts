import * as SystemInterface from "./src/interfaces";
import * as SystemImplementation from "./src";
declare global {
  interface IList<T> extends SystemInterface.IList<T> { }
  class List<T> extends SystemImplementation.List<T> { }
}