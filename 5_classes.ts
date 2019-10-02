class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
   return `[${name}]: Typescript version ins: ${this.version} `
  }
}

// class Car {
//   readonly model: string
//   readonly amountOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly amountOfWheels: number = 4

  constructor(readonly model: string) {}
}

// =====================
// Modificators