Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('email', {path: 'folders/:email_id'});
  this.resource('messages');
  this.resource('message', {path: 'messages/:message_id'});
});
