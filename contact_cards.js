
Contacts = new Mongo.Collection("contacts");

if (Meteor.isClient) {
  
  Template.body.helpers({
    contacts : function() {
      return Contacts.find({});
    }
  });

  Template.body.events({
    "submit #new-contact": function(event){

      console.log(event);
      var first_name = event.target.first_name.value;
      var last_name = event.target.last_name.value;
      var birthday = event.target.birthday.value;
      var website = event.target.website.value;
      var email = event.target.email.value;

      console.log("Inserting new contact.");
      Contacts.insert({
        "first_name": first_name,
        "last_name": last_name,
        "birthday": birthday,
        "website": website,
        "email": email,
      });

      console.log("New contact [" + first_name + " " + last_name + "] was added to the database.")

      event.target.first_name = "";
      event.target.last_name = "";

      return false;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
