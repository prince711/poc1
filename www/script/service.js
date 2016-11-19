app.service('myService', function ($http) {
this.sendRequest = function (data) {
		 var url = data.url;
		 var req = {
			 method : data.method,
			 url : url,
			data : data.data,
	        headers: {
                        'Content-Type': 'application/json'
                    }
                
		//useDefaultXhrHeader: false
		 }
		$http(req).success(data.onsucess).error(data.onError);
	};
	});