let parent = {lvl: "parent"};

let daughter = Object.create(parent);
daughter.tenseOfYear = "autumn";

function func (str, obj) {
    for (let key in obj) {
        if (str === key) {
            return true;
        }
    }
    return false;
}

console.log(func("tenseOfYear", daughter));
console.log(func("lvl", daughter));
console.log(func("tenseOfYear", parent));
console.log(func("lvl", parent));