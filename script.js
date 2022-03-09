const searchPhone = () => {
    
  let searchField = document.getElementById("search-field")
  let searchText = searchField.value
  
  // searchField.value = '' ;
  let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const searchResult=document.getElementById('search-result')
  fetch(url)
  .then(res => res.json())
  .then(anObject =>{let allDiv = anObject.data.map(item=>`<div class="col-md-4 mb-3">
  <div class="card h-100">
    <img src=${item.image} class="card-img-top img-fluid" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${item.phone_name}</h5>
      <h5 class="card-title">${item.brand}</h5>
    </div>
    <div class="card-footer">
    <button  class="btn btn-info" onclick="showDetails(${item.slug})" >Phone details </button>
    </div>
  </div>
</div> `)
 
  searchResult.innerHTML=allDiv.join('')
})}

const showDetails = (id) =>{
  console.log(id)
  let searchDeatails = document.getElementById("details")

  let url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(anObject =>{let details = `<div class="col-md-3">

  </div>
  <div class="col-md-6">
  <div class="card h-100">
  <img src=${anObject.data.mainFeatures.image} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <div class="card-footer">
  <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  <div class="col-md-3">
    
  </div>`
  searchDeatails.innerHTML= details
})}