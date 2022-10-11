export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of project",
            type: "string",
        },
        {
            name: "url",
            title: "url",
            type: "url",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "projectImage",
            title: "Project Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
