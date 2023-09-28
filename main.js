class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const monse = new Student ({
    name: "Monserrat",
    username: "monseP12",
    email: "monserrat@gmail.com",
    twitter: "monseP12"
});

const joana = new Student ({
    name: "Joana",
    username: "joanaP12",
    email: "joanaPG12@gmail.com",
    instagram: "JOANAP12"
});