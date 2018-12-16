$(function(){
	$('#search_btn').on('click' ,function(){
		$.ajax({
			type:'POST' ,
			url:'http://www.kkj.go.jp/api/' ,
			dataType:'json',
			async:false  ,
			data: {
				'Query' : $('#search_query_text').val()
			}
		})
		// success.
		.done(function( data, textStatus, jqXHR ) {
			alert('done');
			data.find('SearchResult').each(function(i){
				$('#result_table').append(
						'<tr>' +
						'<td>' + $(this).find('ResultId') + '</td>' +
						'<td>' + $(this).find('ExternalDocumentURI') + '</td>' +
						'<td>' + $(this).find('ProjectName') + '</td>' +
						'<td>' + $(this).find('PrefectureName') + '</td>' +
						'<td>' + $(this).find('CityName') + '</td>' +
						'<td>' + $(this).find('CftIssueDate') + '</td>' +
						'<td>' + $(this).find('PeriodEndTime') + '</td>' +
						'</tr>');
			})
		})
		// fail.
		.fail(function( jqXHR, textStatus, errorThrown ) {
			alert('fail ' + jqXHR.status + ' ' + errorThrown);
		})
		// always
		.always(function( jqXHR, textStatus ) {
			alert('always ' + textStatus);
		});
/*
		$.ajax({
			url : 'https://httpbin.org/get' ,
			type: 'GET' ,
			dataType: 'json',
			async: false
		})
		.done(function( data, textStatus, jqXHR ) {
			alert('done ' + textStatus);
		})
		.fail(function( jqXHR, textStatus, errorThrown ) {
			alert('fail ' + textStatus);
		})
		.always(function( jqXHR, textStatus ) {
			alert('always ' + textStatus);
		});
*/

	});
});
