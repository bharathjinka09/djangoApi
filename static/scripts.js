// var data = fetch('http://127.0.0.1:8000/posts/');
// console.log(data.response);

fetch('http://127.0.0.1:8000/posts/', {mode: 'cors'})
  .then((res) => res.json())
  // .then(posts => console.log(posts))
  .then(function(data) {
  	let posts = data;
  	console.log(posts)

  	return posts.map(function (post) {
  		
  		let title = post.title;
  		console.log(title);
  		
  		let description = post.description;
  		console.log(description);

  		// let timestamp = post.timestamp;
  		// console.log(timestamp);
  		
  		let owner = post.owner;
  		console.log(owner);
 
  	})
  })
  .catch(error => console.log('Request failed', error))

