import de from "~~/translations/de";
import en from "~~/translations/en";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    ...de,
    ...en,
  },
}));
