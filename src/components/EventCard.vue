<template>
  <router-link class="event-link" :to="{ name: 'events-show', params: { id: '2' }}">
    <div class="event-card -shadow">
      <span class="eyebrow">on {{ event.date }} @ {{event.time}}</span>
      <h4 class="title">{{ event.title }}</h4>
      <span>{{ event.attendees.lenght }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: "Vue Mastery Vue course",
        date: "19 APR 2020",
        time: "1400hrs",
        attendees: [
          { id: "123", name: "Leonidah" },
          { id: "234", name: "Chepkoech" }
        ]
      }
    };
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
