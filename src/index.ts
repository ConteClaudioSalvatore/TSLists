import * as SystemInterface from "./interfaces";
import { IList } from './interfaces/index';
import * as SystemImplementation from "./implementation";
declare global {
  interface IList<T> extends SystemInterface.IList<T> { }
  class List<T> extends SystemImplementation.List<T> { }
}