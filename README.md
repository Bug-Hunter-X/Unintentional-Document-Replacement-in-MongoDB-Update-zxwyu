# Unintentional Document Replacement in MongoDB Update

This repository demonstrates a common error when using the `updateOne` method in MongoDB's Node.js driver. The issue arises from incorrectly using the `$set` operator, which, if not used correctly, can accidentally replace the entire document instead of updating a specific field.

## Bug Description:
The provided JavaScript code attempts to update the `age` field of a document in a MongoDB collection. However, due to an incorrect implementation of the `$set` operator, the entire document is replaced instead of the `age` field being updated.

## Bug Solution:
The solution showcases the correct usage of the `$set` operator within the `updateOne` method, ensuring only the specified field is updated and the rest of the document remains unchanged.  The corrected solution uses the `$set` operator within an update document.