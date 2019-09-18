/* eslint-disable */

let p5

export function main (_p5) {
  p5 = _p5

  const canvasContainer = document.querySelector('#pjs')

  // Important variables
  const numOfWaves = 10
  const amplitude = 20
  const waves = []

  p5.setup = _ => {
    const canvas = p5.createCanvas(window.innerWidth, 300, p5.P2D)
    canvas.parent('pjs')

    for (let i = 0; i < numOfWaves; i++) {
      let wave = new Wave(
        i * 15,
        i * 5
      );
      
      // assign amplitude & period
      wave.init([{
        amp: p5.random(17 , 20),
        period: 300
      }, {
        amp: p5.random(17 , 20),
        period: amplitude
      }]);
      
      waves.push(wave)
    }
  }

  function Wave(theta, y_off){
    let n_vertices = 10
    let w
    let maxwaves = 3
    let stroke_color = [255, 255, 255, 100]
    let stroke_width = 2
    let amplitude = new Array(maxwaves)
    let dx = new Array(maxwaves)
    let yvalues

    function init (waves_param) {
      
      // console.log(theta, y_off);
      w = p5.width + 360
      theta = (theta/180)* p5.PI

      amplitude[0] = waves_param[0].amp
      let period = waves_param[0].period // Num pixels before wave repeats
      dx[0] = (p5.TWO_PI / period) * (w/n_vertices)

      amplitude[1] = waves_param[1].amp
      period = waves_param[1].period // Num pixels before wave repeats
      
      dx[1] = (p5.TWO_PI / period) * (w/n_vertices)

      amplitude[2] = 20
      period = 2000 // Num pixels before wave repeats
      dx[2] = (p5.TWO_PI / period) * (w/n_vertices)

      yvalues = new Array(n_vertices)
    }
    
    function calcWave() {
      
      theta += 0.015
      // Set all height values to zero
      for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = 0
      }
    
      // Accumulate wave height values
      for (let j = 0; j < maxwaves; j++) {
        let x = theta
        for (let i = 0; i < yvalues.length; i++) {
          // Every other wave is cosine instead of sine
          yvalues[i] += p5.sin(x)*amplitude[j]
          x+=dx[j]
        }
      }
    }
    
    function renderWave() {
      
      p5.strokeWeight(stroke_width)
      p5.stroke(stroke_color)
      p5.drawingContext.setLineDash([0.5, 4])
      p5.noFill()
      p5.beginShape()
      p5.vertex(-100, -5)
      for (let x = 0; x < yvalues.length; x++) {
        p5.curveVertex((x-1)*(w/n_vertices), p5.height/2+yvalues[x] + y_off + stroke_width)
      }
      p5.vertex(p5.width + 100, -5)
      p5.endShape(p5.CLOSE);
      
    }

    return {
      init: init,
      calcWave: calcWave,
      renderWave: renderWave
    }
  };

  p5.draw = _ => {
    p5.clear()
    for (let i=0; i < numOfWaves; i++) {
      waves[i].calcWave()
      waves[i].renderWave()
    }
  }
  
}
/* eslint-enable */
