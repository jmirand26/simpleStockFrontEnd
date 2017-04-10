import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //return Ember.$.getJSON('http://localhost:8090/stockhistory/GOOGL');
    //return Ember.$.getJSON(`http://localhost:8090/stockhistory/${params.Symbol}`);
    let url = 'http://localhost:8090/stockhistory/' + params.Symbol;
    return Ember.$.getJSON(url);
  }
});
