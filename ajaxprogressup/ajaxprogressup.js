 $(function(){
	 var up = new upload('.ajaxprogressup');
 });
 
 var upload = function(target){
	html_form = "<div class='ajaxprogressup_form'>";
	html_form += '	<div class="upload">';
	html_form += '		<input type="file" class="file">';
	html_form += '		<div class="message"></div>';
	html_form += "		<div class='progress_outer'><div class='progress'></div></div>";
	html_form += "	</div>";
	html_form += "</div>";
	$(target).attr('placeholder','Selectionner un fichier..');
	$(target).after(html_form);
	$(target).on('click',function(){
		var input = $(this);
		var me = $(this).next();
		me.find('.file').click();
		me.find('.file').on('change',function(){
			
			_file           = me.find('.file')[0], 
			_progress       = me.find('.progress')[0];
			_message        = me.find('.message')[0];
			 
			me.find('.progress_outer').show();
			
			_message.innerHTML = 'Veuillez patienter un peu..';
			
			if(_file.files.length === 0){
			  return;
			}
			_progress.style.width 	= 0 + '%';
			_progress.innerHTML 	= 0 + '%';
			var data = new FormData();
			data.append('file', _file.files[0]);

			var request = new XMLHttpRequest();
			request.onreadystatechange = function(){
			  if(request.readyState == 4){
				try {
				  var resp = JSON.parse(request.response);
				} catch (e){
				  var resp = {
					status: 'error',
					data: 'Unknown error occurred: [' + request.responseText + ']'
				  };
				}
				_message.innerHTML	        = '<span class="ajaxprogressup_'+resp.status+'"><strong>'+resp.status + ':</strong> ' + resp.data+' </span>';
				input.val(resp.url);
				  
			  }
			};

			request.upload.addEventListener('progress', function(e){
				var perc = Math.ceil(e.loaded/e.total) * 100 + '%'
			  _progress.style.width 	= perc;
			  _progress.innerHTML = perc;
			}, false);

			request.open('POST', 'ajaxprogressup.php');
			request.send(data);
		});
	});
	
}



 
