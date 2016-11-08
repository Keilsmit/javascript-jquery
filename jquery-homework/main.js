
$.getJSON('https://stormy-oasis-22187.herokuapp.com/api/posts')
  .then(function(x){
        x.posts.forEach(function(chirp){
          $('#posts').append('<div><table><br><br><tr>' + avatar_display(chirp) + '</div><h3>' + chirp.user.email+ '</h3><h4>' + chirp.user.name+ '</h4><br><p>' + chirp.body + '<p><br><p>' + chirp.created_at + '<p><br><br></tr></div>')
    })
    // Closes then/function
        })
      // closes first getJSON


    function avatar_display(chirp){
      // console.log(chirp.user.avatar)
        if(chirp.user.avatar == null){
          return '<img src="https://robohash.org/' + chirp.user.id + '?size=100x100" />'
        } else {
          return '<img src="https://stormy-oasis-22187.herokuapp.com' + chirp.user.avatar + '" />'
        }
      }
