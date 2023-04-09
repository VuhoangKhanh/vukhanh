


let products = [
    {
        id: 0,
        name: 'Váy A tay bồng',
        image: 'https://traffic-edge21.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20221017_qVi1W3Mwx4Y4hTMW7Qs0DS3T.jpg',
        price: 500,
        still: true
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
        id: 8,
        name: 'Váy cổ yếm',
        image:'https://img.cdn.vncdn.io/cdn-pos/312d68-57499/ps/20220922_cjDP7XqmtaG0mnmiutwlsEmK.jpg',
        price: 1300,
        still: true
    }
]
let userNow

document.getElementById("btn-login")
.addEventListener('click',function(){
    let user = JSON.parse(localStorage.getItem('user')) ??[]

    let registerUsername = document.getElementById('registerUsername')
    let registerPassword = document.getElementById('registerPassword')

    let newuser = {
        id:user.length,
        userName: registerUsername.value,
        userName: registerPassword.value,
    }
    users.push(newuser)

    localStorage.setItem('user',JSON.stringify(users))

    console.log(users);

document.getElementById('btn-signup')
.addEventListener('click',function(event)){
    event.preventDefault();
    let LoginName = document.getElementById('LoginName')
    let LoginPassword = document.getElementById('LoginPassword')
    
    let user = JSON.parse(this.localStorage.getItem('users')) ?? []

    for(var i = 0; i<user.length; i++){
        if(LoginName == user[i].userName){
            if(LoginPassword.value === users[i].password)(
                document.getElementById('userlogin').textContent = users[i].userName;
                
           )
            
            
        }
    }
}

    


})


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
    //     let cart = document.querySelector(',cart')

    //     let newItem = item.cloneNode(true)

    //     cart.appendChild(newItem)
    //     newItem.removeChild(addToCart)
    })

    
}


