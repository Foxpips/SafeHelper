export const Greeter = (name: string) => `Hello ${name}`;

export const safeMap = function(array: any[], action: (args: any) => any) {
  try {
    return array.map(x => action(x));
  } catch (e) {
    console.log(e.message);
    return array;
  }
};

// @ts-ignore
String.prototype.cool = function() {
  return this + " so cool";
};
