import { List } from  "../src/index";
const ciao = new List<string>(["ciao", "mondo", "come", "va", "?"]);
console.log(ciao.Count);
ciao.ForEach((x) => console.log(x));
console.log(ciao.ToString());
console.log(ciao);
console.log(ciao.ToArray());
console.log(ciao.Contains("ciao"));