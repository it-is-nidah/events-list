<template>
  <div class="ents-list">
    <h1>Events list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event  " />
    <BaseIcon />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style></style>
