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

// Email.Documenter.reopenClass({
//   FIXTURES: [
//     { id: 1, foldername: 'Inbox', folderphoto: '<img src="https://community.constantcontact.com/t5/image/serverpage/image-id/13795iD0C9CFC05892F0AE?v=mpbl-1">' },
//     { id: 2,  foldername: 'Sent', folderphoto: '<img src="http://academics.umw.edu/dtlt/files/2012/02/sent-folder.png">'}
//   ]
// });
