
export interface Me {
  name: string;
  about: About;
  photo: string;
  experience: Experience[];
}

export interface Experience {
  endDate: string;
  startDate: string;
  title: string;
  company: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface About {
  description: string;
  skills: string[];
}

export interface Contact {
  email: string;
  phone: string;
  github: string;
}

export default Me;


