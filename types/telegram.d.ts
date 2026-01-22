interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  // Добавь другие методы, если нужно позже (close, etc.)
}

interface Window {
  Telegram?: {
    WebApp?: TelegramWebApp;
  };
}
