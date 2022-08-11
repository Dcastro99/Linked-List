import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("Adds When k is greater than the length of the linked list", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    expect(()=> list.kthFromEnd(5)).toThrow();

  })


  it("Where the linked list is of a size 1", ()=> {
    const list = new LinkedList<string>();

    list.insert("Frodo");

    expect(list.kthFromEnd(0)).toEqual("Frodo");
  })

  it("k is equal to length of list", ()=> {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    expect(list.kthFromEnd(2)).toEqual("Merry");
    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> NULL"
    );
  })

  it("k is equal to a negative numebr", ()=> {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    expect(()=>list.kthFromEnd(-2)).toThrow();

  })

  // it("bitch", ()=> {
  //   const list = new LinkedList<string>();

  //   list.insert("Frodo");
  //   list.insert("Sam");
  //   list.insert("Merry");
  //   list.insert("Merry is a bitch");
  //   // Merry is a bitch" -> merrt, same forod
  //   list.kthFromEnd(5);
  //   // expect(()=>list.kthFromEnd(-2)).toThrow();

  // })

  it("happy path", ()=> {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Some elf kind");
    list.insert("Merry");
    list.insert("Darth");


    expect(list.kthFromEnd(2)).toEqual("Some elf kind");
  })


});
