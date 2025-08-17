<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="text-3xl font-bold text-gray-900">
            {{ $t('name') }}
          </div>
          <nav class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-blue-600 font-semibold border-b-2 border-blue-600">
              {{ $t('nav.about') }}
            </NuxtLink>
            <NuxtLink to="/publications" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.publications') }}
            </NuxtLink>
            <NuxtLink to="/awards" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.awards') }}
            </NuxtLink>
            <NuxtLink to="/hobbies" class="text-gray-600 hover:text-blue-600 transition-colors">
              {{ $t('nav.hobbies') }}
            </NuxtLink>
            <NuxtLink to="/blogs" class="text-gray-600 hover:text-blue-600 transition-colors">
              BLOGS
            </NuxtLink>
          </nav>
          <div class="flex items-center space-x-4">
            <button @click="toggleLanguage" class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              {{ $currentLanguage === 'en' ? '中文' : 'English' }}
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
                <span class="text-6xl text-white font-bold">{{ $t('name').charAt(0) }}</span>
              </div>
              <h2 class="text-xl font-semibold text-gray-800 text-center">{{ $t('name') }}</h2>
            </div>

            <!-- Contact Links -->
            <div class="space-y-3">
              <a href="mailto:example@email.com" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>Email</span>
              </a>
              
              <a href="#" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>My CV</span>
              </a>

              <a href="https://twitter.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </a>

              <a href="https://linkedin.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Github</span>
              </a>

              <a href="https://scholar.google.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0 9.224 2.299 6.5l5.241 3.269L5.242 13.769zM24 9.224l-5.242 4.545L16.5 9.769 21.699 6.5 24 9.224zM12 0L8.5 3.5 12 7l3.5-3.5L12 0zM0 9.224l2.299 2.724L0 14.672V9.224zM24 14.672l-2.299-2.724L24 9.224v5.448z"/>
                </svg>
                <span>Google Scholar</span>
              </a>

              <a href="https://researchgate.net" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                </svg>
                <span>ResearchGate</span>
              </a>

              <a href="https://zhihu.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <span class="w-5 h-5 bg-blue-600 text-white rounded flex items-center justify-center text-xs font-bold">知</span>
                <span>Zhihu</span>
              </a>

              <a href="#" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <div class="w-5 h-5 bg-red-500 text-white rounded flex items-center justify-center text-xs">红</div>
                <span>RedNote</span>
              </a>

              <a href="https://bilibili.com" target="_blank" class="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                <div class="w-5 h-5 bg-pink-500 text-white rounded flex items-center justify-center text-xs font-bold">B</div>
                <span>Bilibili</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="lg:w-2/3">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">{{ $t('about.title') }}</h1>
            
            <!-- About Me Content -->
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-700 mb-6">
                Here is {{ $t('name') }} (Lance, 蔡汉霖).
              </p>
              
              <div class="flex flex-col lg:flex-row gap-8 mb-6">
                <div class="flex-1">
                  <p class="text-gray-700 mb-4">
                    {{ $t('about.description') }} I also had the pleasure of participating in a summer research program with Prof. Pietro Liò at the Artificial Intelligence Group.
                  </p>
                  
                  <p class="text-gray-700 mb-4">
                    Prior to Cambridge, I have worked on wireless networks and cybersecurity under the guidance of Prof. Zhezhuang Xu and Dr. Meng Yuan. Besides, I was honored to be selected as an Undergraduate Scholar at the leading conferences AAAI 2024 and SIGKDD 2024.
                  </p>
                  
                  <p class="text-gray-700">
                    {{ $t('about.description2') }} If you are interested in any aspect of me, I am always open to discussions and academic collaborations. Feel free to reach out to me at — <a href="mailto:hc663@cam.ac.uk" class="text-blue-600 hover:text-blue-800">hc663 [at] cam.ac.uk</a>
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
const { $t, $setLanguage, $currentLanguage } = useNuxtApp()

const toggleLanguage = () => {
  const newLang = $currentLanguage.value === 'en' ? 'zh' : 'en'
  $setLanguage(newLang)
}
</script>
