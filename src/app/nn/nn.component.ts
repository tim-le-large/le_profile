import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nn',
  templateUrl: './nn.component.html',
  styleUrls: ['./nn.component.scss']
})
export class NnComponent implements OnInit {


  input = [[120, 60], [200, 30], [275, 65], [260, 140], [240, 180], [220, 150], [130, 140], [100, 100], [160, 110], [180, 70], [230, 110]];
  durationTime = 3;

  constructor() {
    this.input.forEach(element => {
      element[1] += 10;
    });

  }

  ngOnInit(): void {

    const svg = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
    svg.setAttribute(`version`, `1.1`);
    svg.setAttribute(`viewBox`, `0 0 400 400`);
    let image = document.createElementNS(`http://www.w3.org/2000/svg`, `image`);
    image.setAttribute("href", "./assets/head.png")
    image.setAttribute("height", "400")
    image.setAttribute("width", "400")
    image.setAttribute("y", "0")
    svg.appendChild(image)


    this.connectCircles(svg, 0, 1)
    this.connectCircles(svg, 1, 2)
    this.connectCircles(svg, 2, 3)
    this.connectCircles(svg, 3, 4)
    this.connectCircles(svg, 3, 5)
    this.connectCircles(svg, 4, 5)
    this.connectCircles(svg, 5, 6)
    this.connectCircles(svg, 6, 7)
    this.connectCircles(svg, 7, 0)
    this.connectCircles(svg, 8, 0)
    this.connectCircles(svg, 8, 6)
    this.connectCircles(svg, 8, 5)
    this.connectCircles(svg, 8, 7)
    this.connectCircles(svg, 8, 9)
    this.connectCircles(svg, 9, 0)
    this.connectCircles(svg, 9, 1)
    this.connectCircles(svg, 9, 2)
    this.connectCircles(svg, 9, 10)
    this.connectCircles(svg, 10, 3)
    this.connectCircles(svg, 10, 2)
    this.connectCircles(svg, 10, 5)
    this.connectCircles(svg, 10, 8)


    this.input.forEach(input_n => {
      const circle = this.createCircle(input_n);
      circle.appendChild(this.createAnimationGrow(String(Math.random() * 8)))
      svg.appendChild(circle);
    });

    document.getElementById(`network`)?.appendChild(svg);
  }

  connectCircles(svg: SVGSVGElement, c1: number, c2: number) {
    const lineWidth = 1.5 + (Math.random());
    svg.appendChild(this.createLineBG(this.input[c1], this.input[c2], lineWidth))
    svg.appendChild(this.createLine(this.input[c1], this.input[c2], lineWidth))
  }

  getDistance(p1: number[], p2: number[]) {
    return Math.sqrt((Math.pow(p2[0] - p1[0], 2)) + (Math.pow(p2[1] - p2[0], 2)));
  }

  createAnimation(delay: string, duration: string, to: string) {
    const animation = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);

    animation.setAttribute(`attributeName`, `stroke-dashoffset`);
    animation.setAttribute(`begin`, String(Math.random() * 2));
    animation.setAttribute(`dur`, String(2 + Math.random() * 3));
    animation.setAttribute(`repeatCount`, `indefinite`);

    animation.setAttribute(`to`, to);
    return animation;
  }

  createAnimationGrow(delay: string) {
    const animation = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);

    animation.setAttribute(`attributeName`, `fill`);
    animation.setAttribute(`begin`, delay);
    animation.setAttribute(`dur`, `5`);
    animation.setAttribute(`repeatCount`, `indefinite`);
    // animation.setAttribute(`from`, `black`);
    animation.setAttribute(`values`, `white;#FFAE0C;#FFAE0C;white`);
    return animation;
  }


  createCircle(p1: number[]) {
    const shape = document.createElementNS(`http://www.w3.org/2000/svg`, `circle`);
    shape.setAttribute(`cx`, String(p1[0]));
    shape.setAttribute(`cy`, String(p1[1]));
    shape.setAttribute(`r`, `5`);
    shape.setAttribute(`class`, `mycircle`);
    shape.setAttribute(`fill`, `white`);
    shape.setAttribute(`stroke-width`, `1`);
    // shape.setAttribute(`stroke`, `white`);

    return shape;
  }


  createLine(p1: number[], p2: number[], lineWidth: number) {
    let polyline = document.createElementNS(`http://www.w3.org/2000/svg`, `polyline`);
    polyline.setAttribute(`points`, `${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`);
    polyline.setAttribute(`stroke-width`, String(lineWidth));
    // polyline.setAttribute(`class`, `path`);
    polyline.setAttribute(`stroke`, `#FFAE0C`);
    polyline.setAttribute(`stroke-linecap`, `round`);
    const distance = this.getDistance(p1, p2);

    polyline.setAttribute(`stroke-dasharray`, `${distance},${distance * 3}`);
    polyline.setAttribute(`stroke-dashoffset`, String(distance));
    polyline.appendChild(this.createAnimation(`0s`, `${this.durationTime}s`, String(-3 * distance)))
    return polyline;

  }

  createLineBG(p1: number[], p2: number[], lineWidth: number) {

    let polyline = document.createElementNS(`http://www.w3.org/2000/svg`, `polyline`);
    polyline.setAttribute(`points`, `${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`);
    polyline.setAttribute(`stroke`, `#FFAE0C `);
    polyline.setAttribute(`stroke-width`, String(lineWidth - 1));
    polyline.setAttribute(`stroke-linecap`, `round`);
    return polyline

  }

}
