app.controller('MainController', function ($scope, $location, $anchorScroll, $window, myService,$routeParams) {
   
	$scope.user = {};
	$scope.cost = {};
	$scope.category={};	
	$scope.remark={};
		$scope.music={};
		$scope.managementdetails={};
		$scope.restaurant_data={ "X-API-KEY":'adasdasdasdasdasdasd'
		};
		
		$scope.category.establishment=[];
$scope.category.cuisine=[];
$scope.category.ambience=[];
$scope.category.highlights=[{
	highlight:""
}];
		$scope.formObjects=[];

		$scope.user.selling=[];
  $scope.user.special_dish=[];
  $scope.user.target_audience=[];
  $scope.key=$routeParams['id'];
		 
		// var local_data=$window.localStorage.getItem('restaurant_data');
		// local_data=JSON.parse(local_data);
		// $scope.local_data=local_data;
		// console.log(local_data);
		// $scope.form=[];
	// $scope.detail = {
	// name : '',
	// address : ''
	// pin_code : ''
	// lat : ''
	// long : ''
	// city : ''
	// state : ''
	// country : ''
	// primary_phone : ''
	// secondary_phone : ''
	// email : ''
	// opening_time : ''
	// closing_time : ''
	// covered_area : ''
	// open_area : ''
	// vegetarian : ''
	// nonvegetarian : ''
	// projector : ''
	// lcd_led : ''
	// maximum_occupancy :
	// target_audience : [],
	// selling : [],
	// special_dish : []
	// };
  
	$scope.form_onedata = function () {
		
		var result=$scope.detailValidation();
		if(result==false)
		{
			return false;
		}
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
			
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_detail=$scope.user;
		}
		else{
			
			$scope.restaurant_data.restaurant_detail=$scope.user;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
			$scope.restaurant_data.restaurant_detail=$scope.user;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		
		
	
		$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
		alert('Restaurant Detail has been saved sucessfuly');

	}

	
	$scope.cost.buffet_type =[];
$scope.cost.happy_hours_day={
	1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: ""
};
	

	$scope.cost.buffet_opening_time = ['00:00', '00:00', '00:00'];
	$scope.cost.buffet_closing_time = ['00:00', '00:00', '00:00'];
	$scope.cost.buffet_price = ['', '', ''];
	$scope.cost.happy_hours_time = {
		1:{
			start : '00:00',
			end : '00:00'
		},
		2:{
			start : '00:00',
			end : '00:00'
		},
		3:{
			start : '00:00',
			end : '00:00'
		},
		4:{
			start : '00:00',
			end : '00:00'
		},
		5:{
			start : '00:00',
			end : '00:00'
		},
		6:{
			start : '00:00',
			end : '00:00'
		},
		7:{
			start : '00:00',
			end : '00:00'
		},
		};
	
	$scope.cost.offer_value={
    1:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	2:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	3:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	4:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	5:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	6:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	},
	7:{
	  offer1: "",
      offer_code1: "xyz",
      offer2: "",
      offer_code2: "abc"
		
	}
	};
	
	$scope.cost.offer_day=[""];
	$scope.cost.private = [{
			"private_drink" : "1",
			"private_snacks" : "1",
			"dinner" : true,
			"private_main_course" : "1",
			"price" : ""

		}
	];
	

	$scope.addPartyDetails = function () {
		$scope.cost.private.push({
			"private_drink" : "1",
			"private_snacks" : "1",
			"dinner" : true,
			"private_main_course" : "1",
			"price" : ""
		});

	};

	$scope.form_onedata1 = function () {
		
		var result=$scope.costvalidation();
		if(result==false)
		{
			return false;
		}
		
		
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
			
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_cost=$scope.cost;
		}
		else{
			
	        $scope.restaurant_data.restaurant_cost=$scope.cost;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_cost=$scope.cost;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		
		
		$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
		alert('Detail Data has been saved sucessfuly');

	}

	
	
	$scope.managementdetails.management=[
   {
	   name:"",
	   mobile:"",
	   designation:"",
	   email:"",
	  
	   
   }
  ];
  
  $scope.addInputItem = function() {
     $scope.managementdetails.management.push( {
	   name:"",
	   mobile:"",
	   designation:"",
	   email:"",
	  
	   
   });
	  
  };
  
  $scope.removeFieldManagement = function(id)
    {
       // var div = $("#remove"+id);
       // div.remove();
	   var tmpArray = [];
	   for(var i=0;i<$scope.managementdetails.management.length;i++){
		   if(i != id){
			   tmpArray.push($scope.managementdetails.management[i]);
		   }
	   }
	   $scope.managementdetails.management = tmpArray;
    } 
	
	$scope.saveFormaManagement = function(){
		
		var result=$scope.managementValidation();
		if(result==false)
		{
			return false;
		}
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
			
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_management=$scope.managementdetails;
		}
		else{
			
	        $scope.restaurant_data.restaurant_management=$scope.managementdetails;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_management=$scope.managementdetails;
			 $scope.formObjects.push($scope.restaurant_data);
		}

	$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
	alert('Management Data has been saved sucessfuly');
	}
	
	
	



