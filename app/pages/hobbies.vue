<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="text-2xl font-bold text-gray-800">
            {{ $t('name') }}
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.about') }}
            </NuxtLink>
            <NuxtLink to="/publications" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.publications') }}
            </NuxtLink>
            <NuxtLink to="/awards" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.awards') }}
            </NuxtLink>
            <NuxtLink to="/hobbies" class="text-blue-600 font-semibold">
              {{ $t('nav.hobbies') }}
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="toggleLanguage" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              {{ $currentLanguage === 'en' ? '中文' : 'English' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ $t('hobbies.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t('hobbies.subtitle') }}
        </p>
      </div>

      <!-- Hobbies Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Photography -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-blue-200">
                      <div class="h-48 bg-gradient-to-br from-blue-400 to-yellow-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.photography.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.photography.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Landscape</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Portrait</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Street</span>
            </div>
          </div>
        </div>

        <!-- Reading -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-yellow-200">
                      <div class="h-48 bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.reading.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.reading.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Fiction</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Non-fiction</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Sci-fi</span>
            </div>
          </div>
        </div>

        <!-- Hiking -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-blue-200">
                      <div class="h-48 bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.hiking.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.hiking.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Mountains</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Trails</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Nature</span>
            </div>
          </div>
        </div>

        <!-- Cooking -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-yellow-200">
          <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.cooking.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.cooking.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Italian</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Asian</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Baking</span>
            </div>
          </div>
        </div>

        <!-- Music -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-blue-200">
                      <div class="h-48 bg-gradient-to-br from-blue-400 to-yellow-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.music.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.music.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Jazz</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Classical</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Rock</span>
            </div>
          </div>
        </div>

        <!-- Travel -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-yellow-200">
                      <div class="h-48 bg-gradient-to-br from-yellow-400 to-blue-500 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('hobbies.travel.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('hobbies.travel.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Europe</span>
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Asia</span>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Adventure</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activities -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">{{ $t('hobbies.recentActivities') }}</h2>
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-8 border border-blue-200">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ $t('hobbies.lastWeek') }}</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity1') }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity2') }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity3') }}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ $t('hobbies.thisWeek') }}</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity4') }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity5') }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span class="text-gray-600">{{ $t('hobbies.activity6') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Favorite Quotes -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">{{ $t('hobbies.favoriteQuotes') }}</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg p-6 border border-yellow-200">
            <blockquote class="text-gray-600 italic mb-4">
              "{{ $t('hobbies.quote1.text') }}"
            </blockquote>
            <cite class="text-gray-500">— {{ $t('hobbies.quote1.author') }}</cite>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-6 border border-blue-200">
            <blockquote class="text-gray-600 italic mb-4">
              "{{ $t('hobbies.quote2.text') }}"
            </blockquote>
            <cite class="text-gray-500">— {{ $t('hobbies.quote2.author') }}</cite>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $t, $setLanguage, $currentLanguage } = useNuxtApp()

const toggleLanguage = () => {
  const newLang = $currentLanguage.value === 'en' ? 'zh' : 'en'
  $setLanguage(newLang)
}
</script>
