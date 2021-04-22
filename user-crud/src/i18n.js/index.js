import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      title: "User manager",
      add: "Add",
      name: "Name:",
      birthdate: "Birthdate:",
      modalMessage1: "Are you sure you want to remove",
      modalMessage2: "permanently?",
      cancel: "Cancel",
      remove: "Remove",
      updateTiTle: "Update user",
      update: "Update",
      addNewUser: "Add new user",
      save: "Save",
      messageSave1: "The user named",
      messageSave2: "has been added successfully.",
      messageUpdate: "the user has been modified successfully",
    },
  },
  es: {
    translation: {
      title: "Gestión de usuarios",
      add: "Añadir nuevo usuario",
      name: "Nombre:",
      birthdate: "Día de nacimiento:",
      modalMessage1: "Estás seguro que deseas eliminar a",
      modalMessage2: "definitivamente?",
      cancel: "Cancelar",
      remove: "Eliminar",
      updateTiTle: "Actualizar usuario",
      update: "Actualizar",
      addNewUser: "Añade un nuevo usuario",
      save: "Guardar",
      messageSave1: "El usuario llamado",
      messageSave2: "ha sido eliminado correctamente",
      messageUpdate: "El usuario ha sido modificado correctamente",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
