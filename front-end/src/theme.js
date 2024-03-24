export const lightTheme = {
  grey: {
    100: "#fcfcfc",
    200: "#f8f8f8",
    300: "#f5f5f5",
    400: "#f1f1f1",
    500: "#eeeeee",
    600: "#bebebe",
    700: "#8f8f8f",
    800: "#5f5f5f",
    900: "#303030",
  },
  primary: {
    100: "#dcf5ed",
    200: "#b8ebda",
    300: "#95e0c8",
    400: "#71d6b5",
    500: "#4ecca3",
    600: "#3ea382",
    700: "#2f7a62",
    800: "#1f5241",
    900: "#102921",
  },
  secondary: {
    100: "#d3d4d6",
    200: "#a7a9ad",
    300: "#7b7f83",
    400: "#4f545a",
    500: "#232931",
    600: "#1c2127",
    700: "#15191d",
    800: "#0e1014",
    900: "#07080a",
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
    800: "#0e1014",
    900: "#07080a",
  },
  primary: {
    100: "#dcf5ed",
    200: "#b8ebda",
    300: "#95e0c8",
    400: "#71d6b5",
    500: "#4ecca3",
    600: "#3ea382",
    700: "#2f7a62",
    800: "#1f5241",
    900: "#102921",
  },
  secondary: {
    100: "#fcfcfc",
    200: "#f8f8f8",
    300: "#f5f5f5",
    400: "#f1f1f1",
    500: "#eeeeee",
    600: "#bebebe",
    700: "#8f8f8f",
    800: "#5f5f5f",
    900: "#303030",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for light mode
            primary: {
              ...lightTheme.primary,
              main: lightTheme.primary[400],
              light: lightTheme.primary[400],
            },
            secondary: {
              ...lightTheme.secondary,
              main: lightTheme.secondary[300],
            },
            neutral: {
              ...lightTheme.grey,
              main: lightTheme.grey[500],
            },
            background: {
              default: lightTheme.primary[600],
              alt: lightTheme.primary[500],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              ...darkTheme.primary,
              main: lightTheme.grey[300],
              light: lightTheme.grey[100],
            },
            secondary: {
              ...darkTheme.secondary,
              main: lightTheme.secondary[600],
              light: lightTheme.secondary[700],
            },
            neutral: {
              ...darkTheme.grey,
              main: lightTheme.grey[500],
            },
            background: {
              default: lightTheme.grey[100],
              alt: lightTheme.grey[100],
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
