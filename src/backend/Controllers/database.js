export const fetchJsonData = async (path = "users") => {
  try {
    const response = await fetch("/database/database.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    const { users, projects, services } = data;

    // localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("services", JSON.stringify(services));

    if (!path) {
      // console.log("✅ Full JSON Data Retrieved:", data);
      return { users, projects, services }; // Return main objects if no path is provided
    }

    // Split path by "/" for nested object retrieval
    const keys = path.split("/");
    let result = data;

    for (const key of keys) {
      if (result[key] === undefined) {
        throw new Error(`Path "${path}" not found in JSON data`);
      }
      result = result[key];
    }
    return result;
  } catch (error) {
    console.error("❌ Error fetching JSON data:", error.message);
    return null;
  }
};
