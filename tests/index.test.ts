import { List } from "..";

describe("List tests", function () {
  test("List constructor with array passed", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.Count).toBe(5);
  });
  test("List constructor with no array passed", function () {
    const myList = new List<string>();
    expect(myList.Count).toBe(0);
  });
  test("List constructor with number passed", function () {
    const myList = new List<string>(5);
    expect(myList.Count).toBe(5);
  });
  test("List ToString method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.ToString()).toBe("ciao,mondo,come,va,?");
  });
  test("List ForEach method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    let counter = 0;
    myList.ForEach((x, index) => {
      expect(x).toBe(myList[index]);
      counter++;
    });
    expect(counter).toBe(5);
  });
  test("List Add method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    myList.Add("!");
    expect(myList.Count).toBe(6);
    expect(myList[5]).toBe("!");
  });
  test("List AddRange method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    myList.AddRange(["!", "!"]);
    expect(myList.Count).toBe(7);
    expect(myList[5]).toBe("!");
    expect(myList[6]).toBe("!");
  });
  test("List Clear method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    myList.Clear();
    expect(myList.Count).toBe(0);
  });
  test("List Contains method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.Contains("ciao")).toBe(true);
    expect(myList.Contains("mondo")).toBe(true);
    expect(myList.Contains("come")).toBe(true);
    expect(myList.Contains("va")).toBe(true);
    expect(myList.Contains("?")).toBe(true);
    expect(myList.Contains("!")).toBe(false);
  });
  test("List Exists method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.Exists((x) => x === "ciao")).toBe(true);
    expect(myList.Exists((x) => x === "mondo")).toBe(true);
    expect(myList.Exists((x) => x === "come")).toBe(true);
    expect(myList.Exists((x) => x === "va")).toBe(true);
    expect(myList.Exists((x) => x === "?")).toBe(true);
    expect(myList.Exists((x) => x === "!")).toBe(false);
  });
  test("List Find method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.Find((x) => x === "ciao")).toBe("ciao");
    expect(myList.Find((x) => x === "mondo")).toBe("mondo");
    expect(myList.Find((x) => x === "come")).toBe("come");
    expect(myList.Find((x) => x === "va")).toBe("va");
    expect(myList.Find((x) => x === "?")).toBe("?");
    expect(myList.Find((x) => x === "!")).toBe(undefined);
  });
  test("List FindAll method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    const myNewList = myList.FindAll((x) => x.length > 3);
    expect(myNewList.Count).toBe(3);
    expect(myNewList[0]).toBe("ciao");
    expect(myNewList[1]).toBe("mondo");
    expect(myNewList[2]).toBe("come");
  });
  test("List FindIndex method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.FindIndex((x) => x === "ciao")).toBe(0);
    expect(myList.FindIndex((x) => x === "mondo")).toBe(1);
    expect(myList.FindIndex((x) => x === "come")).toBe(2);
    expect(myList.FindIndex((x) => x === "va")).toBe(3);
    expect(myList.FindIndex((x) => x === "?")).toBe(4);
    expect(myList.FindIndex((x) => x === "!")).toBe(-1);
  });
  test("List FindLast method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.FindLast((x) => x === "ciao")).toBe("ciao");
    expect(myList.FindLast((x) => x === "mondo")).toBe("mondo");
    expect(myList.FindLast((x) => x === "come")).toBe("come");
    expect(myList.FindLast((x) => x === "va")).toBe("va");
    expect(myList.FindLast((x) => x === "?")).toBe("?");
    expect(myList.FindLast((x) => x === "!")).toBe(undefined);
  });
  test("List FindLastIndex method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.FindLastIndex((x) => x === "ciao")).toBe(0);
    expect(myList.FindLastIndex((x) => x === "mondo")).toBe(1);
    expect(myList.FindLastIndex((x) => x === "come")).toBe(2);
    expect(myList.FindLastIndex((x) => x === "va")).toBe(3);
    expect(myList.FindLastIndex((x) => x === "?")).toBe(4);
    expect(myList.FindLastIndex((x) => x === "!")).toBe(-1);
  });
  test("List GetRange method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    const myNewList = myList.GetRange(1, 3);
    expect(myNewList.Count).toBe(3);
    expect(myNewList[0]).toBe("mondo");
    expect(myNewList[1]).toBe("come");
    expect(myNewList[2]).toBe("va");
  });
  test("List IndexOf method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.IndexOf("ciao")).toBe(0);
    expect(myList.IndexOf("mondo")).toBe(1);
    expect(myList.IndexOf("come")).toBe(2);
    expect(myList.IndexOf("va")).toBe(3);
    expect(myList.IndexOf("?")).toBe(4);
    expect(myList.IndexOf("!")).toBe(-1);
  });
  test("List Insert method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    myList.Insert(2, "!");
    expect(myList.Count).toBe(6);
    expect(myList[2]).toBe("!");
    expect(myList[3]).toBe("come");
  });
  test("List InsertRange method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    myList.InsertRange(2, ["!", "!"]);
    expect(myList.Count).toBe(7);
    expect(myList[2]).toBe("!");
    expect(myList[3]).toBe("!");
    expect(myList[4]).toBe("come");
  });
  test("List LastIndexOf method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    expect(myList.LastIndexOf("ciao")).toBe(0);
    expect(myList.LastIndexOf("mondo")).toBe(1);
    expect(myList.LastIndexOf("come")).toBe(5);
    expect(myList.LastIndexOf("va")).toBe(3);
    expect(myList.LastIndexOf("?")).toBe(4);
    expect(myList.LastIndexOf("!")).toBe(-1);
  });
  test("List Remove method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    myList.Remove("ciao");
    expect(myList.Count).toBe(5);
    expect(myList[0]).toBe("mondo");
    expect(myList[1]).toBe("come");
    expect(myList[2]).toBe("va");
    expect(myList[3]).toBe("?");
    expect(myList[4]).toBe("come");
  });
  test("List RemoveAll method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    myList.RemoveAll((x) => x === "come");
    expect(myList.Count).toBe(4);
    expect(myList[0]).toBe("ciao");
    expect(myList[1]).toBe("mondo");
    expect(myList[2]).toBe("va");
    expect(myList[3]).toBe("?");
  });
  test("List RemoveAt method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    myList.RemoveAt(2);
    expect(myList.Count).toBe(5);
    expect(myList[0]).toBe("ciao");
    expect(myList[1]).toBe("mondo");
    expect(myList[2]).toBe("va");
    expect(myList[3]).toBe("?");
    expect(myList[4]).toBe("come");
  });
  test("List RemoveRange method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    myList.RemoveRange(2, 2);
    expect(myList.Count).toBe(4);
    expect(myList[0]).toBe("ciao");
    expect(myList[1]).toBe("mondo");
    expect(myList[2]).toBe("?");
    expect(myList[3]).toBe("come");
  });
  test("List Reverse method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    myList.Reverse();
    expect(myList.Count).toBe(6);
    expect(myList[0]).toBe("come");
    expect(myList[1]).toBe("?");
    expect(myList[2]).toBe("va");
    expect(myList[3]).toBe("come");
    expect(myList[4]).toBe("mondo");
    expect(myList[5]).toBe("ciao");
  });
  test("List Sort method", function () {
    const myList = new List<number>([4, 5, 2, 6]);
    myList.Sort();
    expect(myList.Count).toBe(4);
    expect(myList[0]).toBe(2);
    expect(myList[1]).toBe(4);
    expect(myList[2]).toBe(5);
    expect(myList[3]).toBe(6);
    myList.Sort((a, b) => b - a);
    expect(myList.Count).toBe(4);
    expect(myList[0]).toBe(6);
    expect(myList[1]).toBe(5);
    expect(myList[2]).toBe(4);
    expect(myList[3]).toBe(2);
  });
  test("List ToArray method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    const myArray = myList.ToArray();
    expect(myArray.length).toBe(6);
    expect(myArray[0]).toBe("ciao");
    expect(myArray[1]).toBe("mondo");
    expect(myArray[2]).toBe("come");
    expect(myArray[3]).toBe("va");
    expect(myArray[4]).toBe("?");
    expect(myArray[5]).toBe("come");
    expect(myArray instanceof Array).toBe(true);
  });
  test("List TrueForAll method", function () {
    const myList = new List<string>([
      "ciao",
      "mondo",
      "come",
      "va",
      "?",
      "come",
    ]);
    const allStrings = myList.TrueForAll((x) => typeof x === "string");
    expect(allStrings).toBe(true);
  });
  test("List ElementAt method", function () {
    const myList = new List<string>(["ciao", "mondo", "come", "va", "?"]);
    expect(myList.ElementAt(0)).toBe("ciao");
    expect(myList.ElementAt(1)).toBe("mondo");
    expect(myList.ElementAt(2)).toBe("come");
    expect(myList.ElementAt(3)).toBe("va");
    expect(myList.ElementAt(4)).toBe("?");
    expect(myList.ElementAt(-1)).toBe("?");
    expect(myList.ElementAt(-2)).toBe("va");
    expect(myList.ElementAt(-3)).toBe("come");
    expect(myList.ElementAt(-4)).toBe("mondo");
    expect(myList.ElementAt(-5)).toBe("ciao");
    try {
      myList.ElementAt(-6);
    } catch (e) {
      expect(e instanceof RangeError).toBe(true);
      expect((e as RangeError).message).toBe("Index out of range, max was 4, min was -5, but -6 was given");
    }
    try {
      myList.ElementAt(5);
    } catch (e) {
      expect(e instanceof RangeError).toBe(true);
      expect((e as RangeError).message).toBe("Index out of range, max was 4, min was -5, but 5 was given");
    }
  });
});
