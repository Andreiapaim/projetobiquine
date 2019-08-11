
$(document).ready(function(){

	atualizarvalor();
    CarrosselProduto(".carousel");
    Carrossel('.regular', '.item-slider', 5, 4, 3, 2, 1);

	$("#Btntop").click(function()
	  {    
	    topFunction();
	  });

	$(window).scroll(function(){
	  var sticky = $('.navbar'),
		  scroll = $(window).scrollTop();

	  if (scroll >= 100) {
	  sticky.addClass('fundobranco');
	  $(".nav-item a").addClass('nav-item-hover');
	  $("#logo").addClass('logohover');
	  $("#lupa").addClass('lupahover');
	  $("#pessoa").addClass('pessoahover');
	  $("#carrinho").addClass('carrinhohover');
	  $("#Btntop").show();
	  }
	  else {
	  sticky.removeClass('fundobranco');
	  $(".nav-item a").removeClass('nav-item-hover');
	  $("#logo").removeClass('logohover');
	  $("#lupa").removeClass('lupahover');
	  $("#pessoa").removeClass('pessoahover');
	  $("#carrinho").removeClass('carrinhohover');
	  $("#Btntop").hide();
	  }
	  
	});

	$("#lupa").click(function()
	  {    

		if ($(this).data("state") == 1) 
		{
			$(this).addClass("iconx");
			$(this).data("state", 2);
			$("#barraprocura").show();
		}
		else
		{
			$(this).removeClass("iconx");
			$(this).data("state", 1);
			$("#barraprocura").hide();
		}
		
	  });


	$("#pessoa").click(function()
	  {    

		if ($(this).data("state") == 1) 
		{
			$(this).addClass("iconx");
			$(this).data("state", 2);
			$("#barrapessoa").show();
		}
		else
		{
			$(this).removeClass("iconx");
			$(this).data("state", 1);
			$("#barrapessoa").hide();
		}
		
	  });


	$("#carrinho").click(function()
	  {    

		if ($(this).data("state") == 1) 
		{
			$(this).addClass("iconx");
			$(this).data("state", 2);
			$("#barracarrinho").show();
		}
		else
		{
			$(this).removeClass("iconx");
			$(this).data("state", 1);
			$("#barracarrinho").hide();
		}
		
	  });



 });

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function atualizarvalor()
  {
  var total = $(".valor").length;
  
   jQuery('.valor').each(function(i)
    {
	    valorx = $(this).text();
        adicional = (valorx * 25) / 100;
		resultx = parseFloat(valorx) + parseFloat(adicional);
		//console.log (valorx + ' - ' + resultx.toFixed(2));
		$(this).text(resultx.toFixed(2).replace('.',','));
    });  
 
  }

function CarrosselProduto(classe) {
  $(classe).carousel({
    interval: 5000
  });
}

function Carrossel(classe, filho, show1, show2, show3, show4, show5) {
  var $item = $("" + classe + "");
  $item.find(".helperComplement").remove();
  if ($item.find("" + filho + "").length > 0) {
    $item.slick({
      infinite: false,
      speed: 600,
      slidesToShow: show1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: false,
      nextArrow: '<span class="fa fa-chevron-right next"></span>',
      prevArrow: '<span class="fa fa-chevron-left prev"></span>',
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: show2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 879,
          settings: {
            slidesToShow: show3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: show4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: show5,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}
