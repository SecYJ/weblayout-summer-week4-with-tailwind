module.exports = {
    content: ["./app/**/*.{html,ejs}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#aa0601",
                    dark: "#650300",
                },
                accent: "#FBF2F2",
            },
        },
        container: {
            center: true,
            padding: ".75rem",
        },
        screens: {
            md: "768px",
            lg: "1024px",
        },
    },
    plugins: [
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/typography"),
    ],
};
