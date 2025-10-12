// get
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem('readList')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = product => {
  const wishlist = loadWishlist()

   
   

    if (wishlist.includes(product.id)) {
        console.log("hello")
        alert("bhai ei id already exist ")
    }
    else {
        wishlist.push(product);
        const data = JSON.stringify(wishlist);
        localStorage.setItem("readList",data)

    } 
  }
// delete
export const removeFromWishlist = id => {
  const wishlist = loadWishlist()
  try {
    const updatedWishlist = wishlist.filter(p => p.id !== id)
    localStorage.setItem('readList', JSON.stringify(updatedWishlist))
  } catch (err) {
    console.log(err)
  }
}