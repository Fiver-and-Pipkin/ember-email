Email.Router.map(function() {
  this.resource('folders', {path: '/'});
  this.resource('emails', {path: 'folders/:emails_id'});
  this.resource('messages');
  this.resource('message', {path: 'messages/:message_id'});
});
