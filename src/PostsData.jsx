const postsData = [
    {
        profilePic: 'https://i.pinimg.com/originals/7f/4f/4b/7f4f4bbe72611f6851e058aaff33209f.png',
        profileAlt: 'Profile Pic',
        name: "AJ Styles",
        text: "The Phenomenal AJ Styles Finally Grandslam Champ",
        img: "https://media.comicbook.com/2021/04/wwe-aj-styles-grand-slam-champion-1263994-1280x0.jpeg",
        alt: "AJ Styles Grandslam Champ",
        like: 10000000,
        dislike: 0
    },
    {
        profilePic: 'https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png',
        profileAlt: 'Profile Pic',
        name: "JavaScript",
        text: "JavaScript > Python",
        img: "",
        alt: "",
        like: 100,
        dislike: 0
    },
    {
        profilePic: 'https://miro.medium.com/max/1200/0*taakdwZB01TYHzI3.jpg',
        profileAlt: 'Profile Pic',
        name: "Elon Musk",
        text: "Going to Mars",
        img: "data:image/jpeg;base64,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",
        alt: "AJ Styles Grandslam Champ",
        like: 10000000,
        dislike: 0
    },
    {
        profilePic: 'https://static.wikia.nocookie.net/p__/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest?cb=20200617174101&path-prefix=protagonist',
        profileAlt: 'Profile Pic',
        name: "Rishav Sarkar",
        text: "Join this Discord Server https://discord.gg/XKScVyVFt8",
        img: "",
        alt: "",
        like: 10000000,
        dislike: 0
    },
    {
        profilePic: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kvUGP06XxwIDPMDgrganQ/d022a2a43a52926fc81f9c8784d24f1b/media0.jpg',
        profileAlt: 'Profile Pic',
        name: "Prince of Persia Fan",
        text: "#BringBackPrinceOfPersia",
        img: "",
        alt: "",
        like: 10000000,
        dislike: 0
    },
    {
        profilePic: 'https://pbs.twimg.com/profile_images/1347621012813340672/_Yr1lqi7_400x400.jpg',
        profileAlt: 'Profile Pic',
        name: "Rick Astley",
        text: "Thinking of making another Rickroll song 🤔🤔",
        img: "https://imageproxy.themaven.net//https%3A%2F%2Fedm.com%2F.image%2FMTc0NjYyNjI0ODg4MjM1Mzg2%2Fscience-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png",
        alt: "",
        like: 10000000,
        dislike: 0
    },
    {
        profilePic: 'https://wallpaperaccess.com/full/556321.jpg',
        profileAlt: 'Profile Pic',
        name: "Particle",
        text: "I am noob",
        img: "",
        alt: "",
        like: 10000000,
        dislike: 0
    }
];

export default postsData;