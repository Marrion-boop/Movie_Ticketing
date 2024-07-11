
let preveiwContainer = document.querySelector('.movie-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');


document.querySelectorAll('.product-container .product_card').forEach(product_card =>{
    product_card.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product_card.getAttribute('movieName');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('movieTarget');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });

  previewBox.forEach(close =>{
    close.querySelector('.book').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });

