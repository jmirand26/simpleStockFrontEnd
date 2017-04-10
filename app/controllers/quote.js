import Ember from 'ember';

export default Ember.Controller.extend({
  numberData: Ember.computed('model', function(){
    var data = {
      labels: this.get('model.quotes').mapBy('date'),
      datasets: [
        {
          label: "Average Prices",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.get('model.quotes').mapBy('avg'),
          spanGaps: false,
        }
      ]
    };
    return data;
  }),

  actions: {
  searchCompany(newValue) {
    console.log(newValue);
  }
}

});
