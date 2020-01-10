$(document).ready(function(){
	
	let valor_dados = "";
	
	const getHtml = function(arrayDados){
		let html = "";
		console.log(arrayDados);
		$.each(arrayDados,function(key,valor){
			
            html+= "<tr id='iden"+valor.id+"'>";
            html+= "<td>"+valor.urlBase+"</td>";
				 html+= "<td>"+valor.urlCurta+"</td>";
				 html+= "<td><a href='#exampleModalScrollable' class='btn btn-outline-light' data-toggle='modal' data-target='#exampleModalScrollable' data-key='"+valor.id+"' data-url='"+valor.urlBase+"' data-url-curta ='"+valor.urlCurta+"'>";
				 html+= "<img src='edit.svg'>";
				 html+=  "</a>";
				 html+=  "</td>";
          	 html+=  "<td title='Seleciona para remover'><input type='checkbox' name='marcar' data-key='"+valor.id+"'></td>";
            html+= "</tr>";
		});
		
		$("table tbody").html(html);
	}
	
	
	
	
	const getLista = function() {
		$.get("/lista_urls", function(data) {
	
			valor_dados = data;
			//console.log(data);
			if (data.length > 0){
				getHtml(data);
			   }
	},"json");
}

	getLista();


	$('#exampleModalScrollable').on('hidden.bs.modal', function (e) {
    e.preventDefault();
    $("form").trigger('reset');
	});

	
	
$('#exampleModalScrollable').on('show.bs.modal', function (e) {
    console.log(e.relatedTarget);
    const url = e.relatedTarget.getAttribute('data-url');
    const url_curta = e.relatedTarget.getAttribute('data-url-curta');
    const id = e.relatedTarget.getAttribute('data-key');
    //console.log(url,url_curta,id);
    $('#id').val(id);
    $('#url_base').val(url);
    $('#url_curta').val(url_curta);
});


$('.maior').click(function(e){
	e.preventDefault();
  	const marcado = $('input:checked[type="checkbox"]');
	console.log(marcado);
	if(marcado.length > 0){
	    $.each(marcado,function(index,itens){
	    	console.log(itens);
	    	const id = itens.getAttribute('data-key');
	    	$.get("/delete/url/",{id:id}).done(function(data){
	    		console.log(data);
	    		$('#iden'+itens.getAttribute('data-key')).empty();
	    	});
	    });
	return true;
	}
	$(".alert").html("<p>nenhuma url selecionada!</p>").css("display","block");
});

$("#form-update").submit(function(e){
	e.preventDefault();
	const id = $("#id").val();
	const dados = $(this).serialize();
	console.log(id);
	$.post("/update/url/",dados).done(function( valor ){
		console.log(valor);
		//location.reload();
		getLista();
		$("#exampleModalScrollable").modal('hide');
		
	});
	
});

$("#form_pesquisa").submit(function(e){
	e.preventDefault();
	
	const urlbase = $("#pes").val();
	console.log(urlbase);
	console.log(valor_dados);
 	$.each(valor_dados, function(key,valor){
 		if(valor.urlBase === urlbase){
 			  html = "";
			  html+= "<tr id='iden"+valor.id+"'>";
			  html+= "<td>"+valor.urlBase+"</td>";
			  html+= "<td>"+valor.urlCurta+"</td>";
			  html+= "<td><a href='#exampleModalScrollable' class='btn btn-outline-light' data-toggle='modal' data-target='#exampleModalScrollable' data-key='"+valor.id+"' data-url='"+valor.urlBase+"' data-url-curta ='"+valor.urlCurta+"'>";
			  html+= "<img src='edit.svg'>";
			  html+=  "</a>";
			  html+=  "</td>";
			  html+=  "<td title='Seleciona para remover'><input type='checkbox' name='marcar' data-key='"+valor.id+"'></td>";
			  html+= "</tr>";
 			  $("table tbody ").html(html);
 			 console.log('aqui');
 			 return true;
 		}
 		getLista();
 		$(".alert").html("<p>url não encontrada !</p>").css("display","block");
 	});

})

});
