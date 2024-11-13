<!-- <script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const username = writable(localStorage?.getItem('username') || '');
  const loggedIn = writable(!!localStorage?.getItem('username'));

  let input = '';

  function login() {
    if (input) {
      localStorage?.setItem('username', input);
      username.set(input);
      loggedIn.set(true);
    }
  }

  function logout() {
    localStorage?.removeItem('username');
    username.set('');
    loggedIn.set(false);
  }

  onMount(() => {
    username.subscribe((value) => {
      if (value) {
        localStorage?.setItem('username', value);
      }
    });
  });
</script>

{#if $loggedIn}
  <h1>Welcome, {$username}!</h1>
  <button on:click={logout}>Logout</button>
{:else}
  <h1>Login</h1>
  <input type="text" bind:value={input} placeholder="Enter username" />
  <button on:click={login}>Login</button>
{/if} -->
