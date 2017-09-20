class AAA {
  constructor(a) {
    this.a = a;
  }

  get() {
    return this.a + 1;
  }
}



function output() {
  return new AAA(1).get();

}


window.onload = () => {
  document.getElementById('root').innerText = output();
};
