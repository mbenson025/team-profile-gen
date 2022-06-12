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

const createTeam = (teamArr) => {
  teamList = [];
  for (var i = 0; i < teamArr.length; i++) {
    const role = teamArr[i].getRole();

    if (role == 'Manager') {
      teamList.push(managerGen(teamArr[i]));
    }
    if (role == 'Engineer') {
      teamList.push(managerGen(teamArr[i]));
    }
    if (role == 'Intern') {
      teamList.push(managerGen(teamArr[i]));
    }
  }
  console.log(teamList.join(''));
};

module.exports = createTeam;
