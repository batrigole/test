
class AnomalyDetector {
  constructor() {
    this.history = [];
  }

  process(value) {
    this.history.push(value);
    if (this.history.length > 50) this.history.shift();

    if (this.history.length < 10) return null;

    const mean = this.history.reduce((a,b)=>a+b,0)/this.history.length;
    const variance = this.history.reduce((sum,v)=>sum+Math.pow(v-mean,2),0)/this.history.length;
    const stdDev = Math.sqrt(variance);

    const z = (value - mean) / stdDev;
    if (Math.abs(z) > 2.5) {
      return { anomaly: true, value, mean, stdDev };
    }

    return null;
  }
}

module.exports = new AnomalyDetector();
