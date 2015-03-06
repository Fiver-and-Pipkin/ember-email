Email.Message = DS.Model.extend({
  address: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),

  email: DS.belongsTo('email', {async: true})
});
