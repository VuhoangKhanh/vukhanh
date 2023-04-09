// var student = {
//     name:"AN",
//     age:10,
//     class:"JAS08",
    
//     }
    



// console.log(student.name);
// console.log(student.age);
// console.log(student.class);

// for(var i in student){
//     console.log(i);
//     console.log(student{i});
// }

// var JSA08 = [
//     {
//         name:"Long", 
//         age:10,
//         class:jsa08,
//     },

//     {
//         name:"khanh",
//         age:10,
//         class:jsa08,
//     },

//     {
//         name:"Thanh",
//         age:10,
//         class:jsa08,
//     }
// ]

// for (var hocsinh of jsa08){
//     console.log(hocsinh.name +" "+hocsinh.age +""+hocsinh.class);
// }
    

var product = [
    {
        name:"Chân váy cạp bổ 7 mảnh",
        price:100,
        Image:"https://bucket.nhanh.vn/312d68-57499/ps/20221124_nN5L8VS8ADRExLeYap55N2KZ.jpg "

    },
    {
        name:"Chân váy cạp bổ 7 mảnh",
        price:100,
        Image:"https://bucket.nhanh.vn/312d68-57499/ps/20221124_nN5L8VS8ADRExLeYap55N2KZ.jpg "

    },
    {
        name:"Chân váy cạp bổ 7 mảnh",
        price:100,
        Image:"https://bucket.nhanh.vn/312d68-57499/ps/20221124_nN5L8VS8ADRExLeYap55N2KZ.jpg "

    },
]

for(var sanphan of product ) {
    let product = document.createElement("div") 
    product.classList.add("product")

    let Image = document.createElement("img")
    Image.classList.add("image")
    Image.setAttribute("src","https://bucket.nhanh.vn/312d68-57499/ps/20221124_nN5L8VS8ADRExLeYap55N2KZ.jpg")

    let name = document.createElement("h6")
    name.classList.add("name")
    name.textContent = "999"
    
    let btn_guy = document.createElement("button")
    btn_guy.classList.add("btn_guy")
    btn_guy.textContent = "Buy"

    productList.appendChild(product)
    product.appendChild(image)
    product.appendChild(name)
    product.appendChild(price)
    product.appendChild(btn_guy)
}

function addSP(){
    let newspName = prompt("Name")
    let newspPrice = prompt("Price")
    let newspImage = prompt("Image")
}
