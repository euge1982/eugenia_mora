<script setup lang="ts">
// importar reactive
// importart useThemeStore
import { reactive } from 'vue';
import { useThemeStore } from './stores/themeStore';

// iconos
import { MoonIcon, SunIcon, LinkIcon } from '@heroicons/vue/24/solid'

// instanciar useThemeStore
const themeStore = useThemeStore()
// crear variable reactiva con objeto useStore
const reactiveTheme = reactive(themeStore)

</script>

<template>
  <!--#### App.vue
- Debemos importar nuestro useThemeStore, e instanciarlo en una variable reactiva.
- Luego utilizarlo en las directivas indicadas-->

  <!-- usar directiva v-bind:class para asignar clase class si isDark en el store es true -->
  <div class="wrapper transition ease-linear" v-bind:class="reactiveTheme.isDark ? 'dark' : ''">
    <div class="btn-wrapper">
      <div class="toggle-btn flex items-center justify-center w-full my-4">
        <label for="toggle" class="flex items-center justify-center cursor-pointer">
          <div class="relative">
            <!-- usar directiva @click para ejecutar el metodo para cambiar de dark a light o viceversa -->
            <input @click="reactiveTheme.toggleDarkMode()" type="checkbox" id="toggle" class="sr-only"/>
            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              class="dot absolute left-1 top-1 bg-black w-6 h-6 flex items-center justify-center rounded-full transition">
              <!-- usar directiva v-if  para mostrar el icono de luna o sol usando isDark como referencia -->
              <MoonIcon class="w-4 h-4 text-white" v-if="reactiveTheme.isDark" />
              <SunIcon class="w-full h-full text-yellow-500 p-1" v-else/>
            </div>
          </div>

          <!-- cambiar usar v-bind:class y atributo mode del ThemeState para cambiar el texto -->
          <div class="label-text ml-2 font-medium" v-bind:class="reactiveTheme.isDark ? 'dark' : ''">
          {{ reactiveTheme.mode }}</div>
        </label>
      </div>
    </div>
    <!-- usar directiva v-bind:class para asignar clase class si isDark en el store es true -->
    <div class="img min-h-screen flex flex-col items-center transition" :class="reactiveTheme.isDark ? 'dark' : ''"></div>
    <div class="todo flex-1 lg:w-2/3 xl:w-2/5 w-full px-7">
      <RouterView />
    </div>
  </div>
  <div class="absolute bottom-0 w-full h-20 flex flex-col justify-center items-center bg-slate-500 text-xl font-semibold">
    <div class="unknowncode"><span class="font-light mx-2">by</span>unknown<span class="text-gray-200 font-normal">code</span>44</div>
    <p class="text-sm font-normal">Matias Orellana 2024</p>
    <a class="text-sm font-normal text-white cursor-pointer flex flex-row justify-around items-center" href="https://github.com/unknowncode44"><LinkIcon class="h-3 w-3 mx-2"/> GitHub</a>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  background: #fff;
}

.wrapper.dark {
  background: #434343;
}

.img {
  background-image: url('https://github.com/cloworm/todo/blob/master/public/images/bg-desktop-light.jpg?raw=true');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.img.dark {
  background: url('https://github.com/cloworm/todo/blob/master/public/images/bg-desktop-dark.jpg?raw=true');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.btn-wrapper {
  position: absolute;
  right: 16px;
}

input:checked~.dot {
  transform: translateX(100%);
  background-color: rgb(77, 148, 255);
}

.label-text {
  color: white;
}

.label-text.dark {
  color: black;
}

.todo {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
