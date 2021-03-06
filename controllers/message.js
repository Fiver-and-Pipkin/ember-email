Email.MessageController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
    },

    delete: function(message) {
      if (confirm("Are you sure?")) {
      message.destroyRecord();
      this.transitionToRoute('folders');
      }
    }
  }
});
