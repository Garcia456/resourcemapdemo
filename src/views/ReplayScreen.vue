<template>
  <el-button type="primary" @click="onPlay">回放</el-button>
  <hr />
  <div class="replay-container" style="top: 300px"></div>
</template>

<script setup lang="ts">
import rrwebPlayer from "rrweb-player";
import 'rrweb-player/dist/style.css'
import { useEventStore } from "@/stores/eventStore";
const eventStore = useEventStore();
const events = eventStore.getEvents();

const onPlay = () => {
  if(events.length == 0) return
  new rrwebPlayer({
    target: document.querySelector(".replay-container"),
    props: {
      events,
    },
  });
};
</script>

<style scoped></style>
