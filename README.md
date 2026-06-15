# Persisto

App di crescita personale — +1% al giorno.

## File del progetto

```
persisto/
├── index.html                  # App principale
├── netlify.toml                # Configurazione Netlify
└── netlify/
    └── functions/
        └── chat.js             # Proxy sicuro per API Anthropic
```

## Deploy su Netlify

1. Carica questi file su GitHub in un repository chiamato `persisto`
2. Collega il repository a Netlify
3. In Netlify → Site settings → Environment variables, aggiungi:
   - Nome: `ANTHROPIC_API_KEY`
   - Valore: la tua API key da console.anthropic.com
4. Rideploya il sito

## Sviluppo locale

Per testare in locale installa Netlify CLI:
```
npm install -g netlify-cli
netlify dev
```
