$(document)
		.ready(
				function() {
					$('#addFile')
							.click(
									function() {
										var fileIndex = $('#fileTable tr')
												.children().length - 1;
										$('#fileTable')
												.append(
														'<tr><td>'
																+ '	<input type="file" name="files['
																+ fileIndex
																+ ']" />'
																+ '</td></tr>');
									});

				});
