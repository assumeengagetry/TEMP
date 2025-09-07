<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="text-3xl font-bold text-gray-900">
            {{ t('name') }}
          </div>
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ t('nav.home') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-blue-600 font-semibold border-b-2 border-blue-600">
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
          </nav>
          <div class="flex items-center space-x-4">
            <button @click="toggleLanguage" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              {{ currentLanguage === 'en' ? '中文' : 'English' }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Sidebar -->
        <div class="lg:w-1/3">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-8">
            <!-- Profile Picture -->
            <div class="flex flex-col items-center mb-6">
              <div class="w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 flex items-center justify-center mb-4">
                <span class="text-6xl text-white font-bold">{{ t('name').charAt(0) }}</span>
              </div>
              <h2 class="text-xl font-semibold text-gray-800 text-center">{{ t('name') }}</h2>
            </div>

            <!-- Contact Links -->
            <div class="space-y-3">
              <a href="mailto:xsk13969662263@outlook.com" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Email</span>
              </a>
              

              <a href="https://x.com/engageassume" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </a>

              <a href="https://github.com/assumeengagetry" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Github</span>
              </a>

              <a href="https://space.bilibili.com/435520663?spm_id_from=333.1007.0.0" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <div class="w-5 h-5 bg-pink-500 text-white rounded flex items-center justify-center text-xs font-bold">B</div>
                <span>Bilibili</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="lg:w-2/3">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">{{ t('about.title') }}</h1>
            
            <!-- About Me Content -->
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-700 mb-6">
                Here is {{ t('name') }} .
              </p>
              
              <div class="flex flex-col lg:flex-row gap-8 mb-6">
                <div class="flex-1">
                  <p class="text-gray-700 mb-4">
                    {{ t('about.description') }} I also had the pleasure of participating in a summer research program with Prof. Pietro Liò at the Artificial Intelligence Group.
                  </p>
                  
                  <p class="text-gray-700 mb-4">
                    Prior to Cambridge, I have worked on wireless networks and cybersecurity under the guidance of Prof. Zhezhuang Xu and Dr. Meng Yuan. Besides, I was honored to be selected as an Undergraduate Scholar at the leading conferences AAAI 2024 and SIGKDD 2024.
                  </p>
                  
                  <p class="text-gray-700">
                    {{ t('about.description2') }} If you are interested in any aspect of me, I am always open to discussions and academic collaborations. Feel free to reach out to me at — <a href="mailto:hc663@cam.ac.uk" class="text-blue-600 hover:text-blue-800">hc663 [at] cam.ac.uk</a>
                  </p>
                </div>
                
                <!-- Academic Photo -->
                <div class="lg:w-1/3">
                  <div class="w-full h-64 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span class="text-4xl text-white font-bold">Academic Photo</span>
                  </div>
                </div>
              </div>

              <!-- Skills Section -->
              <div class="mt-8">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Wireless Networks</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Cybersecurity</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Internet of Things</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Artificial Intelligence</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                </div>
              </div>
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
