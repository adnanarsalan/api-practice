 
 
 
   function pic ()
   {
  
        let isha = document.getElementById("img02")
       isha.src="image/dog01.jpg"
   }
   function pic2 ()
   {
  
        let isha = document.getElementById("img02")
       isha.src="image/dog.jpg"
   }
 
 
 
 
 
 
 
 
 function loadData(){
   fetch('https://api.TheDogAPI.com/v1/breeds')
   .then(res=>res.json())
   .then(data=>displayDog(data));
 }

 const displayDog = (dogList) => {const main = document.getElementById('main');
 const first10Data = dogList.slice(0, 15);
 for(const dog of first10Data) {

 
   const div = document.createElement("div")
   div.className="col-lg-4"
   div.innerHTML = `
   
       <h2 class="dogColor"> ${dog.name}  </h2>
       <p class="dogColor01">${dog.temperament}  </p>
       <h4> ${dog.weight.imperial} </h4>
       <img height="400px" width="400px" src="${dog.image.url}" >

   
   
   `
    main.appendChild(div)
    console.log(div)
 }






}
   