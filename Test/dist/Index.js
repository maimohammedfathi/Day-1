"use strict";
let numberArray = [101, 102, 103, 104];
let stringArray = numberArray.map(String);
console.log(stringArray);
let mixedArray = ["Ahmed", 500, "Mai", 505];
console.log(mixedArray);
let nbArray = [true, 500, false, 505];
console.log(nbArray);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return `Hello, ${a} ${b}`;
    }
    else {
        throw new Error("Invalid Input Types");
    }
}
console.log(add(4, 5));
console.log(add("Ahmed", "Mohammed"));
class customUser {
    constructor(id, name, userName, email, postTitle = "", postBody = "", commentName = "", commentEmail = "", commentBody = "") {
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
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    toString() {
        return `CustomUser { 
        id: ${this.id}, 
        name: ${this.name}, 
        userName: ${this._userName}, 
        email: ${this.email} }`;
    }
    stringfyPost(post) {
        return `{ 
        title: ${post.title}, 
        body: ${post.body} }`;
    }
    stringifyComment(comment) {
        return `{ 
        name: ${comment.name}, 
        email: ${comment.email}, 
        body: ${comment.body} }`;
    }
}
const newrUser = new customUser(1, "Leanne Graham", "Bret", "Sincere@april.biz", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae", "id labore ex et quam laborum", "Eliseo@gardner.biz", "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora");
console.log(newrUser.toString());
console.log(`POST: ${newrUser.stringfyPost(newrUser.post)}`);
console.log(`COMMENT: ${newrUser.stringifyComment(newrUser.post.comment)}`);
class vipUser extends customUser {
    constructor(id, name, userName, email, postTitle = "", postBody = "", commentName = "", commentEmail = "", commentBody = "") {
        super(id, name, userName, email, postTitle, postBody, commentName, commentEmail, commentBody);
    }
    viewPost() {
        console.log(this.stringfyPost(this.post));
    }
}
const newVipUser = new vipUser(2, "Jane Doe", "jane_doe", "jane@example.com", "Gold VIP", "VIP Post Title", "This is the body of the VIP post", "VIP Commenter", "vip_commenter@example.com");
newVipUser.viewPost();
