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
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          {{ t('publications.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ t('publications.subtitle') }}
        </p>
      </div>

      <!-- Publications List -->
      <div class="space-y-12">
        <!-- Journal Papers -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            {{ t('publications.journalPapers') }}
          </h2>
          <div class="space-y-8">
            <template v-for="i in 7" :key="i">
              <div class="border-l-4 pl-6" :class="{'border-blue-500': i % 2 === 1, 'border-yellow-500': i % 2 === 0}">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ t(`publications.paper${i}.title`) }}
                </h3>
                <p class="text-gray-600 mb-2" v-html="t(`publications.paper${i}.authors`)"></p>
                <p :class="{'text-blue-600': i % 2 === 1, 'text-yellow-600': i % 2 === 0}" class="font-medium mb-2">
                  {{ t(`publications.paper${i}.journal`) }}
                </p>
                <p class="text-gray-500 text-sm mb-3">{{ t(`publications.paper${i}.year`) }}</p>
                <p class="text-gray-600 mb-3">{{ t(`publications.paper${i}.abstract`) }}</p>
                <div class="flex space-x-4">

                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Conference Papers -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            {{ t('publications.conferencePapers') }}
          </h2>
          <div class="space-y-8">
            <template v-for="i in 2" :key="i">
              <div class="border-l-4 pl-6" :class="{'border-blue-500': i === 1, 'border-yellow-500': i === 2}">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  {{ t(`publications.conf${i}.title`) }}
                </h3>
                <p class="text-gray-600 mb-2" v-html="t(`publications.paper${i}.authors`)"></p>
                <p :class="{'text-blue-600': i === 1, 'text-yellow-600': i === 2}" class="font-medium mb-2">
                  {{ t(`publications.conf${i}.conference`) }}
                </p>
                <p class="text-gray-500 text-sm mb-3">{{ t(`publications.conf${i}.year`) }}</p>
                <p class="text-gray-600 mb-3">{{ t(`publications.conf${i}.abstract`) }}</p>
                <div class="flex space-x-4">

                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- ArXiv Papers -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            {{ t('Publications Arxiv') }}
          </h2>
          <div class="border-l-4 border-blue-500 pl-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ t('publications.arxiv1.title') }}
            </h3>
            <p class="text-gray-600 mb-2" v-html="t('publications.arxiv1.authors')"></p>
            <p class="text-gray-500 text-sm mb-3">{{ t('publications.arxiv1.year') }}</p>
            <p class="text-gray-600 mb-3">{{ t('publications.arxiv1.description') }}</p>
            <div class="flex space-x-4">

            </div>
          </div>
        </div>

        <!-- Statistics -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">{{ t('publications.statistics') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
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
