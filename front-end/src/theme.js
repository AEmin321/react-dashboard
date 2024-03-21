export const lightTheme = {
  white: {
    100: "#fdfdfd",
    200: "#fbfbfc",
    300: "#f8f9fa",
    400: "#f6f7f9",
    500: "#f4f5f7",
    600: "#c3c4c6",
    700: "#929394",
    800: "#626263",
    900: "#313131",
  },
  primary: {
    100: "#ffebdf",
    200: "#ffd7c0",
    300: "#ffc3a0",
    400: "#ffaf81",
    500: "#ff9b61",
    600: "#cc7c4e",
    700: "#995d3a",
    800: "#663e27",
    900: "#331f13",
  },
  secondary: {
    100: "#d2d2d5",
    200: "#a5a5ab",
    300: "#787880",
    400: "#4b4b56",
    500: "#1e1e2c",
    600: "#181823",
    700: "#12121a",
    800: "#0c0c12",
    900: "#060609",
  },
};

function reversePalette(lightTheme) {
  const reversedTokens = {};
  Object.entries(lightTheme).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const darkTheme = reversePalette(lightTheme);

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
              main: lightTheme.grey[50],
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
              default: lightTheme.grey[0],
              alt: lightTheme.grey[50],
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
