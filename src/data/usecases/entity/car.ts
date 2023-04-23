export class Car {
  constructor( private name:string, private brand: string) {
  }

  run(sound:string):string {
    if (this.brand === 'lambo') {
      return `${this.name}says:${sound}!`
    }
    else if (this.brand === 'toyota') {
      return `${this.name}says:${sound}!`
    }
    else if (this.brand === 'mazda') {
      return `${this.name}says:${sound}!`
    }
    else if (this.brand === 'ferrari') {
      return `${this.name}says:${sound}!`
    }
    else {
      return `${this.name}says:${sound}raaar!`
    }
  }

  run2(sound:string):string {
    let runSound = '';

    switch (this.brand) {
      case 'lambo':
        runSound = `${this.name}says:${sound}!`;
        break;
      case 'toyota':
            runSound = `${this.name}says:${sound}!`;
            break;
      case 'mazda':
            runSound = `${this.name}says:${sound}!`;
            break;
      case 'ferrari':
            runSound = `${this.name}says:${sound}!`;
            break;
      default:
        runSound = `${this.name}says:${sound}defaultsound!`;
        break;
    }

    return runSound;
  }
}