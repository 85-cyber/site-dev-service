// src/hooks/useContexts.jsx
export const useContacts = () => {
  return {
      email: import.meta.env.VITE_EMAIL || "your.business@gmail.com",
      phone: import.meta.env.VITE_PHONE || "+7 (702) 581-84-46",
      phoneRaw: import.meta.env.VITE_PHONE_RAW || "77025818446",
      formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/manlpklb",
      social: {
          whatsapp: import.meta.env.VITE_WHATSAPP || "https://wa.me/77025818446",
          telegram: import.meta.env.VITE_TELEGRAM || "https://t.me/webcraft_temp",
          instagram: import.meta.env.VITE_INSTAGRAM || "https://instagram.com/webcraft_temp",
          facebook: import.meta.env.VITE_FACEBOOK || "https://facebook.com/webcraft_temp",
          vk: import.meta.env.VITE_VK || "https://vk.com/webcraft_temp"
      }
  };
};

// Можно добавить другие контекстные хуки здесь, например:
export const useTheme = () => {
  // логика темы
};

export const useAuth = () => {
  // логика авторизации
};