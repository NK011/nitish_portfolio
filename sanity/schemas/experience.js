export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            title: "JobTitle",
            type: "string",
        },
        {
            name: "companyImage",
            title: "CompanyImage",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "company",
            title: "Company",
            type: "text",
        },
        {
            name: "dateStarted",
            title: "Date Started",
            type: "date",
        },
        {
            name: "dateEnded",
            title: "Date Ended",
            type: "date",
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
