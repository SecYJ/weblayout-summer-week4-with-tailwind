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
                brown: {
                    light: "#5F3E2D",
                    dark: "#B75929",
                },
                gray: {
                    light: "#555",
                },
            },
        },
        container: {
            center: true,
            padding: ".75rem",
        },
        screens: {
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [
        // require("@tailwindcss/forms"),
        // require("@tailwindcss/typography"),
    ],
};
