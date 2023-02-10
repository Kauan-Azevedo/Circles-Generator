const circlesList = [];
class Circles {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.root = document.getElementById('circle-container');
  }

  generate(quantity) {
    for (let i = 0; i < quantity; i++) {
      const raio = Math.floor(Math.random() * 60 + 60);
      const nome = `Circle${i}`;
      let circle = { id: i, name: nome, size: raio };
      circlesList.push(circle);
    }
  }

  setPosition() {
    for (let circle of circlesList) {
      circle.x = Math.floor(Math.random() * this.width) + 1;
      circle.y = Math.floor(Math.random() * this.height) + 1;
    }
  }

  checkNodes() {
    for (let circle of circlesList) {
      console.log(circle);
    }
  }

  renderNode(circles) {
    let el = this.root;
    for (let circ of circles) {
      let circle = document.createElement('div');
      circle.style.minWidth = `${circ.size}px`;
      circle.style.minHeight = `${circ.size}px`;
      circle.style.fontSize = '14px';
      circle.style.border = '1px solid black';
      circle.style.borderRadius = '100%';
      circle.style.textAlign = 'center';
      circle.style.position = 'absolute';
      circle.style.display = 'flex';
      circle.style.flexDirection = 'column';
      circle.style.alignItems = 'center';
      circle.style.justifyContent = 'center';

      let posX =
        circ.x - circ.size <= 0
          ? circ.x + circ.size
          : circ.x - circ.size && circ.x + circ.size >= circ.x
          ? circ.x - circ.size
          : circ.x + circ.size;
      let posY =
        circ.y - circ.size <= 0
          ? circ.y + circ.size
          : circ.y - circ.size && circ.y + circ.size >= circ.y
          ? circ.y - circ.size
          : circ.y + circ.size;

      circle.style.left = `${posX}px`;
      circle.style.top = `${posY}px`;
      let circleName = document.createTextNode(circ.name);
      circle.appendChild(circleName);
      el.appendChild(circle);
    }
  }
}

const circleGenerator = new Circles();
circleGenerator.generate(30);
circleGenerator.setPosition();
circleGenerator.renderNode(circlesList);

// circleGenerator.checkNodes();