$scope.addInputItemcat = function() {
     $scope.category.highlights.push({
	highlight:""
});
};

$scope.removeFieldcat = function(id)
    {
       // var div = $("#remove"+id);
       // div.remove();
	   var tmpArray = [];
	   for(var i=0;i<$scope.category.highlights.length;i++){
		   if(i != id){
			   tmpArray.push($scope.category.highlights[i]);
		   }
	   }
	   $scope.category.highlights = tmpArray;
    } 
	

$scope.saveFormcategory = function(){
	
	var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
			
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_category=$scope.category;
		}
		else{
			
	      $scope.restaurant_data.restaurant_category=$scope.category;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_category=$scope.category;
			 $scope.formObjects.push($scope.restaurant_data);
		}
	
	$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
	alert('Category Data has been saved sucessfuly');
	}
	
	
	
	$scope.extraDetails={};
	
	$scope.extraDetails.suggest_parking=[];
	$scope.saveFormExtera = function(){
		
		var result =$scope.extraValidation();
		if(result==false)
		{
			return false;
		}
		
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
			
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_extra=$scope.extraDetails;
		}
		else{
			
	      $scope.restaurant_data.restaurant_extra=$scope.extraDetails;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_extra=$scope.extraDetails;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		
		
	$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
	alert('ExteraDetail Data has been saved sucessfuly');
	}
	

	
$scope.music.Adetails=[
   {
	    name:"",
	   phone:"",
	   email:"",
	   music:"",
	  days:[]
   }
  ];
  
  $scope.addArtist = function() {
     $scope.music.Adetails.push(  {
	   name:"",
	   phone:"",
	   email:"",
	   music:"",
	  days:[]
	  
	   
   });
	  
  };
	
	$scope.music_time=
		[ "", {
			  start: '00:00',
              end: '00:00',
              decibel: "1"
		}
		
		]
		
	
	
