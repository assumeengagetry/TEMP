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
              <a href="mailto:kun2025@163.com" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Email</span>
              </a>

              <a href="https://scholar.google.com/citations?user=LY9Z26MAAAAJ" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 0 1-5.468-2.618 7.008 7.008 0 0 1-1.514-5.534 7 7 0 0 1 4.454-5.293 2.426 2.426 0 0 1-1.307-2.131c0-.537.193-1.053.543-1.458l.012-.014a2.449 2.449 0 0 1-.328-1.226c0-.87.462-1.669 1.212-2.106a2.423 2.423 0 0 1-.236-.986c0-1.325 1.092-2.4 2.435-2.4.886 0 1.664.468 2.094 1.168a2.427 2.427 0 0 1 2.092-1.168c1.343 0 2.435 1.075 2.435 2.4 0 .351-.083.701-.236.986.75.437 1.212 1.236 1.212 2.106 0 .436-.116.871-.328 1.226l.012.014c.35.405.543.921.543 1.458 0 .893-.478 1.71-1.307 2.131a7 7 0 0 1 4.454 5.293 7.008 7.008 0 0 1-1.514 5.534A7 7 0 0 1 12 24zm2.571-7.314a1.714 1.714 0 0 0 1.714-1.714c0-.944-.77-1.714-1.714-1.714s-1.714.77-1.714 1.714c0 .944.77 1.714 1.714 1.714zm-5.142 0A1.714 1.714 0 0 0 11.143 15c0-.944-.77-1.714-1.714-1.714S7.714 14.056 7.714 15s.77 1.686 1.714 1.686z"/>
                </svg>
                <span>Google Scholar</span>
              </a>

              <a href="https://www.xiaohongshu.com/user/profile/5f5b7b9e0000000001005fa1" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <div class="w-5 h-5 bg-red-500 text-white rounded flex items-center justify-center text-xs font-bold">
                  小
                </div>
                <span>小红书</span>
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
                Here is <span class="text-3xl font-black">{{ t('name') }}</span>
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
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Photonic Devices</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Sensors</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">EM Wave Modeling</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Wireless Communication</span>
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
