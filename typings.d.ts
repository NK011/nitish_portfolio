interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: strng;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    heroImage: Image;
    backgroundInfo: string;
    profilePic: Image;
    email: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
    directoinLeft: boolean;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    projectImage: Image;
    url: string;
    description: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: date;
    dateEnded: date;
    points: string[];
}
