let numberArray: number[] = [101, 102, 103, 104];
let stringArray: string[] = numberArray.map(String);
console.log(stringArray);

let mixedArray: (string | number)[] = ["Ahmed", 500, "Mai", 505];
console.log(mixedArray);

let nbArray: (Boolean | number)[] = [true, 500, false, 505];
console.log(nbArray);

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return `Hello, ${a} ${b}`;
  } else {
    throw new Error("Invalid Input Types");
  }
}
console.log(add(4, 5));
console.log(add("Ahmed", "Mohammed"));

interface IUser {
  id: number;
  name: string;
  userName: string;
  email: string;
  post: {
    title: string;
    body: string;
    comment: {
      name: string;
      email: string;
      body: string;
    };
  };
}

class customUser implements IUser {
  readonly id: number;
  private _userName: string;
  name: string;
  email: string;
  post: {
    title: string;
    body: string;
    comment: { name: string; email: string; body: string };
  };

  constructor(
    id: number,
    name: string,
    userName: string,
    email: string,
    postTitle: string = "",
    postBody: string = "",
    commentName: string = "",
    commentEmail: string = "",
    commentBody: string = ""
  ) {
    this.id = id;
    this.name = name;
    this._userName = userName;
    this.email = email;
    this.post = {
      title: postTitle,
      body: postBody,
      comment: {
        name: commentName,
        email: commentEmail,
        body: commentBody,
      },
    };
  }
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  //Override toString()
  toString(): string {
    return `CustomUser { 
        id: ${this.id}, 
        name: ${this.name}, 
        userName: ${this._userName}, 
        email: ${this.email} }`;
  }

  //Method to post and comment
  stringfyPost(post: { title: string; body: string }): string {
    return `{ 
        title: ${post.title}, 
        body: ${post.body} }`;
  }

  // Helper method to stringify the 'comment' property
  stringifyComment(comment: {
    name: string;
    email: string;
    body: string;
  }): string {
    return `{ 
        name: ${comment.name}, 
        email: ${comment.email}, 
        body: ${comment.body} }`;
  }
}

const newrUser = new customUser(
  1,
  "Leanne Graham",
  "Bret",
  "Sincere@april.biz",
  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae",
  "id labore ex et quam laborum",
  "Eliseo@gardner.biz",
  "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora"
);

console.log(newrUser.toString());
console.log(`POST: ${newrUser.stringfyPost(newrUser.post)}`);
console.log(`COMMENT: ${newrUser.stringifyComment(newrUser.post.comment)}`);

//Create class VIPUser inherit from User class and
class vipUser extends customUser {
  constructor(
    id: number,
    name: string,
    userName: string,
    email: string,
    postTitle: string = "",
    postBody: string = "",
    commentName: string = "",
    commentEmail: string = "",
    commentBody: string = ""
  ) {
    super(
      id,
      name,
      userName,
      email,
      postTitle,
      postBody,
      commentName,
      commentEmail,
      commentBody
    );
  }

  viewPost(): void {
    console.log(this.stringfyPost(this.post));
  }
}

// Create a new VIPUser instance
const newVipUser = new vipUser(
  2,
  "Jane Doe",
  "jane_doe",
  "jane@example.com",
  "Gold VIP",
  "VIP Post Title",
  "This is the body of the VIP post",
  "VIP Commenter",
  "vip_commenter@example.com"
);

// View the posts of the VIP user
newVipUser.viewPost();
