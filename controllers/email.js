Email.EmailController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var message = this.store.createRecord('message', {
        address: this.get('address'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      message.save();

      var email = this.get('model');
      email.get('messages').pushObject(message);
      email.save();

      this.set('address', null),
      this.set('subject', null),
      this.set('body', null)
    },

    delete: function(message) {
      if (confirm("Are you sure?")) {
      message.destroyRecord();
      var email = this.get('model');
      email.get('messages').removeObject(message);
      }
    }
  }
});
