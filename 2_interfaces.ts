//interfaces are used for type of Object fields
interface Rect {
  readonly id: string, // only for read
  color?: string, //optional field by '?'
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
};

const rect2: Rect = {
  id: '1235',
  size: {
    width: 2345,
    height: 4
  }
};
rect2.color = 'white';
// rect2.id = '2343';

const rect3 = {} as Rect;
// const rect4 = <Rect>{}; //deprecated

//==============================
// Interfaces inheritance

interface RectWithArea extends Rect {
  getArea: () => number // arrow function of number type
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.weight * this.size.height
  }
};

//===================

interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

//===================
//Array of interface keys

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px, solid, black',
  marginTop: '2px',
  borderRadius: '2px'
}