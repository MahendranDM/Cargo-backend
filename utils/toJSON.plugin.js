/**
 * A Mongoose plugin to transform the JSON and Object representation of documents.
 * It hides the internal `_id`, `__v` and any `password` fields from API responses
 * by removing them during serialization.
 * 
 * @param {import('mongoose').Schema} schema 
 */
module.exports = (schema) => {
  const transform = (doc, ret) => {
    // Delete MongoDB internal identifiers, virtual IDs, and version keys
    delete ret._id;
    delete ret.id;
    delete ret.__v;
    // Delete passwords if present (in case of user models)
    delete ret.password;
    return ret;
  };

  // Configure schema options to automatically apply the transform
  schema.set("toJSON", { 
    transform, 
    virtuals: true 
  });
  
  schema.set("toObject", { 
    transform, 
    virtuals: true 
  });
};
