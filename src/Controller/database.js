export const fetchJsonData = async () => {
  try {
    const response = await fetch("/database/database.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch data : : ${response.status}`);
    }
    const data = await response.json();
    const { users, projects, services } = data;
    localStorage.setItem("projects", JSON.stringify(projects));
    transformService(services);
    editUsers(users, projects);
  } catch (error) {
    console.error("Error fetching JSON data : : ", error.message);
    return null;
  }
};
////////////////////////////////////////////////////////////////////
async function editUsers(users, projects) {
  const projectArr = Object.values(projects);

  const formattedUsers = users.map((user) => ({
    ...user,
    projects: user.projects
      .map((projectId) =>
        projectArr.find((project) => project.profile.id === projectId)
      )
      .filter(Boolean),
  }));

  localStorage.setItem("users", JSON.stringify(formattedUsers));
}
////////////////////////////////////////////////////////////////////
async function transformService(services) {
  let transformData = [];
  transformData = services.map((service) => {
    return service.profile;
  });

  localStorage.setItem("services", JSON.stringify(services));

  localStorage.setItem("nav-services", JSON.stringify(transformData));
}
////////////////////////////////////////////////////////////////////
