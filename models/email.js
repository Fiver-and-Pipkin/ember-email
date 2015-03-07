Email.Email = DS.Model.extend({
  foldername: DS.attr(),
  folderphoto: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});



Email.Email.FIXTURES = [
  { id: 1, foldername: 'Inbox', folderphoto: '<img src="https://community.constantcontact.com/t5/image/serverpage/image-id/13795iD0C9CFC05892F0AE?v=mpbl-1">' },
  { id: 2,  foldername: 'Sent', folderphoto: '<img src="http://academics.umw.edu/dtlt/files/2012/02/sent-folder.png">'}
];
