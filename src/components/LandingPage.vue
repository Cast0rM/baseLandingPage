<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">

    <!-- HEADER FIJO -->
    <q-header elevated class="bg-white text-dark">
      <q-toolbar class="q-px-md q-py-sm">
        <q-btn flat no-caps stretch @click="scrollTo('hero')" class="q-pa-xs">
          <q-avatar size="40px" class="q-mr-sm">
            <img :src="siteData.brand.logo" :alt="siteData.brand.name" />
          </q-avatar>
          <div class="text-h6 text-weight-bold">{{ siteData.brand.name }}</div>
        </q-btn>

        <q-space />

        <!-- Desktop Nav -->
        <div class="gt-xs">
          <q-btn
            v-for="nav in siteData.navigation"
            :key="nav.target"
            flat
            :label="nav.label"
            @click="scrollTo(nav.target)"
            class="text-weight-medium q-mx-xs"
          />
        </div>

        <!-- Mobile Nav -->
        <div class="lt-sm">
          <q-btn flat round dense icon="menu" color="dark">
            <q-menu>
              <q-list style="min-width: 200px">
                <q-item
                  v-for="nav in siteData.navigation"
                  :key="nav.target"
                  clickable
                  v-close-popup
                  @click="scrollTo(nav.target)"
                >
                  <q-item-section class="text-weight-medium text-center">
                    {{ nav.label }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>

      <!-- 1. HERO SECTION -->
      <q-page
        id="hero"
        class="hero-section flex flex-center text-center q-pa-md"
        :style="{ backgroundImage: `url(${siteData.hero.backgroundImage})` }"
      >
        <div class="hero-overlay"></div>
        <div class="hero-content" style="max-width: 800px; width: 100%; position: relative; z-index: 1;">
          <h1 class="text-h2 text-weight-bold q-mb-md text-white" style="line-height: 1.2;">
            {{ siteData.hero.title }}
          </h1>
          <p class="text-h5 q-mb-xl text-grey-3">
            {{ siteData.hero.subtitle }}
          </p>
          <q-btn
            color="primary"
            size="lg"
            :label="siteData.hero.cta.label"
            no-caps
            rounded
            class="q-px-xl text-weight-bold shadow-4"
            @click="scrollTo(siteData.hero.cta.target)"
          />
        </div>
      </q-page>

      <!-- 2. SERVICIOS SECTION -->
      <section id="servicios" class="q-py-xl q-px-md bg-grey-1">
        <div class="section-container q-mx-auto">
          <h2 class="text-h3 text-center text-weight-bold q-mb-xl text-dark q-mt-none">
            {{ siteData.services.title }}
          </h2>
          <div class="row q-col-gutter-lg justify-center">
            <div
              class="col-12 col-sm-6 col-md-3"
              v-for="(service, index) in siteData.services.items"
              :key="index"
            >
              <q-card class="full-height column text-center q-pa-md card-hover">
                <q-card-section>
                  <q-icon :name="service.icon" size="4rem" color="primary" class="q-mb-md" />
                  <div class="text-h6 text-weight-bold q-mb-sm">{{ service.title }}</div>
                  <div class="text-body1 text-grey-8">{{ service.description }}</div>
                </q-card-section>
                <q-space />
                <q-card-section v-if="service.price" class="q-pt-none">
                  <div class="text-subtitle1 text-primary text-weight-bold">
                    {{ service.price }}
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. GALERÍA SECTION -->
      <section id="galeria" class="q-py-xl q-px-md bg-white">
        <div class="section-container q-mx-auto">
          <h2 class="text-h3 text-center text-weight-bold q-mb-xl text-dark q-mt-none">
            {{ siteData.gallery.title }}
          </h2>
          <div class="row q-col-gutter-md justify-center">
            <div
              class="col-12 col-sm-6 col-md-4"
              v-for="(img, index) in siteData.gallery.images"
              :key="index"
            >
              <q-img
                :src="img"
                ratio="4/3"
                class="rounded-borders shadow-2 card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 4. FOOTER / CONTACTO -->
      <footer id="contacto" class="bg-dark text-white q-py-md q-px-md">
      <div class="section-container q-mx-auto">
        <div class="row q-col-gutter-lg">

          <!-- Info Column -->
          <div class="col-12 col-md-6">
            <div class="text-h5 text-weight-bold q-mb-md">{{ siteData.contact.title }}</div>
            <q-list class="q-mb-md" dark>
              <q-item class="q-px-none">
                <q-item-section avatar>
                  <q-icon name="place" color="primary" />
                </q-item-section>
                <q-item-section>{{ siteData.contact.address }}</q-item-section>
              </q-item>
              <q-item class="q-px-none">
                <q-item-section avatar>
                  <q-icon name="phone" color="primary" />
                </q-item-section>
                <q-item-section>{{ siteData.contact.phone }}</q-item-section>
              </q-item>
              <q-item class="q-px-none">
                <q-item-section avatar>
                  <q-icon name="email" color="primary" />
                </q-item-section>
                <q-item-section>{{ siteData.contact.email }}</q-item-section>
              </q-item>
              <q-item class="q-px-none">
                <q-item-section avatar>
                  <q-icon name="schedule" color="primary" />
                </q-item-section>
                <q-item-section>{{ siteData.contact.hours }}</q-item-section>
              </q-item>
            </q-list>

            <div class="row q-gutter-sm">
              <q-btn round flat color="white" class="bg-primary" icon="fab fa-facebook-f" />
              <q-btn round flat color="white" class="bg-primary" icon="fab fa-instagram" />
              <q-btn round flat color="white" class="bg-primary" icon="fab fa-whatsapp" />
            </div>
          </div>

          <!-- Map column -->
          <div class="col-12 col-md-6">
            <div class="rounded-borders overflow-hidden shadow-3" style="height: 250px; width: 100%;">
              <iframe
                :src="siteData.contact.mapIframe"
                width="100%"
                height="100%"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <q-separator dark class="q-my-md" style="opacity: 0.2" />

        <div class="text-center text-grey-5">
          &copy; {{ new Date().getFullYear() }} {{ siteData.brand.name }}. Todos los derechos reservados.
        </div>
      </div>
      </footer>

    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { setCssVar } from 'quasar'

// ─── SINGLE SOURCE OF TRUTH ─────────────────────────────────────────────────
// Cambia únicamente este objeto para adaptar la web a cualquier cliente.
const siteData = ref({
  brand: {
    name: 'AutoFix Pro',
    logo: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
    colors: {
      primary: '#D32F2F',
      secondary: '#1976D2'
    }
  },
  navigation: [
    { label: 'Inicio',    target: 'hero' },
    { label: 'Servicios', target: 'servicios' },
    { label: 'Galería',   target: 'galeria' },
    { label: 'Contacto',  target: 'contacto' }
  ],
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1597826335552-4467ec6db664?w=1600',
    title: 'Expertos en Mantenimiento Automotriz',
    subtitle: 'Diagnóstico avanzado, reparaciones con garantía y el mejor trato para tu vehículo.',
    cta: { label: 'Ver Servicios', target: 'servicios' }
  },
  services: {
    title: 'Nuestros Servicios',
    items: [
      {
        icon: 'build',
        title: 'Mantenimiento General',
        description: 'Cambio de aceite, filtros, revisión de niveles y chequeo de 50 puntos de seguridad.',
        price: 'Desde $49'
      },
      {
        icon: 'settings',
        title: 'Frenos y Suspensión',
        description: 'Diagnóstico inteligente y reemplazo de balatas, discos y amortiguadores.',
        price: 'Desde $89'
      },
      {
        icon: 'bolt',
        title: 'Diagnóstico Eléctrico',
        description: 'Escaneo por computadora y solución de fallos eléctricos y de inyección.',
        price: 'Variable'
      },
      {
        icon: 'ac_unit',
        title: 'Aire Acondicionado',
        description: 'Recuperación, vacío, recarga de gas y reparación de fugas en el compresor.',
        price: 'Desde $69'
      }
    ]
  },
  gallery: {
    title: 'Nuestras Instalaciones',
    images: [
      'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
      'https://images.unsplash.com/photo-1616782352136-189f33ae18ab?w=800'
    ]
  },
  contact: {
    title: 'Contacto',
    address: 'Av. Motor 123, Distrito Industrial, Ciudad',
    phone: '+1 234 567 8900',
    email: 'taller@autofixpro.com',
    hours: 'Lun-Vie: 8:00 AM – 6:00 PM | Sáb: 9:00 AM – 2:00 PM',
    mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.868778401306!2d-99.1417072!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026e63dfaf9%3A0x6bbaeee040dfdcab!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx'
  }
})

// Inyecta los colores de marca de forma dinámica en Quasar
onMounted(() => {
  const { primary, secondary } = siteData.value.brand.colors
  if (primary)   setCssVar('primary', primary)
  if (secondary) setCssVar('secondary', secondary)
})

// Smooth scroll con offset del header fijo
const scrollTo = (targetId) => {
  const el = document.getElementById(targetId)
  if (!el) return
  const headerOffset = 64
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<style scoped>
.section-container {
  max-width: 1200px;
}

.hero-section {
  position: relative;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}
</style>
