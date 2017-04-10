import DS from 'ember-data';

export default DS.Model.extend({
  Symbol: DS.attr('string'),
  Exchange: DS.attr('string'),
  industry: DS.attr('string'),
  IPOyear: DS.attr('string'),
  LastSale: DS.attr('string'),
  MarketCap: DS.attr('string'),
  Name: DS.attr('string'),
  Sector: DS.attr('string'),
  SummaryQuote: DS.attr('string')


});
