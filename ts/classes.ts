class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length > 0) {
      this._name = name[0].toUpperCase() + name.slice(1);
    }
  }
}

const justin = new Person("Justin Cook", 22);

justin.name = "justin cook";

console.log(justin.name);
