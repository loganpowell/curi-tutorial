<template>
  <div>
    <header>
      <NavLinks />
    </header>
    <main>
      <component :is="$curi.response.body" />
    </main>
  </div>
</template>

<script>
  import NavLinks from './NavLinks';

  export default {
    name: 'app',
    components: { NavLinks }
  };
</script>
