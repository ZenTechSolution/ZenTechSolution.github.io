class User {
  constructor({
    id,
    first_name,
    last_name,
    email,
    role,
    password,
    password_text,
    facebook,
    github,
    linkedin,
    twitter,
    address,
    img_path,
    description,
    education = [],
    skills = [],
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.role = role;
    this.password = password;
    this.password_text = password_text;
    this.facebook = facebook;
    this.github = github;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.address = address;
    this.img_path = img_path;
    this.description = description;
    this.education = education; // Array of Education objects
    this.skills = skills; // Array of Skill objects
  }
}

class Education {
  constructor({ id, name, type, institute, from, to, description }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.institute = institute;
    this.from = from;
    this.to = to;
    this.description = description;
  }
}

class Skill {
  constructor({ id, name, img_path, description }) {
    this.id = id;
    this.name = name;
    this.img_path = img_path;
    this.description = description;
  }
}

export { User, Education, Skill };
