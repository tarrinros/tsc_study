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

const rect3 = {} as Rect;
// const rect4 = <Rect>{}; //deprecated
