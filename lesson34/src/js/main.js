//зверстати сторінку, обратитись до даних, підставити ID

fetch('https://dummyjson.com/products/8').then((response) => {
    return response.json();
}).then((tellback) => {
    console.log(tellback);
    const column = document.querySelector('.wrapper');

    const cart = `
 <div class="col">
   <div class="image-block">
		<img src="${tellback.thumbnail || 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'}" alt="photo">
   </div>
	<div class="text-holder">
		<h2 class="title">${tellback.title}</h2>
		<span class="info">Brand: ${tellback.brand}</span>
		<span class="info">Price: ${tellback.price} $</span>
		<span class="info">Rating: ${tellback.rating}</span>
		<span class="info">Category: ${tellback.category}</span>
		<div class="desc-holder">
			<p>Description: ${tellback.description}</p>
		</div>
		 <div class="btn-holder">
		    <a href="#" class="buy">Купить</a>
		 </div>
   </div>
 </div>
 <div class="images">
 </div>
`
    column.insertAdjacentHTML('beforeend', cart);
    const imagesSection = document.querySelector('.images')

    tellback.images.map(image => {
        const newImg = `
        <div class="image-holder">
             <img src="${image}" alt="#">
        </div>
        `
        imagesSection.insertAdjacentHTML('beforeend', newImg);
    })
});

