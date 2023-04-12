const keys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
}

export const encrypt = text => {
  const code = { e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat' };
    Object
      .entries(code)
      .forEach(([key, value]) => {
        text = text.split(key).join(value)
      });
    console.log(text)
    return text;
}

export const decrypt = text => {
  const code = { enter: 'e', imes: 'i', ai: 'a', ober: 'o', ufat: 'u' };
    Object
      .entries(code)
      .forEach(([key, value]) => {
        text = text.split(key).join(value)
      });
    console.log(text)
    return text;
}
