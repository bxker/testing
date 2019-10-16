function storage() {
  let hash = "";
  for (let i = 0; i < 15; i++) {
    hash += String.fromCharCode(Math.floor(Math.random() * 74) + 48);
  }
  let myStorage = {};
  return {
    getStorageHash: function() {
      return hash;
    },
    addToStorage: function(name, value) {
      if (myStorage[name] !== undefined) {
        throw new Error(
          "Name already exists. Did you want to update or delete it?"
        );
      }
      myStorage[name] = value;
      return myStorage;
    },
    updateStorage: function(name, value) {
      if (myStorage[name] === undefined) {
        throw new Error("There is no slot with that name. Did you misspell?");
      }
      myStorage[name] = value;
      return myStorage;
    },
    deleteStorage: function(name) {
      if (myStorage[name] === undefined) {
        throw new Error("There is no slot with that name. Did you misspell?");
      }
      delete myStorage[name];
      return myStorage;
    },
    getStorage: function() {
      return myStorage;
    }
  };
}

module.exports = storage;
