export const lightTheme = {
  grey: {
    100: "#fcfcfc",
    200: "#f8f8f8",
    300: "#f5f5f5",
    400: "#f1f1f1",
    500: "#EEEEEE",
    600: "#bebebe",
    700: "#8f8f8f",
    800: "#4ECCA3",
    900: "#303030",
  },
  primary: {
    100: "#dcf5ed",
    200: "#b8ebda",
    300: "#95e0c8",
    400: "#71d6b5",
    500: "#4ecca3",
    600: "#232931",
    700: "#2f7a62",
    800: "#1f5241",
    900: "#102921",
  },
  secondary: {
    100: "#232931",
    200: "#232931",
    300: "#4ECCA3",
    400: "#4f545a",
    500: "#232931",
    600: "#1c2127",
    700: "#15191d",
    800: "#0e1014",
    900: "#fefefe",
  },
};

export const darkTheme = {
  grey: {
    100: "#d3d4d6",
    200: "#a7a9ad",
    300: "#7b7f83",
    400: "#4f545a",
    500: "#232931",
    600: "#1c2127",
    700: "#15191d",
    800: "#4ECCA3",
    900: "#07080a",
  },
  primary: {
    100: "#dcf5ed",
    200: "#b8ebda",
    300: "#95e0c8",
    400: "#71d6b5",
    500: "#4ecca3",
    600: "#232931",
    700: "#2f7a62",
    800: "#1f5241",
    900: "#102921",
  },
  secondary: {
    100: "#fcfcfc",
    200: "#f8f8f8",
    300: "#4ECCA3",
    400: "#f1f1f1",
    500: "#eeeeee",
    600: "#bebebe",
    700: "#8f8f8f",
    800: "#5f5f5f",
    900: "#393E46",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              ...lightTheme.primary,
              main: lightTheme.grey[500],
              light: lightTheme.primary[500],
            },
            secondary: {
              ...lightTheme.secondary,
              main: lightTheme.primary[500],
            },
            neutral: {
              ...lightTheme.grey,
              main: lightTheme.grey[500],
            },
            background: {
              default: lightTheme.grey[500],
              alt: lightTheme.grey[500],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              ...darkTheme.primary,
              main: darkTheme.primary[500],
              light: darkTheme.primary[500],
            },
            secondary: {
              ...darkTheme.secondary,
              main: darkTheme.primary[500],
              light: darkTheme.primary[500],
            },
            neutral: {
              ...darkTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.grey[500],
              alt: darkTheme.grey[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
