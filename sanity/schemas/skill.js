export default {
    name: "skill",
    title: "skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of skill",
            type: "string",
        },
        {
            name: "progress",
            title: "Progress",
            type: "number",
            description: "Progress of skill between 0 and 100",
            validation: (Rule) => Rule.min(0).max(100),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "directionLeft",
            title: "DirectionLeft",
            type: "boolean",
        },
    ],
};
