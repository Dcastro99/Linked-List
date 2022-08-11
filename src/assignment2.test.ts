import { LinkedList } from "./LinkedList";

describe("Linked List", () => {
  it("can append an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.append("Pippin");
    list.insert("Merry");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );

  });

  it("can insert before a node in the middle", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertBefore("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual("{ Merry } -> { Pippin } -> { Sam } -> { Frodo } -> NULL");

  });

  it("can insert after node in the middle", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertAfter("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Pippin } -> { Frodo } -> NULL"
    );

  });

  it("can append musltiple elements", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.append("Sam");
    list.append("Pippin");
    list.insert("Merry");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Frodo } -> { Sam } -> { Pippin } -> NULL"
    );

  });

  it("can insert at the beggining of a list", () => {
    const list = new LinkedList<string>();
    //existing list
    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    //to be added
    list.insert("Pippin");

    const str = list.toString();
    expect(str).toEqual("{ Pippin } -> { Merry } -> { Sam } -> { Frodo } -> NULL");
  });

  it("can insert after last element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.insertAfter("Frodo", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );

  });

});
