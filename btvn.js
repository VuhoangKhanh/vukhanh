
let products = [
    {
        id: 0,
        name: 'Váy A tay bồng',//tên sản phẩm
        image: 'https://traffic-edge21.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221017_qVi1W3Mwx4Y4hTMW7Qs0DS3T.jpg', //link ảnh sản phẩm
        price: 500,//giá sp
        still: true //trạng thái còn hàng: true(còn hàng) / false(hết hàng)
    },
    {
        id: 1,
        name: 'Jump suông',
        image:'https://traffic-edge32.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221017_nbO2IgITT0qc0LLoVnnf98cg.jpg',
        price: 600,
        still: false
    },
    {
        id: 2,
        name: 'Váy tay cộc',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221213_2nlAbfxH7NfRK9bJGK1PTGfC.jpg',
        price: 700,
        still: true
    },
    {
        id: 3,
        name: 'Áo khoác dạ',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20220818_UiLyPJf4yLDUP7XlR8EJBGSV.jpg',
        price: 800,
        still: true
    },
    {
        id: 4,
        name: 'Măng tô lá',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221101_EmwE4EC69KqGP14HrIDH0arp.jpg',
        price: 900,
        still: false
    },
    {
        id: 5,
        name: 'Sơ mi kiểu bèo',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221008_nXPhC5H9EyWcnGMFeDvKA9EI.jpg',
        price: 1000,
        still: true
    },
    {
        id: 6,
        name: 'Đầm cổ 2 ve',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221008_uICo7qgDijIIc4QsOZjaje2K.jpg',
        price: 1100,
        still: false
    },
    {
        id: 7,
        name: 'Đầm tay bồng',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221004_OozZSHcfqzG95F8qAZqyc2RA.jpg',
        price: 1200,
        still: true
    },
    {
        id: 8,
        name: 'Váy cổ yếm',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20220922_cjDP7XqmtaG0mnmiutwlsEmK.jpg',
        price: 1300,
        still: true
    }
]
for(var i in products){
    createItem(products, i)
}

function createItem(List,i){
    let list = document.puerySelector(',list')

    let item = document.createElement('div')
    item.classList.add('item')

    let image = documentElement('img')
    image.setATTRIBUTE('src,https://static.wixstatic.com/media/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.webp')
 
    let inforItem = document.createElement('div')
    inforItem.classList.add('infoItem')

    let name = document.createElement('h4')
    name.classList.add('name')
    name.textContent = List[i].price

    let addToCart = document.createElement('btton')
    addToCart.classList.add('addToCart')
    addToCart.textContent = "Add to Cart"

    ListProduct.appendChild(item)
    item.appendChild(image)
    item.appendChild(inforItem)
    item.appendChild(name)
    inforItem.appendChild(price)
    inforItem.appendChild(addToCart)

    addToCart.addEventListener('click',function(){
        let listCart = JSONa.parse(localStorage.getItem('listcart')) ?? []

        let newCart = {
            id: i,
            name: list[i].name,
            image: list[i].image,
            price: list[i].price,
        }

        listCart.push(newCart)
        localStorage.setItem('listcart', JSON.stringify(listCart))


    
})
}
let listCart = JSON.parse(localStorage.getItem('listcart')) ?? []

for(var i in listCart){
    createCart(listCart, i)

}

function createItem(List,i){
    let list = document.puerySelector(',list')

    let item = document.createElement('div')
    item.classList.add('item')

    let image = documentElement('img')
    image.setATTRIBUTE('src,https://static.wixstatic.com/media/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.png/v1/fill/w_625,h_834,al_c,q_90,usm_0.66_1.00_0.01/82fcd3_df4a7be03f224cc282d38c8aff689318~mv2_d_1440_1920_s_2.webp')
 
    let inforItem = document.createElement('div')
    inforItem.classList.add('infoItem')

    let name = document.createElement('h4')
    name.classList.add('name')
    name.textContent = List[i].price

    let addToCart = document.createElement('btton')
    addToCart.classList.add('addToCart')
    addToCart.textContent = "Add to Cart"

    ListProduct.appendChild(item)
    item.appendChild(image)
    item.appendChild(inforItem)
    item.appendChild(name)
    inforItem.appendChild(price)
    inforItem.appendChild(addToCart)

    addToCart.addEventListener('click',function(){
        let listCart = JSONa.parse(localStorage.getItem('listcart')) ?? []
            listCart.splice(i,1)
            localStorage.setItem('listcart',JSON.stringify(listCart))

        // let newCart = {
        //     id: i,
        //     name: list[i].name,
        //     image: list[i].image,
        //     price: list[i].price,
        // }

        // listCart.push(newCart)
        // localStorage.setItem('listcart', JSON.stringify(listCart))


    
})
}