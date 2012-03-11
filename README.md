#ContactME
ContactME is an application that helps you keep track of your contacts. You can sort them in categories such as family, friends, etc. You can add new contacts, edit and delete them. As an added feature you can quickly search for the contact. 

The application uses backbone.js and require.js as the anchors through the entire application. It also uses jqurey, order.js, underscore.js and localstorage.

The app is build by Martin Cedeskog.

##Use the application
By downloading the code and run index.html, the application will run and all functionality will work without having to do anything further.

##AppFiles
boilerplate.js - is a template that is the basis for each new. js file.

main.js - is the file that loads all the files and starts the application.

router.js - is the file that handles the routing of the application.

app.js - start router.js


##Views
views/contact/contactView.js - render a view for a contact model. Connects events to delete, and update contacts. also contains functionality to delete a contact.

views/contact/contactCollectionView.js - renders a new contactView for each contact item in contact collection.

views/contact/createContactView.js - provides the functionality and print the form in order to make new contacts and edit contacts. It also handles the functionality to search a contact's name.

views/category/categoryView.js -  render a view for a category model.

views/category/categoryCollectionView.js - renders a new categoryView for each contact item in categories collection.

##Models
models/contact.js - keep the default values ​​for the contact and validation contact.

models/category.js - keep the default values ​​for the category.

##Collections
collection/contacts.js - is the collection of contacts, creating a localstorage to store data and keep the functionality to find a contact by name.

collection/categories.js - is a collection of categories, creating a local storage to store data, and creates four default (hardcoded) categories.


##Examples of new functionality to add
1. CRUD functionality for categories.
2. Sort contacts by categories.
3. Sort contacts by alphabetical order.