const Trash = require('../trash');
const { userStore } = require('../../redux/user-store');

module.exports = async function softDelete(schema) {
  schema.post(
    ['findByIdAndRemove', 'findOneAndRemove', 'findByIdAndDelete', 'findOneAndDelete'],
    async function (doc) {
      const user = userStore.getState();
      const trashDocument = new Trash({
        type: doc?.constructor.modelName,
        data: doc?.toObject(),
        deletedBy: user,
      });

      try {
        await trashDocument.save();
      } catch (error) {
        console.error('Error saving document to Trash:', error);
      }
    }
  );
};
