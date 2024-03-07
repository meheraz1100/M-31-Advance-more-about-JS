// task-1 : console log the secondary school location of sofia
let data = {
    Sofia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'ABC primary school'},
                    { location: 'Peters burg'}
                ]
            },
            {
                secondary: [
                    { school_name: "ABC secondary school"},
                    { location: "St Lorence"}
                ]
            },
        ]
    }
}

// console.log(data.Sofia.study[0].secondary[0].location);


//task-2 show the 'petersburg' in the console
let students = {
    2222: {
        name: 'Jack',
        section: 'C',
        class: 'IX',
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },

    3333: {
        name: 'Herry',
        section: 'D',
        class: 'X',
        address: {
            "building no": 85,
            "street": "DC Road",
            "city": "Kochukhet",
            "country": "Bangladesh"
        }
    }
}


//task-3 : access and then show 'habluder adda
// show output beginner

let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: 'habluder adda',
                catagory: 'XYZ',
                price: '20$',
            },
            bookCatagory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails: {
                name: 'gabluder adda',
                catagory: 'ABC',
                price: '40$',
            },
            bookCatagory: 'Beginner',
        }
    ]
}