$scope.music.music_day=[ , ];
	$scope.saveFormmusic = function(){
		var result=$scope.musicValidation()
		if(result==false)
		{
			return false;
		}
		
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
				
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_music=$scope.music;
		}
		else{
			
	     	$scope.restaurant_data.restaurant_music=$scope.music;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_music=$scope.music;
			 $scope.formObjects.push($scope.restaurant_data);
			
		}
		
		
	
	$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
	 alert('Music Data has been saved sucessfuly');
	}
	
	
	$scope.saveFormRemark = function(){
		
		var result=$scope.remarkValidation();
		if(result==false)
		{
			return false;
		}
		
		var data=JSON.parse(localStorage.getItem('restaurant_data'));
		if(data)
		{if(data.length>$scope.key)
		{
				
			$scope.formObjects=data;
			$scope.formObjects[$scope.key].restaurant_remark=$scope.remark;
		}
		else{
			
	     	$scope.restaurant_data.restaurant_remark=$scope.remark;
			$scope.formObjects=data;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		}
		else{
			
		$scope.restaurant_data.restaurant_remark=$scope.remark;
			 $scope.formObjects.push($scope.restaurant_data);
		}
		
		
		
	$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify($scope.formObjects));
	
	alert('Remark Data has been saved sucessfuly');
	}
	
	
	
	var datatodisplay=JSON.parse(localStorage.getItem('restaurant_data'))
	if(datatodisplay){
		
		if(datatodisplay.length>$scope.key)
		{
					$scope.restaurant_data=datatodisplay[$scope.key];
					if($scope.restaurant_data.restaurant_detail)
					{
					$scope.user=$scope.restaurant_data.restaurant_detail;
					}
					 
					 
					 if($scope.restaurant_data.restaurant_cost)
					{
					$scope.cost=$scope.restaurant_data.restaurant_cost;
					}
					 
					 if($scope.restaurant_data.restaurant_management)
					 {
					$scope.managementdetails=$scope.restaurant_data.restaurant_management;
					 }

					 if($scope.restaurant_data.restaurant_category)
					 {
					$scope.category=$scope.restaurant_data.restaurant_category;
					 }

					 if($scope.restaurant_data.restaurant_music)
					 {
					$scope.music=$scope.restaurant_data.restaurant_music;
					 }

					 if($scope.restaurant_data.restaurant_extra)
					 {
					$scope.extraDetails=$scope.restaurant_data.restaurant_extra;

					 }

					 if($scope.restaurant_data.restaurant_remark)
					 {
					$scope.remark=$scope.restaurant_data.restaurant_remark;
					 }
							}

}

	
	

		
	
	$scope.uploadData=function()
	 {
		 
			 
	var dataToUpload=	JSON.parse(localStorage.getItem('restaurant_data')); 
	if(dataToUpload.length > $scope.key)
	{
	if(!dataToUpload[$scope.key].restaurant_detail)
	{
		alert("please fill complete data");
	}
	else if(!dataToUpload[$scope.key].restaurant_cost)
	{
		alert("please fill complete data");
	}
	else if(!dataToUpload[$scope.key].restaurant_management)
	{
		alert("please fill complete data");
	}
	else if(!dataToUpload[$scope.key].restaurant_category)
	{
		alert("please fill complete data");
	}
	else if(!dataToUpload[$scope.key].restaurant_music)
	{
		alert("please fill complete data");
	}
		else if(!dataToUpload[$scope.key].restaurant_extra)
	{
		alert("please fill complete data");
	}
		else if(!dataToUpload[$scope.key].restaurant_remark)
	{
		alert("please fill complete data");
	}
	else
	{
	
	  var parameters = {};	
	  parameters.method = 'POST';
	 parameters.url = "http://mywoobly.com/new_webadmin/api/tablet/save";
	 parameters.data= JSON.stringify(dataToUpload[$scope.key]);
	
	
	  parameters.onsucess = function (data) {
		   if (data) {
		
		dataToUpload.splice($scope.key, 1); 
		$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify(data));
			 
				 	 alert("Data submitted"); 
		 }
	  };
	  parameters.onError = function (e) {
		 alert("Network Error");
	};

	   myService.sendRequest(parameters);
	}
	}
	else{
		alert("Please fill complete data")
	}
	 }

