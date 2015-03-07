Email.FoldersController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newFolder = this.store.createRecord('email', {
        foldername: this.get('foldername'),
        folderphoto: this.get('folderphoto')
      });
      newFolder.save();

      this.set('foldername', null),
      this.set('folderphoto', null)
    },

    delete: function(email) {
      if (confirm("Are you sure?")) {
      email.destroyRecord();
      }
    }
  }
});
