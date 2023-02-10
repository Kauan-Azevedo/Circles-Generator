// class Nodes {
//   constructor() {}
//   element(id) {
//     return document.getElementById(id);
//   }

//   create(id, text, nodes) {
//     let el = this.element(id);
//     let node = document.createElement('div');
//     let txt = document.createTextNode(text);
//     node.style.width = '50px';
//     node.style.height = '50px';
//     node.style.border = '2px solid black';
//     node.style.borderRadius = '100%';
//     node.style.textAlign = 'center';
//     node.style.padding = '10px 5px';

//     node.style.position = 'absolute';
//     for (let i = 0; i <= nodes; i++) {
//       let posX = Math.floor(Math.random() * window.innerWidth);
//       let posY = Math.floor(Math.random() * window.innerHeight);

//       node.style.top = `${posX}px`;
//       node.style.left = `${posY}px`;
//     }

//     node.appendChild(txt);
//     el.appendChild(node);
//   }

//   multipleCreate(quantity, id, text) {
//     for (let i = 0; i <= quantity; i++) {
//       this.create(id, text, quantity);
//     }
//   }
// }

// const nodes = new Nodes();
// nodes.multipleCreate(10, 'node-container', 'node');

const nodesList = [];

class Nodes {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.root = document.getElementById('node-container');
  }

  generate(quantity) {
    for (let i = 0; i < quantity; i++) {
      const raio = Math.floor(Math.random() * 60 + 60);
      const nome = `Node${i}`;
      let node = { id: i, name: nome, size: raio };
      nodesList.push(node);
    }
  }

  setPosition() {
    for (let node of nodesList) {
      node.x = Math.floor(Math.random() * this.width) + 1;
      node.y = Math.floor(Math.random() * this.height) + 1;
    }
  }

  checkNodes() {
    for (let node of nodesList) {
      console.log(node);
    }
  }

  renderNode(nodes) {
    let el = this.root;
    for (let nod of nodes) {
      let node = document.createElement('div');
      node.style.minWidth = `${nod.size}px`;
      node.style.minHeight = `${nod.size}px`;
      node.style.fontSize = '14px';
      node.style.border = '1px solid black';
      node.style.borderRadius = '100%';
      node.style.textAlign = 'center';
      node.style.position = 'absolute';
      node.style.display = 'flex';
      node.style.flexDirection = 'column';
      node.style.alignItems = 'center';
      node.style.justifyContent = 'center';

      let posX =
        nod.x - nod.size <= 0
          ? nod.x + nod.size
          : nod.x - nod.size && nod.x + nod.size >= nod.x
          ? nod.x - nod.size
          : nod.x + nod.size;
      let posY =
        nod.y - nod.size <= 0
          ? nod.y + nod.size
          : nod.y - nod.size && nod.y + nod.size >= nod.y
          ? nod.y - nod.size
          : nod.y + nod.size;

      node.style.left = `${posX}px`;
      node.style.top = `${posY}px`;
      let nodeName = document.createTextNode(nod.name);
      node.appendChild(nodeName);
      el.appendChild(node);
    }
  }
}


