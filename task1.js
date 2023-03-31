let parent = {lvl: "parent"};

let daughter = Object.create(parent);
daughter.tenseOfYear = "autumn";

function func (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

func(daughter);

