Email.Email = DS.Model.extend({
  foldername: DS.attr(),
  folderphoto: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});
