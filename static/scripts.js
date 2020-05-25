// var data = fetch('http://127.0.0.1:8000/posts/');
// console.log(data.response);

function delete_post($id) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Token ec3723b708fa751ecf479bc21f9d1e98d2c3ab1f");
	myHeaders.append("Cookie", "csrftoken=L1wv4R3EztQ708Bk581kFmgcRoHQMf6fOw4B05HbHtPxUnaXpGlCIyc5bTwuZAtP; sessionid=o0n8skeapfi1gsw3ya3d51mbwveppvdq");
	myHeaders.append("Access-Control-Allow-Origin", "*");
	
	var formdata = new FormData();
	formdata.append("username", "admin");
	formdata.append("password", "bharath99*");

	var requestOptions = {
	  method: 'DELETE',
	  headers: myHeaders,
	  body: formdata,
	  redirect: 'follow'
	};

	fetch(`http://127.0.0.1:8000/list-update-delete/${id}`, {mode: 'cors'}, requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
}



fetch('http://127.0.0.1:8000/posts/', {mode: 'cors'})
  .then((res) => res.json())
  // .then(posts => console.log(posts))
  .then(function(data) {
  	let posts = data;
  	console.log(posts);

  	var table = document.getElementById('myTable');

  	for(var i = 0; i < posts.length; i++){
  		
  		var row = `<tr>
  						<td>${posts[i].title}</td>
  						<td>${posts[i].description}</td>
  						<td>${posts[i].timestamp}</td>
  						<td><a href=http://127.0.0.1:8000/edit/${posts[i].id}><button class='btn btn-info'>Edit</button></a></td>
  						<td><a href=http://127.0.0.1:8000/delete/${posts[i].id}><button class='btn btn-danger' onclick="delete_post(${posts[i].id})">Delete</button></a></td>
  				   </tr>`
  		// let title = posts[i].title;
  		
  		table.innerHTML += row

  	}
  })
  .catch(error => console.log('Request failed', error))

