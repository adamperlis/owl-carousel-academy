<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<script>
  window.addEventListener('DOMContentLoaded',()=>{ 
  	document.querySelector('.r-arrow').addEventListener('click',e=>{
    	if(e.target.closest('.r-arrow')){
      	document.querySelector('.owl-nav .owl-next').click()
         $('.owl-carousel').data('owl.carousel').options.loop=true
      }
    })
    document.querySelector('.l-arrow').addEventListener('click',e=>{
    	if(e.target.closest('.l-arrow')){
      	document.querySelector('.owl-nav .owl-prev').click()
         $('.owl-carousel').data('owl.carousel').options.loop=true
      }
    })
    //Sliders
    $('.owl-carousel').owlCarousel({
        items:2.15,
       responsive: {
        0: {
          margin: 15,
          items: 1,
          dots: false,
          nav: false,
          center: true,
          loop:true
        },
        650: {
          items: 2,
          nav: false,
          dots: false,
          margin:5,
          center: false,
          loop:true,
          margin: 20, 
        },
        992:{
          center: false, 
          items:2.15,
          loop: true,
          nav:false,
          dots:false, 
          margin: 40, 
        }, 
      },
    });

  })
</script>
