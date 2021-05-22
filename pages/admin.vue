<template>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      return redirect('https://startop-cms.herokuapp.com/admin');
    }
  }
</script>