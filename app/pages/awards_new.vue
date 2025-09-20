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
            <NuxtLink to="/awards" class="text-blue-600 font-semibold">
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

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ t('awards.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('awards.subtitle') }}
        </p>
      </div>

      <!-- Awards List -->
      <div class="space-y-12">
        <!-- Academic Awards -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            {{ t('awards.academicAwards') }}
          </h2>
          <div class="space-y-6">
            <div v-for="i in 3" :key="i" class="border-l-4 pl-6" :class="{'border-blue-500': i % 2 === 1, 'border-yellow-500': i % 2 === 0}">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t(`awards.award${i}.title`) }}
              </h3>
              <p :class="{'text-blue-600': i % 2 === 1, 'text-yellow-600': i % 2 === 0}" class="font-medium mb-2">
                {{ t(`awards.award${i}.organization`) }}
              </p>
              <p class="text-gray-500 text-sm mb-3">{{ t(`awards.award${i}.year`) }}</p>
              <p class="text-gray-600">{{ t(`awards.award${i}.description`) }}</p>
            </div>
          </div>
        </div>

        <!-- Research & Teaching Awards -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            {{ t('awards.researchAwards') }}
          </h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('awards.award4.title') }}
              </h3>
              <p class="text-blue-600 font-medium mb-2">
                {{ t('awards.award4.organization') }}
              </p>
              <p class="text-gray-500 text-sm mb-3">{{ t('awards.award4.year') }}</p>
              <p class="text-gray-600">{{ t('awards.award4.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Other Achievements -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
            {{ t('awards.professionalAwards') }}
          </h2>
          <div class="space-y-6">
            <div class="border-l-4 border-yellow-500 pl-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('awards.award5.title') }}
              </h3>
              <p class="text-yellow-600 font-medium mb-2">
                {{ t('awards.award5.organization') }}
              </p>
              <p class="text-gray-500 text-sm mb-3">{{ t('awards.award5.year') }}</p>
              <p class="text-gray-600">{{ t('awards.award5.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">{{ t('awards.statistics') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div class="text-gray-600">{{ t('awards.totalAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">3</div>
              <div class="text-gray-600">{{ t('awards.academicAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div class="text-gray-600">{{ t('awards.researchAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">1</div>
              <div class="text-gray-600">{{ t('awards.professionalAwards') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, toggleLanguage, currentLanguage } = useLanguage()
</script>