/*validation for restaurant_details form*/	 
	 $scope.detailValidation=function(){
		  var count = 1;
            var name = $('#name').val();
           var address = $('#address').val();
           var pin_code = $('#pin_code').val();
            name = name.trim();
            address = address.trim();
            pin_code = pin_code.trim();

            if (name == '') {
                $('#errorName').html("Please enter the resturant name.");
               count = 0;

           }

              var regex = /^[a-zA-Z ]{2,30}$/;
              if (!regex.test(name) && name != '') {
                 $('#errorName').html("Please enter the valid resturant name.");
                  count = 0;
            }

              if (address == '') {
                $('#errorAddress').html("Please enter the resturant address.");
                 count = 0;
            }
             if (pin_code == '') {
                  $('#errorPin').html("Please enter the resturant pin code.");
                  count = 0;
             }
             if (isNaN(pin_code)) {
                $('#errorPin').html("Please enter the valid pin code.");
                 count = 0;
             }
             var city = $('#city').val();
             if (city == '') {
                  $('#errorCity').html("Please select the city.");
                 count = 0;
             }

              var mobile_1 = $('#mobile_1').val();
              mobile_1 = mobile_1.trim();
             var mob_pattern = /^(?:(?:\+|0{0,2})[0-9](\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
              if (!mobile_1.match(mob_pattern) || mobile_1 == "") {
                 $('#errorMobile_1').html("Please enter the valid mobile no.");
                 count = 0;
             }

             var mobile_2 = $('#mobile_2').val();
             mobile_2 = mobile_2.trim();
             if (!mobile_2.match(mob_pattern) && mobile_2 != "") {
               $('#errorMobile_2').html("Please enter the valid mobile no.");
                 count = 0;
              }

             var email = $("#email").val();
             email = email.trim();
              var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (!email.match(pattern)) {
               $("#errorEmail").html("Please enter a valid email id.");
                  count = 0;
              }

              var opening_time = $("#opening_time").val();
              if (opening_time == '') {
                  $("#errorOpeningTime").html("Please select the opening time .");
                  count = 0;
            }
              var closing_time = $("#closing_time").val();
           if (closing_time == '') {
                 $("#errorClosingTime").html("Please select the closing time .");
                 count = 0;
             }
             var cover_area = $("#cover_area").val();
              if (cover_area == '') {
                  $("#errorCoverArea").html("Please select the cover area .");
                  count = 0;
              }
              var open_area = $("#open_area").val();
              if (open_area == '') {
                  $("#errorOpenArea").html("Please select the open area .");
                  count = 0;
             }
              var projector = $("#projector").val();
             if (projector == '') {
                  $("#errorProjector").html("Please select the live screens  projector .");
                  count = 0;
             }
              var lcd_led = $("#lcd_led").val();
             if (lcd_led == '') {
                  $("#errorLcdLed").html("Please select the live screens lcd led .");
                  count = 0;
            }
              var maximum_occupancy = $("#maximum_occupancy").val();
              if (maximum_occupancy == '') {
                  $("#errorMaxOccupancy").html("Please select the maximum occupancy.");
                  count = 0;
             }

              if (!$('input[name=vegetarian]').is(":checked") && !$('input[name=nonvegetarian]').is(":checked")) {
                $("#errorServe").html("Please select outlet serve.");
                count = 0;
           }

            if ($(".target_audience:checked").length <= 0) {
               $("#errorAudience").html("Please select targer audience.");
              count = 0;
           }

            var unique_selling = $("#unique_selling").val();
            if (unique_selling == "") {
                $("#errorUniqueSelling").html("Please enter the unique selling.");
                count = 0;
            }
            var special_dish_order = $("#special_dish_order").val();
           if (special_dish_order == "") {
                $("#errorSpecialDish").html("Please enter the special dish to order.");
                count = 0;
            }

            if (count == 0)
               return false;
		 
	 }
	 
	 /*validations for cost form*/
	 
	 $scope.costvalidation=function()
	 {
		 
		  var private_count = 1;
		  var count = 1;
            var price_regex = /^\d*(.\d{2})?$/;

            if ($('input[name=buffet]:checked').val() == 1) {

                if ($('.buffet_type:checked').length <= 0) {
                   $("#errorBuffet").html("Please selcet any buffet");
                } else {
                    $('.buffet_type').each(function() {

                       if (this.checked) {

                           var price = $(this).parent().parent().find('input[type=text]').val();

                           if (!price_regex.test(price) || price == '') {
                            $(this).parent().parent().find(".buffetPriceError").html("Please enter the valid price.");
                                count = 0;
                            } else {
                               $(this).parent().parent().find(".buffetPriceError").html("");
                           }
                       } else {
                           $(this).parent().parent().find(".buffetPriceError").html("");
                        }
                    });
                }
            }


            var with_alcohol = $("#with_alcohol").val();
            if (with_alcohol == '') {
                $("#errorWithAlcohol").html("Please enter the price.");
                count = 0;
           }

           if (!price_regex.test(with_alcohol) && with_alcohol != '') {
               $("#errorWithAlcohol").html("Please enter the valid price.");
               count = 0;
            }
           var without_alcohol = $("#without_alcohol").val();
            if (without_alcohol == '') {
                $("#errorWithoutAlcohol").html("Please enter the price.");
                count = 0;
            }

            if (!price_regex.test(without_alcohol) && without_alcohol != '') {
                $("#errorWithoutAlcohol").html("Please enter the valid price.");
                count = 0;
            }

            if ($('input[name=hookah]:checked').val() == 1) {
                var hookah_charges = $("input[name=hookah_charges]").val();

                if (!price_regex.test(hookah_charges) || hookah_charges == '') {
                    $("#errorHookah").html("Please enter the valid price.");
                   count = 0;
               }
          } else {
               $("#errorHookah").html('');
            }

            if ($('input[name=private_party]:checked').val() == 1) {

                $('.private_price').each(function() {
                   var private_charges = $(this).val();

                   if (!price_regex.test(private_charges) || private_charges == '') {
                        $(this).parent().find(".errorPrivate").html("Please enter the valid price.");
                        count = 0;
                   }
                });
            } else {
               $(".errorPrivate").html('');
          }

            if ($('#stagsYes').is(':checked')) {
                var stags_price = $("input[name=stag_price]").val();

                if (!price_regex.test(stags_price) || stags_price == '') {
                  $("#errorStags").html("Please enter the valid price.");
                  count = 0;
                }
            } else {
               $("#errorStags").html("");
           }

            if ($('#couplesYes').is(':checked')) {
               var couple_price = $("input[name=couple_price]").val();

                if (!price_regex.test(couple_price) || couple_price == '') {
                    $("#errorCouple").html("Please enter the valid price.");
                    count = 0;
               }
            } else {
                $("#errorCouple").html("");
            }

           if ($('input[name=happy_hours]:checked').val() == 1) {
                if ($('.happy-hour-day:checked').length <= 0) {
                    $("#error_Happy_hours").html("Please select atlest one day.");
                    count = 0;
                } else {
                   $("#error_Happy_hours").html("");
                }
            }
            if ($('input[name=offer]:checked').val() == 1) {
               if ($('.offer-day:checked').length <= 0) {
                   $("#error_offer_day").html("Please select atlest one offer day.");
                    count = 0;
                } else {
                    $("#error_offer_day").html("");
                }
           }

            if ($('#femalesYes').is(':checked')) {
               var female_price = $("input[name=female_price]").val();

                if (!price_regex.test(female_price) || female_price == '') {
                    $("#errorFemale").html("Please enter the valid price.");
                   count = 0;
               }
            } else {
                $("#errorFemale").html("");
           }


           if (count == 0)
                return false;
		 
	 }
	 
	 
	 
	 /*management validations*/
	$scope.managementValidation=function()
	{
		 count = 1;
            $('.management1').each(function() {

                var regex = /^[a-zA-Z0-9 ]{2,30}$/;
               var name = $(this).find('.management_name').val();
			  
                name = name.trim();

                if (!regex.test(name) || name == '') {
                    $(this).find('.errorName').html("Please enter the valid name.");
                    count = 0;
                } else {

                    $(this).find('.errorName').html("");
                }

                var designation = $(this).find('.management_designation').val();

                if (!regex.test(designation) || designation == '') {
                    $(this).find('.errorDesignation').html("Please enter the valid designation.");
                    count = 0;
                } else {
                    $(this).find('.errorDesignation').html("");
                }

               var mob = $(this).find('.management_mobile').val();
                mob = mob.trim();
                var mob_pattern = /^(?:(?:\+|0{0,2})[0-9](\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
                if (!mob.match(mob_pattern) || mob == "") {
                   $(this).find('.errorMobile').html("Please enter the valid mobile no.");
                    count = 0;
                } else {
                    $(this).find('.errorMobile').html("");
                }

                var email = $(this).find('.management_email').val();
             email = email.trim();
                var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!email.match(pattern)) {
                    $(this).find('.errorEmail').html("Please enter a valid email.");
                    count = 0;
               } else {
                    $(this).find('.errorEmail').html("");
                }



            });
           if (count == 0)
               return false;
		
	}
	 
	 
	 /*validation remark*/
	 $scope.remarkValidation=function()
	 {
		   var count = 1;
          var remark = $('#remark').val();
           var observation = $('#observation').val();
           remark = remark.trim();

           if (remark == '') {
               $('#errorRemark').html("Please enter the remark.");
               count = 0;

            }
            if (observation == '') {
                $('#errorObservation').html("Please enter the observation detail.");
                count = 0;

            }

            if (count == 0)
              return false;
      
	 }
	 
	 /*validations for music*/
	 $scope.musicValidation=function()
	 {
		 
		
            count = 1;
            $('.artist').each(function() {

                var regex = /^[a-zA-Z0-9 ]{2,30}$/;
                var name = $(this).find('.artist_name').val();
                name = name.trim();

                if (!regex.test(name) || name == '') {
                    $(this).find('.errorName').html("Please enter the valid name.");
                    count = 0;
                } else {

                    $(this).find('.errorName').html("");
                }

                var designation = $(this).find('.artist_music').val();

               if (!regex.test(designation) || designation == '') {
                    $(this).find('.errorMusic').html("Please enter the valid music.");
                    count = 0;
               } else {
                    $(this).find('.errorMusic').html("");
                }

               var mob = $(this).find('.artist_phone').val();
                mob = mob.trim();
                var mob_pattern = /^(?:(?:\+|0{0,2})[0-9](\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
                if (!mob.match(mob_pattern) || mob == "") {
                    $(this).find('.errorMobile').html("Please enter the valid mobile no.");
                    count = 0;
                } else {
                    $(this).find('.errorMobile').html("");
                }

                var email = $(this).find('.artist_email').val();
                email = email.trim();
                var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!email.match(pattern)) {
                   $(this).find('.errorEmail').html("Please enter a valid email.");
              } else {
                 $(this).find('.errorEmail').html("");
                }



            });
            if (count == 0)
                return false;
      

		 
	 }
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 /*VALIDATION EXTRA DETAILS*/
		 $scope.extraValidation=function()
		 {
			 var count = 1;

             if ($(".smoking:checked").length <= 0) {
                 $("#errorSmoking").html("Please select smoking area.");
                 count = 0;
             }

             if (count == 0)
                 return false;
		
		 }
		
		
		$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
	$('.button_div ul.tabs .cost').click(function(){
		$(".tab-link1").addClass('current');
	});
	$('.button_div ul.tabs .management').click(function(){
		$(".tab-link2").addClass('current');
	});
	$('.button_div ul.tabs .category').click(function(){
		$(".tab-link3").addClass('current');
	});
	$('.button_div ul.tabs .music').click(function(){
		$(".tab-link4").addClass('current');
	});
	$('.button_div ul.tabs .extraDetail').click(function(){
		$(".tab-link5").addClass('current');
	});
	$('.button_div ul.tabs .remark').click(function(){
		$(".tab-link6").addClass('current');
	});

})
	 
});

app.controller('addController', function ($scope, $location, $anchorScroll, $window, myService) {
var data=JSON.parse(localStorage.getItem('restaurant_data'));
if(data)
{
	$scope.listing=data;
}
	$scope.addpage=function()
	{   var key=0;

	if($scope.listing)
		{
	 key = $scope.listing.length;
		}
       
       $location.path('/Restaurant/'+key);	   
		
	}
	
	$scope.deletepage=function(index)
	{
		data.splice(index, 1); 
		$window.localStorage && $window.localStorage.setItem('restaurant_data', JSON.stringify(data));
		
	}
	
	
	
});

	
	
	
	
	
	
	
	

