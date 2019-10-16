const storage = require("../functions.js");

describe("Creating storage should be functional and smooth", () => {
  test("A new storage container should be creatable.", () => {
    expect(storage).not.toThrow();
  })

  test("Storage containers should create a storage hash.", () => {
    expect(storage().getStorageHash().length).toEqual(15);
  })
})

describe("Storage can be added to.", () => {
  let closure = storage();

  test("\"addToStorage\" returns our storage with the proper value added", () => {
    expect(closure.addToStorage("name", "Zack")).toEqual({name: "Zack"})
  })

  test("\"getStorage\" shows info has been added", () => {
    expect(closure.getStorage()).toEqual({name: "Zack"})
  })

  test("\"addToStorage\" throws an error when you try to add a name that already exists.", () => {
    expect(() => {
      closure.addToStorage("name", "Josh");
    }).toThrow("Name already exists. Did you want to update or delete it?");
  })
})