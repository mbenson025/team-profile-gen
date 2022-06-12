const managerGen = (manager) => {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="my-4 card">
            <div class="card-header bg-dark text-white">
              <h3 class="card-title">${manager.name}</h3>
              <h4 class="card-subtitle">Manager</h3>
            </div>
            <div class="card-body bg-light p-3">
              <ul class="list-group">
                <li class="list-group-item">${manager.id}</li>
                <li class="list-group-item">
                  Email: <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">Office Number:${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
  `;
};

const engineerGen = (engineer) => {
  return `
  <div class="col-lg-3 col-md-4 col-sm-6">
  <div class="my-4 card">
    <div class="card-header bg-dark text-white">
      <h3 class="card-title">${engineer.name}</h3>
      <h4 class="card-subtitle">Engineer</h4>
    </div>
    <div class="card-body bg-light p-3">
      <ul class="list-group">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
        </li>
      </ul>
    </div>
  </div>
</div>
  `;
};

const internGen = (intern) => {
  return `
  <div class="col-lg-3 col-md-4 col-sm-6">
  <div class="my-4 card">
    <div class="card-header bg-dark text-white">
      <h3 class="card-title">${intern.name}</h3>
      <h4 class="card-subtitle">Intern</h4>
    </div>
    <div class="card-body bg-light p-3">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
</div>
  `;
};

const createTeam = (teamArr) => {
  teamList = [];
  for (var i = 0; i < teamArr.length; i++) {
    const role = teamArr[i].getRole();

    if (role == 'Manager') {
      teamList.push(managerGen(teamArr[i]));
    }
    if (role == 'Engineer') {
      teamList.push(engineerGen(teamArr[i]));
    }
    if (role == 'Intern') {
      teamList.push(internGen(teamArr[i]));
    }
  }
  console.log(teamList.join(''));
};

module.exports = createTeam;
