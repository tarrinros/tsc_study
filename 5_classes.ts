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

class Animal {
  protected voice: string = ''
  public color: string = 'red'
  private go() {
    console.log('Go!')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
    this.go = 'go!' // only inside the ancestor class
  }
}

const cat = new Cat()
cat.go // only inside the ancestor class
cat.color // method with for uotside handling
cat.voice // only for use in ancestor and heir classes

// ==========================
// Abstract classes

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info method';
  }
}