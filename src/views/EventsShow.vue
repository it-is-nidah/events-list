<template>
  <div class="events-show">
    <h3>Showing event number {{ id }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Array
    }
  }
};
</script>
