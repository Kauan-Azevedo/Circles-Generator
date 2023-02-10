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









}

