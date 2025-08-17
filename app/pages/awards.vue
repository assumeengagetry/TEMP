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
            <NuxtLink to="/awards" class="text-blue-600 font-semibold">
              {{ $t('nav.awards') }}
            </NuxtLink>
            <NuxtLink to="/hobbies" class="text-gray-600 hover:text-blue-600 transition-colors">
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
          {{ $t('awards.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t('awards.subtitle') }}
        </p>
      </div>

      <!-- Awards Timeline -->
      <div class="space-y-8">
        <!-- Academic Awards -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg p-8 border border-yellow-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>
            {{ $t('awards.academicAwards') }}
          </h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award1.title') }}
                </h3>
                <p class="text-blue-600 font-medium mb-2">{{ $t('awards.award1.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award1.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award1.description') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award2.title') }}
                </h3>
                <p class="text-yellow-600 font-medium mb-2">{{ $t('awards.award2.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award2.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award2.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Research Awards -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-8 border border-blue-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
            {{ $t('awards.researchAwards') }}
          </h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award3.title') }}
                </h3>
                <p class="text-blue-600 font-medium mb-2">{{ $t('awards.award3.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award3.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award3.description') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award4.title') }}
                </h3>
                <p class="text-yellow-600 font-medium mb-2">{{ $t('awards.award4.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award4.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award4.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Awards -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg p-8 border border-yellow-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
            </svg>
            {{ $t('awards.professionalAwards') }}
          </h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award5.title') }}
                </h3>
                <p class="text-blue-600 font-medium mb-2">{{ $t('awards.award5.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award5.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award5.description') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ $t('awards.award6.title') }}
                </h3>
                <p class="text-yellow-600 font-medium mb-2">{{ $t('awards.award6.organization') }}</p>
                <p class="text-gray-500 text-sm mb-3">{{ $t('awards.award6.year') }}</p>
                <p class="text-gray-600">{{ $t('awards.award6.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-8 border border-blue-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">{{ $t('awards.statistics') }}</h2>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div class="text-gray-600">{{ $t('awards.totalAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">5</div>
              <div class="text-gray-600">{{ $t('awards.academicAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div class="text-gray-600">{{ $t('awards.researchAwards') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">3</div>
              <div class="text-gray-600">{{ $t('awards.professionalAwards') }}</div>
            </div>
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
