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
            <NuxtLink to="/publications" class="text-blue-600 font-semibold">
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

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ t('publications.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('publications.subtitle') }}
        </p>
      </div>

      <!-- Publications List -->
      <div class="space-y-8">
        <!-- Journal Papers -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-8 border border-blue-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            {{ t('publications.journalPapers') }}
          </h2>
          <div class="space-y-6">
            <template v-for="i in 7" :key="i">
              <div class="border-l-4 pl-6 mb-6" :class="{'border-blue-500': i % 2 === 1, 'border-yellow-500': i % 2 === 0}">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ t(`publications.paper${i}.title`) }}
                </h3>
                <p class="text-gray-600 mb-2">{{ t(`publications.paper${i}.authors`) }}</p>
                <p :class="{'text-blue-600': i % 2 === 1, 'text-yellow-600': i % 2 === 0}" class="font-medium mb-2">
                  {{ t(`publications.paper${i}.journal`) }}
                </p>
                <p class="text-gray-500 text-sm mb-3">{{ t(`publications.paper${i}.year`) }}</p>
                <p class="text-gray-600 mb-3">{{ t(`publications.paper${i}.abstract`) }}</p>
                <div class="flex space-x-4">
                  <a href="#" :class="{'text-blue-600': i % 2 === 1, 'text-yellow-600': i % 2 === 0}" class="hover:opacity-75 font-medium">
                    {{ t('publications.viewPaper') }}
                  </a>
                  <a href="#" class="text-green-600 hover:text-green-800 font-medium">
                    {{ t('publications.download') }}
                  </a>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Conference Papers -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg p-8 border border-yellow-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {{ t('publications.conferencePapers') }}
          </h2>
          <div class="space-y-6">
            <div v-for="i in 2" :key="i" :class="{'border-blue-500': i === 1, 'border-yellow-500': i === 2}" class="border-l-4 pl-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t(`publications.conf${i}.title`) }}
              </h3>
              <p class="text-gray-600 mb-2">{{ t(`publications.conf${i}.authors`) }}</p>
              <p :class="{'text-blue-600': i === 1, 'text-yellow-600': i === 2}" class="font-medium mb-2">
                {{ t(`publications.conf${i}.conference`) }}
              </p>
              <p class="text-gray-500 text-sm mb-3">{{ t(`publications.conf${i}.year`) }}</p>
              <p class="text-gray-600 mb-3">{{ t(`publications.conf${i}.abstract`) }}</p>
              <div class="flex space-x-4">
                <a href="#" :class="{'text-blue-600': i === 1, 'text-yellow-600': i === 2}" class="hover:opacity-75 font-medium">
                  {{ t('publications.viewPaper') }}
                </a>
                <a href="#" class="text-green-600 hover:text-green-800 font-medium">
                  {{ t('publications.download') }}
                </a>
              </div>
            </div>            <div class="border-l-4 border-yellow-500 pl-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('publications.conf2.title') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ t('publications.conf2.authors') }}</p>
              <p class="text-yellow-600 font-medium mb-2">{{ t('publications.conf2.conference') }}</p>
              <p class="text-gray-500 text-sm mb-3">{{ t('publications.conf2.year') }}</p>
              <p class="text-gray-600 mb-3">{{ t('publications.conf2.abstract') }}</p>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">
                  {{ t('publications.viewPaper') }}
                </a>
                <a href="#" class="text-green-600 hover:text-green-800 font-medium">
                  {{ t('publications.download') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Books and Chapters -->
        <div class="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg shadow-lg p-8 border border-blue-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            {{ t('publications.books') }}
          </h2>
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('publications.book1.title') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ t('publications.book1.authors') }}</p>
              <p class="text-blue-600 font-medium mb-2">{{ t('publications.book1.publisher') }}</p>
              <p class="text-gray-500 text-sm mb-3">{{ t('publications.book1.year') }}</p>
              <p class="text-gray-600 mb-3">{{ t('publications.book1.description') }}</p>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">
                  {{ t('publications.viewBook') }}
                </a>
                <a href="#" class="text-green-600 hover:text-green-800 font-medium">
                  {{ t('publications.download') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-lg shadow-lg p-8 border border-yellow-200">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">{{ t('publications.statistics') }}</h2>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div class="text-gray-600">{{ t('publications.totalPapers') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">7</div>
              <div class="text-gray-600">{{ t('publications.journalPapers') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div class="text-gray-600">{{ t('publications.conferencePapers') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-600 mb-2">1</div>
              <div class="text-gray-600">{{ t('publications.books') }}</div>
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
