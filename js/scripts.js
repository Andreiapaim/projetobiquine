
$(document).ready(function(){

	atualizarvalor();
 
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
      });

	$("#biquines").hover(function()
	  {    
		$("#barra").addClass("barra");
		$("#barravermelha").show();
		$("#barrabiquine").show();
	  });


	$("#lupa").hover(function()
	  {    
		$("#barra").addClass("barra");
		$("#barraprocura").show();

	  });

	$("#carrinho").hover(function()
	  {    
		$("#barra").addClass("barra");
		$("#barracarrinho").show();

	  });


	$("#carouselExampleIndicators").hover(function()
	  {    
		$("#barra").removeClass("barra");
		$("#barraprocura").hide();
		$("#barracarrinho").hide();
		$("#barravermelha").hide();
		$("#barrabiquine").hide();

	  });

 });


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
