# 🌐 Google Translate Clone

A Google Translate clone that uses the **OpenAI API** to translate text between languages, built with **Next.js and TypeScript**.

🔗 **Live demo:** [google-translate-clon.vercel.app](https://google-translate-clon.vercel.app)

## ✨ Features

- Automatic source-language detection
- Translates as you type, using a custom **debounce** hook
- Swap source and target languages
- Translation handled by a Next.js API route, so the API key never reaches the browser
- Fully typed with TypeScript, with logic split into custom hooks and services

## 🛠️ Tech stack

Next.js · React · TypeScript · OpenAI API

## 🚀 Run locally

```bash
git clone https://github.com/leandrobattocchio/google-translate-clon.git
cd google-translate-clon
npm install
```

Create a `.env.local` file:

```env
API_KEY=your_openai_api_key
```

```bash
npm run dev
```

---

Made by [Leandro Battocchio](https://leandrobattocchio.github.io) · [LinkedIn](https://www.linkedin.com/in/leandro-battocchio/)
