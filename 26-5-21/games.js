// var mydata = JSON.parse(games_det)

let iname;
let iprice;
let irating;

function inputdet() {
    iname = document.form.name.value;
    iprice = document.form.price.value;
    irating = document.form.rating.value;
    // console.log(iname);
    // console.log(iprice);
    // console.log(irating);

    let new_game = {
        name: iname,
        price: iprice,
        rating: irating
    }

    games_array.push(new_game);
    // printarr();
}

games_array = []
    //     {
    //         name: "GTA5",
    //         price: "2000",
    //         rating: "8"
    //     },
    //     {
    //         name: "Need for Speed",
    //         price: "1000",
    //         rating: "7"
    //     },
    //     {
    //         name: "Clash of Clans",
    //         price: "Free",
    //         rating: "9"
    //     }



function printarr() {
    // console.log(employee_array);
    for (let x of games_array) {
        // console.log(x.name);
        // console.log(x.price);
        // console.log(x.rating);
        console.log(JSON.stringify(x, null, 2))
    }
    for (let x of games_array) {
        document.form.text.value = x.name;
    }
    // console.log(mydata[0].name);
}

function search() {
    let count = 0;
    let p = new Promise((resolve, reject) => {

        let str = document.form.text.value;
        for (let x of games_array) {
            if (str === x.name) {
                // console.log(x.name);
                // console.log(x.price);
                // console.log(x.rating);
                console.log(JSON.stringify(x, null, 2))
                count = 1;
            }
        }
        if (count == 1)    {
            resolve(console.log("game found"));
            count = 0;
        }
        else    {
            reject(console.log("game not found"));
        }
    })

    p.then(message => {
        console.log(message)
    }).catch(message => {
        console.log(message)
    })
}