class Planet {
  constructor(radius, distance, orbitspeed, angle) {
    this.radius = radius;
    this.distance = distance;
    this.orbitSpeed = orbitspeed;
    this.angle = angle;
    this.planets = [];
  }

  orbit() {
    this.angle += this.orbitSpeed;

    for (let i in this.planets) {
      this.planets[i].orbit();
    }
  }

  createMoon(quantity, level) {
    let i = 0;
    for (i = 0; i < quantity; i++) {
      this.planets.push(new Planet(random(15, 25)/level, random(120, 250) / level, random(-0.03, 0.03), random(TWO_PI)));

      if (level < 2) {
        let num = Math.floor(random(0, 2));
        this.planets[i].createMoon(num, level + 1);
      }
    }
  }

  show() {
    push();

    fill(180, 180, 180, 100);
    rotate(this.angle);
    translate(this.distance, 0);
    noStroke();
    circle(0, 0, this.radius * 2);

    for (let i in this.planets) {
      this.planets[i].show();
    }

    pop();
  }
}