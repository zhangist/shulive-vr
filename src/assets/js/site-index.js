const sketch = (obj) => {
  const p = obj;
  let canvas;
  // let ctx;
  const arr = [];
  const walkerCount = 500;
  let t;

  class Walker {
    constructor() {
      this.pos = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.vel = p.createVector(0, 0);
      this.radius = 4;
    }
    applyForce(...force) {
      this.acc.add(...force);
    }
    update() {
      this.vel.add(this.acc);
      this.acc.set(0, 0);
      this.vel.mult(0.99);
      this.pos.add(this.vel);
    }
    edges() {
      if (this.pos.x < -p.width / 2) {
        this.pos.x += p.width;
      } else if (this.pos.x > p.width / 2) {
        this.pos.x -= p.width;
      }
      if (this.pos.y < -p.height / 2) {
        this.pos.y += p.height;
      } else if (this.pos.y > p.height / 2) {
        this.pos.y -= p.height;
      }
    }
    draw() {
      p.ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
  }

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    // ctx = canvas.drawingContext;

    p.colorMode(p.HSB);

    for (let i = 0; i < walkerCount; i += 1) {
      const w = new Walker();
      w.pos.set(0, (-p.height / 5) * 2);
      w.applyForce(0, 3);
      arr.push(w);
    }
  };

  p.draw = () => {
    // background(0);
    const {
      width,
      height,
      PI,
      TAU,
    } = p;

    p.image(canvas, -4, 2, width + 8, height + 4);

    p.noStroke();
    p.fill(0, 0.05);
    p.rect(0, 0, width, height);

    p.translate(width / 2, height / 2);

    t = Date.now() / 60;

    // let h = cos(t / 40) * 30 + 210;
    // fill(h, 255, 255, 1);
    arr.forEach((n) => {
      // fill((h + i / 30) % 360, 255, 255, 1);
      const r = p.random(0.06, 0.1);
      n.applyForce(p5.Vector.random2D().mult(r));
      // let d = n.pos.magSq();
      const h = (((n.pos.heading() + PI) / TAU) * 360) + t;
      p.fill(h % 360, 255, 255, 1);
      n.applyForce(n.pos.copy().rotate(PI).limit(0.002));
      n.draw();
      n.update();
      n.edges();
    });
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch, window.document.getElementById('p5container'));
