import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('quote');
  this.route('stock');
  this.route('quote', { path: '/quote/:Symbol' });  
  /*this.route('stocks', function() {
    this.route('quote', {path: '/quote/:Symbol'});*/
});

export default Router;
