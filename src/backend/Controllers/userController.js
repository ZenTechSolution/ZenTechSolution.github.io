import { fetchJsonData } from "./database";
import { loadAllProjectsData } from "./projectController";

///////////////////////////////////////////////////
export const loadAllUsersData = async () => {
  let data = await fetchJsonData("users");
  let dataArr = Object.values(data);

  let projects = await loadAllProjectsData();

  // console.log(projects);

  editUsers(dataArr, projects);
};
///////////////////////////////////////////////////
async function editUsers(users, projects) {
  const projectArr = Object.values(projects); // Convert projects object to an array

  const formattedUsers = users.map((user) => ({
    ...user, // Copy existing user properties
    projects: user.projects
      .map((projectId) =>
        projectArr.find((project) => project.profile.id === projectId)
      )
      .filter(Boolean), // Remove undefined values
  }));
  localStorage.setItem("users", JSON.stringify(formattedUsers));

  // console.log(projects);

  transformData(users);

  return formattedUsers; // Return the new formatted users array
}

async function transformData(users) {
  let projects = await fetchJsonData("projects");

  let projectsWithTeams = {};

  // Initialize projects with default structure
  for (let projectId in projects) {
    projectsWithTeams[projectId] = {
      profile: projects[projectId].profile,
      project_img: projects[projectId].project_img || [], // Ensure an empty array if missing
      team: [],
    };
  }

  // Associate users with projects
  users.forEach((user) => {
    user.projects.forEach((projectId) => {
      if (projectsWithTeams[projectId]) {
        projectsWithTeams[projectId].team.push(user.profile);
      }
    });
  });

  localStorage.setItem("projectUser", JSON.stringify(projectsWithTeams));

  return projectsWithTeams;
}
