const contact = require('./contacts');
const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const data = await contact.listContacts();
      console.table(data);
      break;

    case 'get':
      const contactById = await contact.getContactById(id);
      console.log(contactById);
      break;

    case 'add':
      const addContactResult = await contact.addContact(name, email, phone);
      console.log(addContactResult);
      break;

    case 'remove':
      const deleteContact = await contact.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);