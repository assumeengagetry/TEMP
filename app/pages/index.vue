<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="text-2xl font-bold text-gray-800">
            {{ t('name') }}
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.home') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.about') }}
            </NuxtLink>
            <NuxtLink to="/publications" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.publications') }}
            </NuxtLink>
            <NuxtLink to="/awards" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.awards') }}
            </NuxtLink>
            <NuxtLink to="/hobbies" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.hobbies') }}
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="toggleLanguage" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              {{ currentLanguage === 'en' ? '中文' : 'English' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="max-w-6xl mx-auto px-4 py-20">
      <div class="text-center">
        <div class="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 flex items-center justify-center">
          <span class="text-4xl text-white font-bold">{{ t('name').charAt(0) }}</span>
        </div>
        <h1 class="text-5xl font-bold text-gray-800 mb-4">
          {{ t('name') }}
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ t('title') }}
        </p>
        <p class="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
          {{ t('description') }}
        </p>
        
        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mb-12">
          <a href="mailto:hc663@cam.ac.uk" class="text-gray-600 hover:text-blue-600 transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>

          <a href="https://scholar.google.com/citations?user=LY9Z26MAAAAJ" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 0 1-5.468-2.618 7.008 7.008 0 0 1-1.514-5.534 7 7 0 0 1 4.454-5.293 2.426 2.426 0 0 1-1.307-2.131c0-.537.193-1.053.543-1.458l.012-.014a2.449 2.449 0 0 1-.328-1.226c0-.87.462-1.669 1.212-2.106a2.423 2.423 0 0 1-.236-.986c0-1.325 1.092-2.4 2.435-2.4.886 0 1.664.468 2.094 1.168a2.427 2.427 0 0 1 2.092-1.168c1.343 0 2.435 1.075 2.435 2.4 0 .351-.083.701-.236.986.75.437 1.212 1.236 1.212 2.106 0 .436-.116.871-.328 1.226l.012.014c.35.405.543.921.543 1.458 0 .893-.478 1.71-1.307 2.131a7 7 0 0 1 4.454 5.293 7.008 7.008 0 0 1-1.514 5.534A7 7 0 0 1 12 24zm2.571-7.314a1.714 1.714 0 0 0 1.714-1.714c0-.944-.77-1.714-1.714-1.714s-1.714.77-1.714 1.714c0 .944.77 1.714 1.714 1.714zm-5.142 0A1.714 1.714 0 0 0 11.143 15c0-.944-.77-1.714-1.714-1.714S7.714 14.056 7.714 15s.77 1.686 1.714 1.686z"/>
            </svg>
          </a>

          <a href="https://www.xiaohongshu.com/user/profile/5f5b7b9e0000000001005fa1" target="_blank" class="text-gray-600 hover:text-red-600 transition-colors">
            <div class="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center text-sm font-bold">
              小
            </div>
          </a>
        </div>

        <!-- Quick Links -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink to="/about" class="bg-gradient-to-br from-yellow-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-yellow-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ t('nav.about') }}</h3>
            <p class="text-gray-600">{{ t('home.aboutDesc') }}</p>
          </NuxtLink>
          <NuxtLink to="/publications" class="bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ t('nav.publications') }}</h3>
            <p class="text-gray-600">{{ t('home.publicationsDesc') }}</p>
          </NuxtLink>
          <NuxtLink to="/awards" class="bg-gradient-to-br from-yellow-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-yellow-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ t('nav.awards') }}</h3>
            <p class="text-gray-600">{{ t('home.awardsDesc') }}</p>
          </NuxtLink>
          <NuxtLink to="/hobbies" class="bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ t('nav.hobbies') }}</h3>
            <p class="text-gray-600">{{ t('home.hobbiesDesc') }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, toggleLanguage, currentLanguage } = useLanguage()
</script>
