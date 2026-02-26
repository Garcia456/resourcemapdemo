import { defineStore } from 'pinia'
import type { eventWithTime } from '@rrweb/types'
export const useEventStore = defineStore('eventStore', {
  state: () => {
    events: []
  },
  getters: {},
  actions: {
    setEvents(events: eventWithTime[]) {
      this.events = events
    },
    getEvents(){
      return this.events
    }
  }
})