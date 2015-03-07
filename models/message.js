Email.Message = DS.Model.extend({
  address: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),

  email: DS.belongsTo('email', {async: true})
});


Email.Message.FIXTURES = [
  {id: 1, address: 'mom@irs.gov', body: 'Why do you never call?' },
  {id: 2,  address: 'susie@callme.org', body: 'You better get tested'}
];
