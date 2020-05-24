// var data = fetch('http://127.0.0.1:8000/posts/');
// console.log(data.response);

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
  						<td><button class='btn btn-info' onclick="myFunction()">Edit</button></td>
  						<td><a href='/delete/${i+1}' class='btn btn-danger'>Delete</a></td>
  				   </tr>`
  		// let title = posts[i].title;
  		
  		table.innerHTML += row

  	}
  })
  .catch(error => console.log('Request failed', error))

