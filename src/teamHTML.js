const teamHTML = (teamCards) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-13 jumbotron mb-3 bg-primary text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
      <div class="row">
        ${teamCards}
      </div>
    </div>
  </body>
</html>
`;
};
module.exports = teamHTML;
