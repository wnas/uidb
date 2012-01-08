/*
	script for Uit In Den Bosch
*/
// http://www.bosschepodia.nl/
// http://www.musicfrom.nl/api/concerts.php?key=dbd656e8cc0292582b4469e8b2d3e2e1dd9c81a2&regionId=15
var uidb = function(){
	var conf = {
		bp : 'http://www.bosschepodia.nl/',
		mfn : 'http://www.musicfrom.nl/api/concerts.php?key=',
		Key: 'dbd656e8cc0292582b4469e8b2d3e2e1dd9c81a2',
		db : '&eventType=concert',//,2546,1180,1207'
		reg: '&regionId=',
		ven : '&venueId='
	},	parseXml = function(xml){
			$('section').append('<ul id="test"/>');
			
			$(xml).find("concert").each(function(){
			//	window.console.log('xml '+$(this));
			//	var img = $(this).find('imageUrl').text();
				var web 	= $(this).find('artists').find('website').text(),
					name 	= $(this).find('artists').find('name').text(),
					street 	= $(this).find('location').find('address').text(),
					city  	= $(this).find('location').find('city').text(),
					phone  	= $(this).find('location').find('telephone').text(),
					email	= $(this).find('location').find('email').text()
				$('#test').append('<li>'+
					'<h1>'+$(this).find('title').text()+'</h1><section class="hcard"><h1 class="fn">'+
					$(this).find('venueName').text()+'</h1><p class="address"><span class="street-address">'+
					street+'</span><span class="locallity">'+city+'</span></p><p><span class="tel">'+
					phone+'</span><a href="mailto:'+email+'">'+email+'</a></p></section><time>'+
					$(this).find('date').text()+'</time><p><a href="'+web+'">'+
					name+'</a></p>'+
					'</li>');
				//	console.log('img '+ $(this.find('artists artist imageURL').text()) )
			});
	},	build = function(){
		$.ajax({
			type: "GET",
		//	url: conf.mfn+conf.Key+conf.db+conf.reg+dataList.places.Den_Bosch.it+'&data=full&items=10',
			url : conf.mfn+conf.Key+'&data=full',
			dataType: "xml",
			success: parseXml
		});
	//	$('body').load(conf.mfn+conf.Key+conf.db+'&data=full');
	},	init = function(){
		$.getScript('js/data.js',function(){
			build()
			console.log(dataList.places.Utrecht);
		});
		
		
	};
	return {
		init:init
	};
}();

uidb.init();

//http://www.musicfrom.nl/api/concerts.php?key=1f3d0b22037e3ae67e903f838c434cb4

// 'http://www.musicfrom.nl/api/concerts.php?regionId=15&genreId=8&data=full'

/*
	<concert id="128084">
		<lastUpdate unixtime="1322129017">
			<![CDATA[ Thu, 24 Nov 2011 11:03:37 +0100 ]]>
			</lastUpdate>
		<type>
			<![CDATA[ concert ]]>
		</type>
		<date unixtime="1323990000">
		<![CDATA[ Fri, 16 Dec 2011 00:00:00 +0100 ]]>
		</date>
	<title>
	<![CDATA[ Shit Is Bangin' ]]>
	</title>
	<description/>
	<genre id="9">
	<![CDATA[ Dance / Elektronisch ]]>
	</genre>
	<additionalGenres/>
	<flyerUrl/>
	<doorsOpenTime/>
	<startTime>
	<![CDATA[ 23:00:00 ]]>
	</startTime>
	<endTime/>
	<detailUrl/>
	<venueName>
	<![CDATA[ P79 ]]>
	</venueName>
	<city>
	<![CDATA[ Den Bosch ]]>
	</city>
	<entry>
	<![CDATA[ € 5,- ]]>
	</entry>
	<startPresale unixtime="943916400">
	<![CDATA[ 943916400 ]]>
	</startPresale>
	<artists>
	<artist id="11454">
	<name>
	<![CDATA[ Diggy Dex ]]>
	</name>
	<genre id="4">
	<![CDATA[ Hiphop / Rap ]]>
	</genre>
	<imageUrl>
	<![CDATA[
	http://media.musicfrom.nl/file.php/Diggy%20Dex.jpg?id=69971,etq56c7
	]]>
	</imageUrl>
	<website>
	<![CDATA[
	http://www.musicfrom.nl/artiesten/11454/diggy-dex.html
	]]>
	</website>
	</artist>
	<artist>
	<name>
	<![CDATA[ Dns ]]>
	</name>
	</artist>
	<artist>
	<name>
	<![CDATA[ Ezd ]]>
	</name>
	</artist>
	</artists>
	<location id="1180">
	<name>
	<![CDATA[ P79 ]]>
	</name>
	<stage/>
	<imageUrl>
	<![CDATA[
	http://media.musicfrom.nl/file.php/P79.jpg?id=83472,2h01z9e
	]]>
	</imageUrl>
	<province id="9">
	<![CDATA[ Noord-Brabant ]]>
	</province>
	<region id="15">
	<![CDATA[ Den Bosch ]]>
	</region>
	<city>
	<![CDATA[ Den Bosch ]]>
	</city>
	<address>
	<![CDATA[ Markt 79 ]]>
	</address>
	<zipcode>
	<![CDATA[ 5211 JX ]]>
	</zipcode>
	<telephone>
	<![CDATA[ 073-8510448 ]]>
	</telephone>
	<fax/>
	<email>
	<![CDATA[ cafep79@gmail.com ]]>
	</email>
	<website>
	<![CDATA[ http://www.p79.nl ]]>
	</website>
	</location>
	</concert>
*/