# LoopLab Frontend

Landing page y plataforma de LoopLab - Learning Designed Around You.

##  Desarrollo

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Build para producción
npm run build

# Ver build en producción
npm start
```

La app corre en http://localhost:3000

##  Deploy

### Opción 1: Firebase Hosting (Recomendado)

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

### Opción 2: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

##  Configuración

### Formspree (Waitlist)

1. Ir a https://formspree.io
2. Crear cuenta gratis
3. Crear formulario nuevo
4. Copiar el endpoint en `lib/firebase.ts`:

```typescript
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_FORM_ID";
```

### Firebase (Opcional - para escalar)

1. Ir a https://console.firebase.google.com
2. Crear proyecto "LoopLab"
3. Agregar app web
4. Copiar credenciales en `lib/firebase.ts`

##  Estructura

```
frontend/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página home
│   └── globals.css     # Estilos globales
├── components/
│   ├── Navbar.tsx      # Navegación
│   ├── Hero.tsx        # Sección hero
│   ├── Stats.tsx       # Estadísticas
│   ├── Valores.tsx     # Valores de marca
│   ├── Programas.tsx   # Programas
│   ├── ComoFunciona.tsx # Cómo funciona
│   ├── Waitlist.tsx    # Formulario waitlist
│   └── Footer.tsx      # Footer
├── lib/
│   └── firebase.ts     # Configuración Firebase/Formspree
└── public/             # Assets estáticos
```

##  Brand Colors

- Indigo: `#0D1B3D`
- Turquesa: `#2BC4C8`
- Dorado: `#D4AF37`
- Blanco: `#FAFAF8`
- Gris: `#F2F4F7`
- Salvia: `#6B7F72`
- Terracota: `#C46A4A`

##  Tipografía

- **Manrope**: Google Fonts (400, 500, 600, 700, 800)

---

**LoopLab** - Learning Designed Around You
