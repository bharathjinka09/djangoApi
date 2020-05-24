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
  						<td>${posts[i].owner}</td>
  						<td>${posts[i].timestamp}</td>

  				   </tr>`
  		let title = posts[i].title;
  		
  		table.innerHTML += row

  	}
  })
  .catch(error => console.log('Request failed', error))

