<script lang="ts">
    import { navigateTo } from '$lib/util';
    import type { ComponentProps } from 'svelte';

    let { toggleSidebar }: ComponentProps<any> = $props();

    const menuItems = [
      { name: 'Home', path: '/', iconClass: 'fas fa-home' },
      { name: 'Profile', path: '/profile', iconClass: 'fas fa-th-large' },
      { name: 'Services', path: '/my-services', iconClass: 'fas fa-tools' },
      { name: 'Dashboard', path: '/dashboard', iconClass: 'fas fa-tachometer-alt' },
      { name: 'Commission', path: '/my-commission', iconClass: 'fas fa-boxes' },
      { name: 'Settings', path: '/settings', iconClass: 'fas fa-cog' },
      { name: 'Log out', path: '/logout', iconClass: 'fas fa-sign-out-alt' },
    ];
  
    function handleKeyPress(event: KeyboardEvent, path: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      navigateTo(path);
    }
  }

  function handleScrimKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSidebar();
    }
  }
  </script>
  
  <div class="scrim" role="button" tabindex="0" onclick={toggleSidebar} onkeypress={handleScrimKeyPress}>
    <aside class="w-48 bg-white border-r border-gray-300 p-4 flex flex-col items-center">
        <button onclick={() => toggleSidebar()}>Sidebar</button>
        <ul class="w-full space-y-2">
          {#each menuItems as item}
            <li>
              <button
                type="button"
                onclick={() => navigateTo(item.path)}
                onkeypress={(e) => handleKeyPress(e, item.path)}
                class="w-full flex items-center justify-center gap-3 p-3 text-gray-600 hover:bg-gray-100 hover:text-orange-500 focus:bg-gray-100 focus:text-orange-500 focus:outline-none transition"
              >
                <i class={item.iconClass + " text-xl"} aria-hidden="true"></i>
                <span class="text-sm font-medium">{item.name}</span>
              </button>
            </li>
          {/each}
        </ul>
      </aside>
  </div>
  
<style lang="css">
    aside {
        position: absolute;
    }

    .scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
  