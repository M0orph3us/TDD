export default class Cube {
  constructor(lgCote) {
    this.lgCote = lgCote;
  }

  perimetre() {
    return 12 * this.lgCote;
  }

  aireFace() {
    return this.lgCote * this.lgCote;
  }

  airCube() {
    return 6 * (this.lgCote * this.lgCote);
  }

  volumeCube() {
    return Math.pow(this.lgCote, 3);
  }
}
