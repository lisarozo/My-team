
function generateHTML(data) {

return `<!DOCTYPE HTML>
<html lang="en">
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</head>
<body>
<!-- <h1>Test</h1> -->
    <nav class="navbar navbar-dark bg-dark text-center">
        <span class="navbar-brand mb-0 h1 ">My Team</span>
    </nav>
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card-body">
    <h5 class="luis-manager">Luis Manager</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 1</li>
    <li class="list-group-item">Email: luis@gmail.com</li>
    <li class="list-group-item">Office Number: 512-999-9999</li>
  </ul>
    </div>
    <div class="col-sm">
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="alex-engineer">Alex Engineer</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 2</li>
    <li class="list-group-item">Email: alex@gmail.com</li>
    <li class="list-group-item">GitHub: alexl</li>
  </ul>
    </div>
    <div class="col-sm">
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="cindy-engineer">Cindy Engineer</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 3</li>
    <li class="list-group-item">Email: cindy@gmail.com</li>
    <li class="list-group-item">GitHub: cindyp</li>
  </ul>
    </div>
  </div>
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="tommy-engineer">Tommy Engineer</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 4</li>
    <li class="list-group-item">Email: tommy@gmail.com</li>
    <li class="list-group-item">GitHub: tommyc</li>
  </ul>
    </div>
    <div class="col-sm">
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="johny-intern">Johny Intern</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 5</li>
    <li class="list-group-item">Email: johny@gmail.com</li>
    <li class="list-group-item">School: University</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>
</div>
    </div>
    </body>
</html>`

}

module.exports = generateHTML;